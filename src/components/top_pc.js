/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

export default function Top_pc() {
    const [active, setActive] = useState('gnb_memu');


    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="top_wrap">
                        {/* <!-- 로고 --> */}
                        <h1 className="top-logo">
                            <Link href="/main">
                                <span>
                                    <img
                                        src="/img/logo.svg"
                                        alt=""
                                        className="logo_img"
                                    />
                                </span>
                                <span>Red Account</span>
                            </Link>
                        </h1>

                        <nav className="nav-menu">
                            {/* <!-- 메뉴 --> */}
                            <ul className="gnb">
                                <li
                                    className={
                                        active === 'main'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('main')}
                                >
                                    <Link href="/main" className="nav_link">
                                        공지사항
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'member_pay'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('member_pay')}
                                >
                                    <Link
                                        href="/member_pay"
                                        className="nav_link"
                                    >
                                        회원보유금액
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'account_pay'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('account_pay')}
                                >
                                    <Link
                                        href="/account_pay"
                                        className="nav_link"
                                    >
                                        계좌발급
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'account_list'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('account_list')}
                                >
                                    <Link
                                        href="/account_list"
                                        className="nav_link"
                                    >
                                        계좌발급조회
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'payment_list'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('payment_list')}
                                >
                                    <Link
                                        href="/payment_list"
                                        className="nav_link"
                                    >
                                        계좌입금조회
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'calculate_list'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('calculate_list')}
                                >
                                    <Link
                                        href="/calculate_list"
                                        className="nav_link"
                                    >
                                        계좌정산출금
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'compte_list'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('compte_list')}
                                >
                                    <Link
                                        href="/compte_list"
                                        className="nav_link"
                                    >
                                        계좌출금내역
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'board_faq_list'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('board_faq_list')}
                                >
                                    <Link
                                        href="/board_faq/board_faq_list"
                                        className="nav_link"
                                    >
                                        1:1문의
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === 'myinfo'
                                            ? 'active'
                                            : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('myinfo')}
                                >
                                    <Link
                                        href="/myinfo/myinfo"
                                        className="nav_link"
                                    >
                                        정보수정
                                    </Link>
                                </li>

                                <li
                                    className={
                                        active === '/' ? 'active' : 'gnb_memu'
                                    }
                                    onMouseOver={() => setActive('/')}
                                >
                                    <Link href="/" className="nav_link">
                                        로그아웃
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <Link className="menu-trigger" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
   
