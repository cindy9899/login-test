import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";
import Link from "next/link";

export default function Notice_view(){
    return(
        <>
            {/* <!--#include virtual="/inc/header.asp"-->
            <!--#include virtual="/inc/top.asp"--> */}

            <Top />

            <div id="content" className="container">
                {/* <!-- 페이지메뉴 -->
                <!--#include virtual="/inc/page_menu.asp"--> */}

                <Page_menu />

                <section className="borderbox_table">
                    <div className="title_wrap">
                        <h2 className="page_title">공지사항</h2>
                    </div>
                    
                    <div className="notice_wrap">	
                        <dl>
                            <dt>
                                <span className="notice_p">공지</span>시스템이전에따른안내
                            </dt>
                            <dd>2022-11-14</dd>
                        </dl>	
                    </div>
                    <div className="notice_view">
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                        요기에 관리자가 쓴 내용이 들어갑니다.요기에 관리자가 쓴 내용이 들어갑니다.
                    </div>

                    <div className="notice_btn btn_wrap">
                        <Link href="" className="la_btn del_btn">글삭제</Link> 
                        <Link href="/main" className="la_btn list_btn">목록</Link>
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