/* eslint-disable @next/next/no-img-element */
import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";
import Link from "next/link";

export default function Account_pay(){
    return(
        <>
        {/* <!--#include virtual="/inc/header.asp"-->
        <!--#include virtual="/inc/top.asp"--> */}       
        <Top />

    <div id="content" className="container">
    {/* <!-- 페이지메뉴 -->
    <!--#include virtual="/inc/page_menu.asp"--> */}
    <Page_menu />

    <section className="simplepay_box">
        <form onSubmit={(e) => e.preventDefault()} className="simplepay">
            <div className="simplepay_bgwrap">
                <div className="title_wrap">
                    <h2 className="page_title">계좌발급</h2>
                </div>

				 <h3 className="page_title">휴대폰인증</h3>
				 <p>본인명의의 휴대폰만 가능합니다.</p>

				 <div className="simplepay_form">
					<ul className="confirm_box">
						<li>
                            <input type="text" className="input"  placeholder="휴대폰번호 인증"/>
                        </li>
						<li className="confirm_bt">
                            <button className="bt"  onClick="">인증요청</button>
                        </li>
					</ul>

					<ul className="confirm_box">
						<li>
                            <input type="text" className="input"  placeholder="인증번호 입력"/>
                        </li>
						<li className="confirm_bt">
                            <button className="bt"  onClick="">확인</button>
                        </li>
					</ul>

					<ul className="email_confirm">
						<li>
                            <input type="text" className="input"  placeholder="이메일 입력"/>
                        </li>
					</ul>                
                 </div>

				 <h3 className="page_title">계좌인증</h3>
				  <p>본인명의의 계좌만 등록 가능합니다.</p>
				 <div className="simplepay_form">
					<ul className="confirm_number">
						<li className="bank_namet">
						  <select className="select_normal bank_select" name="bank_select">
							  <option  defaultValue="">은행명선택</option>
							  <option >국민은행</option>
							  <option >우리은행</option>
							  <option >신한은행</option>
							  <option >농협</option>
							  <option >우체국</option>
							  <option >하나은행</option>
							  <option >기업은행</option>
							  <option >SC제일은행</option>
							  <option >수협은행</option>
							  <option >산업은행</option>
							  <option >시티은행</option>
							  <option >신용협동조합</option>
							  <option >대구은행</option>
							  <option >전북은행</option>
							  <option >새마을금고</option>
							  <option >경남은행</option>
							  <option >카카오뱅크</option>
							  <option >케이뱅크</option>
							  <option >토스뱅크</option>
						  </select>
						</li>

						<li className="banknumber_info">
                            <input type="text" className="input"  placeholder="계좌번호입력"/>
                        </li>
					</ul>

                    <ul className="confirm_box">
						<li>
                            <input type="text" className="input"  placeholder="예금주입력"/>
                        </li>
						<li className="confirm_bt">
                            <button className="bt"  onClick="">인증요청</button>
                        </li>
					</ul>
                 </div>

				 <h3 className="page_title">계좌인증번호</h3>
				 <p>1원을 보내드렸습니다.<br />
				 입금자명에 표시된 인증번호를 입력해주세요</p>
				 <div className="simplepay_form">
					 <ul className="confirm_box">
						<li>
                            <input type="text" className="input"  placeholder="인증번호입력"/>
                        </li>
						<li className="confirm_bt">
                            <button className="bt"  onClick="">확인</button>
                        </li>
					</ul>
                 </div>

                <p className="i_dte"><img src="../img/icon/icon_dte.svg" alt=""/> 23시30분부터 00시 30분까지 가상계좌 발급이 제한됩니다.</p>


                <div className="btn_wrap">
                    <button type="submit" className="la_btn pay_btn">등록</button> 
                </div>

                <div className="bottom_bg"></div>
            </div>  
        </form>
    </section>
</div>


{/* <!--#include virtual="/inc/bottom_footer.asp"-->
<!--#include virtual="/inc/footer.asp"--> */}
    <Bottom_footer />
    <Footer />

        </>
    )
}