import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";
import Link from "next/link";

export default function Board_faq_list(){
    return(
        <>
            {/* <!--#include virtual="/inc/header.asp"-->
            <!--#include virtual="/inc/top.asp"--> */}

            <Top />

            <div id="content" className="container">
                {/* <!-- 페이지메뉴 -->
                <!--#include virtual="/inc/page_menu.asp"-->
                <!-- 문의내역 관리자 --> */}
                
            <Page_menu />

                <section className="sub_box">
                    <div className="title_wrap">
                        <h2 className="page_title">1:1 문의 내역</h2>
                    </div>

                    <div className="notice_wrap">	
                    
                        <Link href="/board_faq/board_faq_view">
                            <dl className="faq_listwrap">
                                <dt>
                                    <span>02</span>1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건
                                </dt>
                                <dd>
                                    <span>홍길동</span><span>2022-11-14</span><span className="green_t">문의대기</span>
                                </dd>
                            </dl>	
                        </Link>

                        <Link href="/board_faq/board_faq_view">
                            <dl className="faq_listwrap">
                                <dt>
                                    <span>01</span>1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건
                                </dt>
                                <dd>
                                    <span>홍길동</span><span>2022-11-14</span><span className="red_t">답변완료</span>
                                </dd>
                            </dl>	
                        </Link>
                    </div>

                    <div className="btn_wrap list_btnw">
                        <Link href="/board_faq/board_faq" className="la_btn list_btn">문의하기</Link>
                    </div>
                    <div className="pageing">
                        <Link href="" alt="" title="첫 페이지이동">&lt;&lt;</Link>
                        <Link href="" title="다음 페이지이동">&lt;</Link>
                        <Link href="" className="on">1</Link>
                        <Link href="">2</Link>
                        <Link href="">3</Link>
                        <Link href="">4</Link>
                        <Link href="">5</Link>
                        <Link href="" title="이전 페이지이동">&gt;</Link>
                        <Link href="" title="마지막 페이지이동">&gt;&gt;</Link>
                    </div>
                </section>

                {/* <!-- 문의내역 사용자 --> */}
                <section className="sub_box">
                    <div className="title_wrap">
                        <h2 className="page_title">1:1 문의 내역</h2>
                    </div>

                    <div className="notice_wrap">	
                    
                        <Link href="/board_faq/board_faq_view">
                            <dl className="faq_listwrap">
                                <dt>
                                    <span>02</span>1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건
                                </dt>
                                <dd>
                                    <span>2022-11-14</span><span className="green_t">문의대기</span>
                                </dd>
                            </dl>	
                        </Link>

                        <Link href="/board_faq/board_faq_view">
                            <dl className="faq_listwrap">
                                <dt>
                                    <span>01</span>1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건1회 카드결제 승인금액 조정건
                                </dt>
                                <dd>
                                    <span>2022-11-14</span><span className="red_t">답변완료</span>
                                </dd>
                            </dl>	
                        </Link>
                    </div>

                    <div className="btn_wrap list_btnw">
                        <Link href="/board_faq/board_faq" className="la_btn list_btn">문의하기</Link>
                    </div>
                    <div className="pageing">
                        <Link href="" alt="" title="첫 페이지이동">&lt;&lt;</Link>
                        <Link href="" title="다음 페이지이동">&lt;</Link>
                        <Link href="" className="on">1</Link>
                        <Link href="">2</Link>
                        <Link href="">3</Link>
                        <Link href="">4</Link>
                        <Link href="">5</Link>
                        <Link href="" title="이전 페이지이동">&gt;</Link>
                        <Link href="" title="마지막 페이지이동">&gt;&gt;</Link>
                    </div>
                </section>
            </div>
            
            <Bottom_footer />
            <Footer />

            {/* <!--#include virtual="/inc/bottom_footer.asp"-->
            <!--#include virtual="/inc/footer.asp"--> */}
        </>
    )
}