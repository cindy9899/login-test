import Bottom_footer from "components/bottom_footer"
import Footer from "components/footer"
import Page_menu from "components/page_menu"
import Top from "components/top"
import Link from "next/link"

export default function Myinfo(){
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
                        <h2 className="page_title">회원 정보수정</h2>
                    </div>
                
                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* <!-- 기본정보 --> */}
                        <h3>기본정보</h3>
                        <div className="agency_form">

                            <dl className="dl_wh">
                                <dt>아이디</dt>
                                <dd>
                                    <input type="text" className="input"  />
                                </dd>
                            </dl>

                            <dl>
                                <dt>비밀번호</dt>
                                <dd>
                                    <input type="password"  />
                                </dd>
                            </dl>
                            <dl>
                                <dt>비밀번호 확인</dt>
                                <dd>
                                    <input type="password"  />
                                </dd>
                            </dl>
                        </div>

                        {/* <!-- 출금 정보 입력 --> */}
                        <h3>출금 정보 입력</h3>
                        <div className="agency_form">
                            <dl>
                                <dt>은행선택</dt>
                                <dd>
                                    <select className="bank_select">
                                        <option defaultValue="">은행명선택</option>
                                        <option defaultValue="1">국민은행</option>
                                        <option defaultValue="우리은행">우리은행</option>
                                        <option defaultValue="신한은행">신한은행</option>
                                        <option defaultValue="농협">농협</option>
                                        <option defaultValue="우체국">우체국</option>
                                        <option defaultValue="하나은행">하나은행</option>
                                        <option defaultValue="기업은행">기업은행</option>
                                        <option defaultValue="SC제일은행">SC제일은행</option>
                                        <option defaultValue="수협은행">수협은행</option>
                                        <option defaultValue="산업은행">산업은행</option>
                                        <option defaultValue="시티은행">시티은행</option>
                                        <option defaultValue="신용협동조합">신용협동조합</option>
                                        <option defaultValue="대구은행">대구은행</option>
                                        <option defaultValue="전북은행">전북은행</option>
                                        <option defaultValue="새마을금고">새마을금고</option>
                                        <option defaultValue="경남은행">경남은행</option>
                                        <option defaultValue="카카오뱅크">카카오뱅크</option>
                                        <option defaultValue="케이뱅크">케이뱅크</option>
                                        <option defaultValue="토스뱅크">토스뱅크</option>
                                    </select>
                                </dd>
                            </dl>

                            <dl>
                                <dt>계좌번호</dt>
                                <dd>
                                    <input type="text" className="input" defaultValue="4" placeholder="비사업자만 해당" />
                                </dd>
                            </dl>

                            <dl>
                                <dt>예금주</dt>
                                <dd>
                                    <input type="text" className="input" defaultValue="4" />
                                </dd>
                            </dl>

                            <dl>
                                <dt>출금비밀번호</dt>
                                <dd>
                                    <input type="password" defaultValue="555"/>
                                </dd>
                            </dl>
                        </div>
                        
                        {/* <!-- 개인정보 입력 --> */}
                        <h3>개인정보 입력</h3>
                        <div className="agency_form">
                            <dl>
                                <dt>이름</dt>
                                <dd>
                                    <input type="text" className="input" placeholder="" />
                                </dd>
                            </dl>

                            <dl>
                                <dt>닉네임</dt>
                                <dd>
                                    <input type="text" className="input" placeholder="" />
                                </dd>
                            </dl>

                            <dl>
                                <dt>이메일</dt>
                                <dd>
                                    <input type="email" className="input" placeholder="" />
                                </dd>
                            </dl>

                            <dl>
                                <dt>휴대폰번호</dt>
                                <dd>
                                    <input type="number" className="input" placeholder="" />
                                </dd>
                            </dl>

                            <dl className="dl_wh">
                                <dt>자동등록방지</dt>
                                <dd>자동등록방지 넣어주셈</dd>
                            </dl>
                        </div>

                        <div className="btn_wrap">
                            <button type="submit" className="la_btn modifysend_btn">수정하기</button> 
                            <Link href="agency_all" className="la_btn">취소</Link>
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