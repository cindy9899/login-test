import { NextAuth } from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            user_code: string;
            id: string;
            name: string;
            nickname: string;
        }
    }

    interface Password {
        id: string;
        password: string;
        new_password: string;
        check_password: string;
    }

    interface Myinfo {
        new_password: string;
        check_password: string;
        nickname: string;
        email: string;
        phone: string;
        bank: string;
        account_num: string;
        account_password: string;
    }
}