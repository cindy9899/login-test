import NextAuth, { Session } from "next-auth";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from "next-auth/jwt";
import { produce } from 'immer'

const db = new PrismaClient()

export const authOptions = {
    session: {
        maxAge: 60*30 // 30분 후 세션 만료
    },
    providers: [
        CredentialsProvider({
            id: 'id-pw-credential',
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                id: {
                    label: 'ID',
                    type: 'text',
                    placeholder: '아이디 입력',
                },
                password: {
                    label: 'PW',
                    type: 'password',
                    placeholder: '비밀번호 입력'
                }
            },
            async authorize(credentials, _req) {
                // 유저 정보 조회
                const userData = await db.user.findFirst({
                    where: {id: credentials?.id},
                    select: { 
                        user_code: true,
                        id: true,
                        name: true,
                        nickname: true,
                        password: true
                    }
                });

                // 비밀번호 암호화 체크
                // const compare_pw = await bcrypt.compare(mpw!, exUser?.mpw!);

                if(userData?.password === credentials?.password) {
                    return {
                        user_code: userData?.user_code,
                        id: userData?.id,
                        name: userData?.name,
                        nickname: userData?.nickname
                    } as any
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({token, account, user, profile}: any) {
            return token;
        },
        async session({session, token}: {session: Session; token: JWT}) {
            const userData = await db.user.findFirst({
                where: {id: token?.id!},
                select: {
                    user_code: true,
                    id: true,
                    name: true,
                    nickname: true
                }
            });
            
            // 불변객체 관리
            return produce(session, (draft) => {
                draft.user = {
                    user_code: userData?.user_code!,
                    id: userData?.id!,
                    name: userData?.name!,
                    nickname: userData?.user_code!
                };
            });
        },
    },
};

export default NextAuth(authOptions)