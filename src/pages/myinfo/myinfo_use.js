import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";

export default function Myinfo_use(){
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
                        <h2 className="page_title">관리자 정보수정</h2>
                    </div>
                
                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* <!-- 기본정보 --> */}
                        <h3>기본정보</h3>
                        <div className="agency_form">
                            <dl>
                                <dt>아이디</dt>
                                <dd>관리자 아이디는 바 꿀 수 없음</dd>
                            </dl>

                            <dl>
                                <dt>비밀번호</dt>
                                <dd>
                                    <input type="password" placeholder="8자리이상 12자리 이하이며 한글은 사용할수 없습니다." />
                                </dd>
                            </dl>

                            <dl>
                                <dt>비밀번호 확인</dt>
                                <dd>
                                    <input type="password" placeholder="8자리이상 12자리 이하이며 한글은 사용할수 없습니다." />
                                </dd>
                            </dl>

                            <dl>
                                <dt>관리자명</dt>
                                <dd>
                                    <input type="text" className="input" value="스마트페이먼츠" placeholder="" />
                                </dd>
                            </dl>
                        </div>

                        <div className="btn_wrap">
                            <button type="submit" className="la_btn modifysend_btn">수정하기</button>
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