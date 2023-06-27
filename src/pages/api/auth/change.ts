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
            console.log('호출')
            const userData = await db.user.findFirst({
                where: {
                    id: req.body.id
                }
            })
            if(userData.password === req.body.password){
                const resyl = await db.user.update({
                    where: {
                        id: req.body.id,
                    },
                    data: {
                        password: req.body.new_password
                    }
                })
                res.json({status: 200})
                return
            }
            res.json({status: 401})
        }catch(err){
            res.json(err)
            resolve()
        }
    }
}