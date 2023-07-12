import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServers } from "dns";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

const db = new PrismaClient()
const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const session = await getServerSession(req, res, authOptions)
    if(req.method === 'POST') {
        try{
            const password = req.body.password

            const id = session?.user.id // 세션에서 들고 온 아이디
            const userPw = await db.user.findFirst({
                where: {
                    id: id
                },
                select: {
                    password: true
                }
            }).then(res=> res?.password)

            if(password !== userPw){
                return res.json({
                    errorMessage: "비밀번호가 일치하지 않습니다."
                })
            }else{
                return res.json(200)
            }
        }catch(err){

        }
    }
}