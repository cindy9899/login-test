import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";

export default function Board_faq(){
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
						<h2 className="page_title">1:1문의하기</h2>
					</div>

					<form action="/board/board_faq_list">
						<div className="simplepay_form notice_from">	
							<dl>
								<dt>제목</dt>
								<dd>
									<input type="text" className="input" />
								</dd>
								<dt>내용</dt>
								<dd>
									<textarea></textarea>
								</dd>
							</dl>
						</div>

						<div className="btn_wrap">
							<button type="submit" className="la_btn pay_btn">문의하기</button> 
						</div>
					</form>
				</section>
			</div>

			<Bottom_footer />
			<Footer />

			{/* <!--#include virtual="/inc/bottom_footer.asp"-->
			<!--#include virtual="/inc/footer.asp"-->	 */}
		</>
	)
}