import Top_mobile from './top_mobile';
import Top_pc from './top_pc';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function Top() {
    // 현재 화면 너비값
    const get_resize =
        (typeof window !== 'undefined' && localStorage.getItem('top_resize')) ||
        1920;

    // 화면 너비값 상태값
    const [resize, setResize] = useState(get_resize);

    // 서버사이드렌더링 에러 방지 상태값
    const [mounted, setMounted] = useState(false);

    // 화면 너비값 추출
    useEffect(() => {
        setMounted(true);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // resize 이벤트 발생시 함수호출
    const handleResize = () => {
        localStorage.setItem('top_resize', JSON.stringify(window.innerWidth));
        setResize(window.innerWidth);
    };

    return <>{mounted && resize > 993 ? <Top_pc /> : <Top_mobile />}</>;
}
