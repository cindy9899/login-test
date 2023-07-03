import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

const db = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === 'POST') {
        try{
            console.log(req.body)
            const { id, password, new_password, check_password } = req.body
            console.log('호출')
            const userPw = await db.user.findFirst({
                where: {
                    id: id
                },
                select: {
                    password: true
                }
            })
            .then(res=> res?.password)

            console.log("userPw => ", userPw)

            // 해당 계정이 존재하지 않을 때
            if(!userPw) {
                return res.json({
                    errorMessage: "해당 계정이 존재하지 않습니다."
                })
            }

            // 기존 비밀번호가 일치하지 않을 때
            if(userPw !== password) {
                return res.json({
                    errorMessage: "기존 비밀번호가 일치하지 않습니다."
                })
            }

            // 새 비밀번호와 비밀번호 확인이 일치하지 않을 때
            if(new_password !== check_password) {
                return res.json({
                    errorMessage: "비밀번호 확인이 일치하지 않습니다."
                })
            }

            //기존 비밀번호와 새 비밀번호가 동일할 때
            if(password === new_password) {
                return res.json({
                    errorMessage: "기존 비밀번호와 새로운 비밀번호가 동일합니다."
                })
            }

            // 모든 과정을 통과했을 때
            const success = await db.user.update({
                where: {
                    id: id
                },
                data: {
                    password: new_password
                }
            })
            return res.json(success)

        }catch(err){
            res.json(err)
            resolve()
        }
    }
}