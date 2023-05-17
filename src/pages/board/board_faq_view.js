import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";
import Link from "next/link";

export default function Board_faq_view(){
	return (
		<>
			{/* <!--#include virtual="/inc/header.asp"-->
			<!--#include virtual="/inc/top.asp"--> */}

			<Top />

			<div id="content" className="container">
				{/* <!-- 페이지메뉴 -->
				<!--#include virtual="/inc/page_menu.asp"-->
				<!-- 관리자 --> */}

			<Page_menu />

				<section className="sub_box">
					<div className="title_wrap">
						<h2 className="page_title">1:1문의하기</h2>
					</div>

					<form onSubmit={(e) => e.preventDefault()}>
						<div className="simplepay_form notice_from">	
						<dl>
								<dt>제목</dt>
								<dd>
									<div className="">제목쓴거는 여기서 출력됩니다. 제목쓴거는 여기서 출력됩니다.제목쓴거는 여기서 출력됩니다.제목쓴거는 여기서 출력됩니다.제목쓴거는 여기서 출력됩니다.</div>
								</dd>
							</dl>
							<dl>
								<dt>이름</dt>
								<dd>홍길동</dd>
							</dl>
							<dl>
								<dt>일시</dt>
								<dd>2022-11-23 13:34:03</dd>
							</dl>
							<dl>
								<dt>상태</dt>
								<dd>
									<span className="green_t checkbox_list"> 
										<label className="checkbox">
											<input type="checkbox" defaultChecked />
											<span className="checkbox_icon"></span>
											<span className="checkbox_text"></span>
											문의대기
										</label>
									</span>

									<span className="red_t checkbox_list">
										<label className="checkbox">
											<input type="checkbox" />
											<span className="checkbox_icon"></span>
											<span className="checkbox_text"></span>
												답변완료
										</label>
									</span>
								</dd>
							</dl>
							<dl>
								<dt>내용</dt>
								<dd>
									<div className="">1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.</div>
								</dd>
							</dl>
							<dl>
								<dt>답변</dt>
								<dd>
									<textarea>관리자가 답변쓴거에요~~ 봐주세요.</textarea>
								</dd>
							</dl>
						</div>

						<div className="btn_wrap">
							<button type="submit" className="la_btn pay_btn">답변하기</button> 
						</div>
					</form>
				</section>

				{/* <!-- 사용자--> */}
				<section className="sub_box">
					<div className="title_wrap">
						<h2 className="page_title">1:1문의하기</h2>
					</div>

					<form onSubmit={(e) => e.preventDefault()}>
						<div className="simplepay_form notice_from">	
							<dl>
								<dt>제목</dt>
								<dd>
									<div className="">제목쓴거는 여기서 출력됩니다. 제목쓴거는 여기서 출력됩니다.제목쓴거는 여기서 출력됩니다.제목쓴거는 여기서 출력됩니다.제목쓴거는 여기서 출력됩니다.</div>
								</dd>
							</dl>
							<dl>
								<dt>이름</dt>
								<dd>홍길동</dd>
							</dl>
							<dl>
								<dt>일시</dt>
								<dd>2022-11-23 13:34:03</dd>
							</dl>
							<dl>
								<dt>상태</dt>
								<dd>
									<span className="green_t">문의대기</span><span className="red_t">답변완료</span>
								</dd>
							</dl>
							<dl>
								<dt>내용</dt>
								<dd>
									<div className="">1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.1:1문의 내역쓴거 여기서 보여주여주셈.</div>
								</dd>
							</dl>
							<dl>
								<dt>답변</dt>
								<dd>관리자가 답변쓴거에요~~ 봐주세요.</dd>
							</dl>
						</div>

						<div className="btn_wrap">
							<Link href="/board/board_faq_list" className="la_btn">목록으로</Link>
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