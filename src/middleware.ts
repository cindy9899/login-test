import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import * as process from 'process';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
    // 토큰이 존재할때에만 토큰 추출
    const session = await getToken({ req, secret, raw: true });
    const { pathname } = req.nextUrl;
    
    if(pathname=='/'){
        if(session) { // index 페이지 진입 시 세션이 존재하는 경우
            return NextResponse.redirect(new URL('/main', req.url))
        }
    }else{
        if (!session) { // 다른 페이지 진입 시 세션이 없는 경우
            return NextResponse.redirect(new URL('/', req.url));
        }
    }
    console.log('미들웨어');
}

// 해당 라우트에서만 미들웨어 실행
export const config = {
    matcher: "/((?!api|_next/static|_next|img|favicon.ico).*)",
};
