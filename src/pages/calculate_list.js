/* eslint-disable @next/next/no-img-element */
import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";

export default function Calculate_list(){
    return(
        <>
            {/* <!--#include virtual="/inc/header.asp"-->
            <!--#include virtual="/inc/top.asp"--> */}
            
            <Top/>

            <div id="content" className="container">
            {/* <!-- 페이지메뉴 --> */}
            {/* <!--#include virtual="/inc/page_menu.asp"--> */}

            <Page_menu />

                <section className="simplepay_box">
                    <form onSubmit={(e) => e.preventDefault()} className="simplepay">
                        <div className="simplepay_bgwrap">
                            <div className="title_wrap">
                                <h2 className="page_title">계좌정산출금</h2>
                                <div className="info_box">
                                    <p className="i_dte red_t">
                                        <img src="/img/icon/icon_dte.svg" alt="" /> 회원정보수정에서 설정가능합니다.
                                    </p>
                                    <p className="i_dte red_t">
                                        <img src="/img/icon/icon_dte.svg" alt="" /> 예금주명과 일치하지 않을 경우 출금이 제한 됩니다.
                                    </p>
                                    <p className="i_dte red_t">
                                        <img src="/img/icon/icon_dte.svg" alt="" /> 출금신청금액은 수수료를 포함하여 입력해주세요.
                                    </p>
                                </div>
                            </div>
                            <div className="simplepay_form calculate_form">
                                <dl>
                                    <dt>보유금액</dt>
                                    <dd>
                                        <span className="red_t">777777</span>원
                                    </dd>
                                    <dt>은행선택</dt>
                                    <dd>우리은행</dd>
                                    <dt>계좌번호</dt>
                                    <dd>1002739966224</dd>
                                    <dt>예금주명</dt>
                                    <dd>전희섭</dd>
                                </dl>
                            </div>

                            <div className="simplepay_form calculate_form">
                                <dl>
                                    <dt>1회 출금한도</dt>
                                    <dd>
                                        <span className="black_t">30,000,000</span>원
                                    </dd>
                                    <dt>1일 출금가능 횟수</dt>
                                    <dd>
                                        <span>1건</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span className="black_t">12건</span>
                                    </dd>
                                    <dt>출금신청금액</dt>
                                    <dd><input type="number" /></dd>
                                    <dt>계좌이체수수료</dt>
                                    <dd>
                                        <span>0</span><span>원</span>
                                    </dd>
                                    <dt>입금 예정 금액</dt>
                                    <dd>
                                        <span>0</span><span>원</span>
                                    </dd>
                                    <dt>출금비밀번호</dt>
                                    <dd>
                                        <input type="password" defaultValue="555" />
                                    </dd>
                                </dl>
                            </div>

                    
                            <div className="btn_wrap">
                                <button type="submit" className="la_btn pay_btn">출금</button> 
                            </div>

                            <div className="bottom_bg"></div>
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

