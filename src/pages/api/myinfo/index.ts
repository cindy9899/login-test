import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

const db = new PrismaClient()
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const session = await getServerSession(req, res, authOptions)
    if(req.method === 'GET') { // 원래 본인 정보
        try{
            const user_info = await db.user.findFirst({
                where: {
                    id: session?.user.id
                },
                select: {
                    id: true,
                    name: true,
                    nickname: true,
                    email: true,
                    phone: true
                }
            })
            
            const settle_info = await db.user_Settle_Info.findFirst({
                where: {
                    user_code: session?.user.user_code
                },
                select: {
                    bank: true,
                    account_num: true,
                    name: true
                }
            })

            // const bank_info = await db.bank_type.findMany({
            //     where: {
            //         type: "real"
            //     },
            //     select: {
            //         code: true,
            //         name: true
            //     }
            // })
            
            res.json({
                user_info: user_info,
                settle_info: settle_info,
                // bank_info: bank_info
            })

        }catch(e){
            throw e;
        }
    }

    if(req.method === 'POST'){ // 본인 정보 수정
        try{
            const {new_password, check_password, nickname, email, phone, bank, account_num, account_password} = req.body
            if(new_password){ // 비밀번호 재설정
                if(new_password !== check_password){
                    return res.json({
                        errorMessage: "비밀번호 확인이 일치하지 않습니다."
                    })
                }
                // 비밀번호 업데이트 기능
                await db.user.update({
                    where: {
                        id: session?.user.id
                    },
                    data: {
                        password: new_password
                    }
                })
            }

            // 정산계좌 테이블은 업데이트 시에 이 테이블만의 로그가 남아야하므로 따로 처리
            const user_settle = await db.user_Settle_Info.findFirst({
                where: {
                    user_code: session?.user.user_code
                },
                select: {
                    bank: true,
                    account_num: true,
                    account_password: true
                }
            })

            // 하나라도 정보가 달라지거나 새로운 출금비밀번호가 들어오지 않으면 업데이트
            if(user_settle?.bank!==bank || user_settle?.account_num !== account_num || account_password !== '' || user_settle?.account_password !== account_password){
                await db.user_Settle_Info.update({
                    where: {
                        user_code: session?.user.user_code
                    },
                    data: {
                        bank: bank==""? user_settle?.bank : bank,
                        account_num: account_num==""? user_settle?.account_num : account_num,
                        account_password: account_password==""? user_settle?.account_password : account_password
                    }
                })
            }

            // 비밀번호, 정산계좌를 제외한 나머지 업데이트 기능
            const success = await db.user.update({
                where: {
                    id: session?.user.id
                },
                data: {
                    nickname: nickname,
                    email: email,
                    phone: phone
                }
            })
            return res.json(success)
        }catch(e){
            throw e
        }
    }
}