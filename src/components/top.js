import Link from 'next/link';
import Calculate_list from 'pages/calculate_list';

export default function Top(){
    return (
        <>    
            <div id="header">
                <div className="container">
                    <div className="top_wrap">
                        {/* <!-- 로고 --> */}
                        <h1 className="top-logo">
                            <Link href="/main">
                                <span>
                                    <img src="/img/logo.svg" alt="" className="logo_img"/>
                                </span>
                                <span>Red Account</span>
                            </Link>
                        </h1>
                        
                        <nav className="nav-menu">
                            {/* <!-- 메뉴 --> */}
                            <ul className="gnb">
                                <li className="act">
                                    <Link href="/main" className="nav_link">공지사항</Link>
                                </li>
                                
                                <li className="">
                                    <Link href="/member_pay" className="nav_link">회원보유금액</Link>
                                </li>
                                
                                <li className="">
                                    <Link href="/account_pay" className="nav_link">계좌발급</Link>                                        
                                </li>
                                
                                <li className="">
                                    <Link href="/account_list" className="nav_link">계좌발급조회</Link>
                                </li>
                                
                                <li className="">
                                    <Link href="/payment_list" className="nav_link">계좌입금조회</Link>                
                                </li>
                                
                                <li className="">
                                    <Link href="/calculate_list" className="nav_link">계좌정산출금</Link>
                                </li>

                                <li className="">
                                    <Link href="/compte_list" className="nav_link">계좌출금내역</Link>
                                </li>
                                
                                <li className="">
                                    <Link href="/board_faq_list" className="nav_link">1:1문의</Link>
                                </li>
                                
                                <li className="top_link_r">
                                    <Link href="/myinfo" className="nav_link">정보수정</Link>
                                </li>
                                
                                <li className="top_link_r">
                                    <Link href="/index" className="nav_link">로그아웃</Link>
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
    )
}