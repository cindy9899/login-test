import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";
import Link from "next/link";

export default function Notice_write(){
    return(
        <>
            {/* <!--#include virtual="/inc/header.asp"-->
            <!--#include virtual="/inc/top.asp"--> */}

            <Top />

            <div id="content" className="container">
                {/* <!-- 페이지메뉴 -->
                <!--#include virtual="/inc/page_menu.asp"--> */}

            <Page_menu />

                <section className="sub_box">
                    <div className="title_wrap">
                        <h2 className="page_title">공지사항등록</h2>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="member_page">
                        {/* <!-- 기본정보 --> */}
                        <h3>공지사항입력</h3>
                        <div className="agency_form">
                            <dl>
                                <dt>공지여부</dt>
                                <dd>
                                    <input type="checkbox" style={{marginright:'5px'}} />
                                        공지
                                </dd>
                            </dl>
                
                            <dl>
                                <dt>작성자</dt>
                                <dd>
                                    <input type="text" className="input" placeholder="" />
                                </dd>
                            </dl>                        
                
                            <dl className="dl_wh">
                                <dt>제목</dt>
                                <dd>
                                    <input type="text" className="input" defaultValue="test3333" />
                                </dd>
                            </dl>
                            
                            <dl className="dl_wh">
                                <dt>관리자메모</dt>
                                <dd>
                                    <textarea placeholder="메모사항넣어주세요."></textarea>
                                </dd>
                            </dl>
                        </div>
                                        
                        <div className="btn_wrap">
                            <button type="submit" className="la_btn modifysend_btn">저장하기</button> 
                            <Link href="notice_list.asp" className="la_btn">목록으로</Link>
                        </div>
                    </form>
                </section>                
            </div>

            <Bottom_footer />
            <Footer />   

            {/* <!--#include virtual="/inc/bottom_footer.asp"-->
            <!--#include virtual="/inc/footer.asp"--> */}
        </>
    )
}