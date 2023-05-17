import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page_menu() {
    const router = useRouter();
    const { pathname } = router;
    const pathSplit = pathname.split('/');

    return(
        <>
            <div className="borderbox page_nav">	
                <ul className="page_navs">
                    <li className="home_ipage">
                        <Link href="/main" className="dlink">
                            <img src="/img/icon/home-page.svg" />
                        </Link>
                    </li>

                    <li className="page_bsub">
                        <span className="dlink bgray_t">
                            {[
                                pathSplit[1] == 'board' && '공지사항',
                                pathSplit[1] == 'member' && '회원보유금액',
                                pathSplit[1] == 'account_pay' && '계좌발급',
                                pathSplit[1] == 'account_list' && '계좌발급조회',
                                pathSplit[1] == 'payment_list' && '계좌입금조회',
                                pathSplit[1] == 'calculate_list' && '계좌정산출금',
                                pathSplit[1] == 'compte_list' && '계좌출금내역',
                                pathSplit[1] == 'board_faq' && '1:1문의',
                                pathSplit[1] == 'myinfo' && '정보수정',
                                pathSplit[1] == 'index' && '로그아웃'  

                            ]}       
                        </span>
                        <div className="arrow"></div>

                            <div className="psub_menu">
                                <ul className="menuc">
                                    <li><Link href="/main">공지사항</Link></li>
                                    <li><Link href="/member_pay">회원보유금액</Link></li>
                                    <li><Link href="/account/account_pay">계좌발급</Link></li>
                                    <li><Link href="/account/account_list">계좌발급조회</Link></li>
                                    <li><Link href="/payment_list">계좌입금조회</Link></li>
                                    <li><Link href="/calculate_list">계좌정산출금</Link></li>
                                    <li><Link href="/compte_list">계좌출금내역</Link></li>
                                    <li><Link href="/board_faq_list">1:1문의</Link></li>
                                    <li><Link href="/myinfo">정보수정</Link></li>
                                    <li><Link href="/index">로그아웃</Link></li>
                                </ul>
                            </div>
                    </li>
                </ul>
            </div>
        </>
    )
}