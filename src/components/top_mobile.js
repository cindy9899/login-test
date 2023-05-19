/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

export default function Top_mobile() {
    const [drop, setDrop] = useState(false);
 

    return (
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

                    {drop && (
                        <nav
                            className="nav-menu mobile_gnb"
                            style={
                                drop
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                        >
                            {/* 메뉴 */}
                            <ul className="gnb">
                                <li className="act moblie_nav">
                                    <Link
                                        href="/main" 
                                        className="nav_link">
                                        공지사항
                                    </Link>
                                </li>

                                <li className="moblie_nav">
                                    <Link
                                        href="/member_pay"
                                        className="nav_link"
                                    >
                                        회원보유금액
                                    </Link>
                                </li>

                                <li className="moblie_nav">
                                    <Link
                                        href="/account_pay"
                                        className="nav_link"
                                    >
                                        계좌발급
                                    </Link>
                                </li>

                                <li className="moblie_nav">
                                    <Link
                                        href="/account_list"
                                        className="nav_link"
                                    >
                                        계좌발급조회
                                    </Link>
                                </li>

                                <li className="moblie_nav">
                                    <Link
                                        href="/payment_list"
                                        className="nav_link"
                                    >
                                        계좌입금조회
                                    </Link>
                                </li>

                                <li className="moblie_nav">
                                    <Link
                                        href="/calculate_list"
                                        className="nav_link"
                                    >
                                        계좌정산출금
                                    </Link>
                                </li>

                                <li className="moblie_nav">
                                    <Link
                                        href="/compte_list"
                                        className="nav_link"
                                    >
                                        계좌출금내역
                                    </Link>
                                </li>

                                <li className="moblie_nav">
                                    <Link
                                        href="/board_faq/board_faq_list"
                                        className="nav_link"
                                    >
                                        1:1문의
                                    </Link>
                                </li>

                                <li className="top_link_r moblie_nav">
                                    <Link
                                        href="/myinfo/myinfo"
                                        className="nav_link"
                                    >
                                        정보수정
                                    </Link>
                                </li>

                                <li className="top_link_r moblie_nav">
                                    <Link href="/" className="nav_link">
                                        로그아웃
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )}

                    <Link
                        className={
                            drop ? 'menu-trigger active-1' : 'menu-trigger'
                        }
                        href="#"
                        onClick={() => (drop ? setDrop(false) : setDrop(true))}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
