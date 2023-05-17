import Bottom_footer from "components/bottom_footer";
import Footer from "components/footer";
import Page_menu from "components/page_menu";
import Top from "components/top";
import Link from "next/link";

export default function Member_pay(){
    return(
        <>
            {/* <!--#include virtual="/inc/header.asp"-->
            <!--#include virtual="/inc/top.asp"--> */}

            <Top />

            <div id="content" className="container">
            {/* <!-- 페이지메뉴 -->
            <!--#include virtual="/inc/page_menu.asp"--> */}

            <Page_menu />

            <section className="borderbox">
                <div className="title_wrap">
                    <h2 className="page_title">회원보유금액</h2>
                </div>
            
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row form_search">
                        <div className="col-md-6 mt-3">
                            <div className="row-wrap">
                                <div className="col-12">
                                    <label className="label_title"  htmlFor="">등록일자</label>
                                </div>
                            
                                    <ul className="calendar_wrap_list">
                                        <li className="li_can">
                                            <input type="date" className="input" title="일자선택" />
                                        </li>
                                        <li className="ih-lin">~</li>
                                        <li className="li_can">
                                            <input type="date"  className="input" title="일자선택" />
                                        </li>
                                    </ul>
                                    <ul className="btn_wrap_list">
                                        <li className="md_wh">
                                            <button type="submit" className="bt" onClick={() => {}}>
                                                오늘
                                            </button>
                                        </li>
                                        <li className="md_wh">
                                            <button type="submit" className="bt" onClick={() => {}}>
                                                어제
                                            </button>
                                        </li>
                                        <li className="md_wh">
                                            <button type="submit" className="bt" onClick={() => {}}>3일전</button>
                                        </li>
                                        <li className="md_wh">
                                            <button type="submit" className="bt" onClick={() => {}}>한달전</button>
                                        </li>
                                        <li className="md_wh">
                                            <button type="submit" className="bt" onClick={() => {}}>당월</button>
                                        </li>
                                    </ul>                                
                            </div>
                        </div>

                        <div className="col-md-6 mt-3">
                            <div className="row-wrap">
                                <div className="col-0 col-md-1">
                                    <label htmlFor="">검색조건</label>
                                    <select name="" className="select">
                                        <option >아이디</option>
                                        <option >회원명</option>
                                        <option >휴대폰번호</option>
                                        <option >거래번호</option>
                                    </select>
                                </div>

                                <div className="col-md-11">
                                    <label htmlFor="" className="m_t2">검색입력</label>
                                    <div className="search_ba wh70">
                                        <input type="search" className="input" placeholder="검색어를 직접 입력해주세요." />
                                        <button type="submit" className="bt blue_bgbor">검색</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right_btn">
                        <ul>
                            <li> 
                                <select name="" className="select select_listnum">
                                    <option defaultValue>10건</option>
                                    <option >15건</option>
                                    <option >20건</option>
                                    <option >30건</option>
                                    <option >40건</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </form>            
            </section>

            <section className="borderbox_table">            
                <div className="table_wrap">                                            
                    <table className="pay_table" width="100%">
                        <caption>회원보유금액</caption>
                        <colgroup> 
                            <col className="col2_num" />
                            <col className="time_col" />
                            <col className="wh_75" />
                            <col className="col" />
                            <col className="col_company" />
                            <col className="col_company" />
                            <col className="col" />
                            <col className="col" />
                            <col className="col" />
                            <col className="col" />
                        </colgroup>

                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">거래일자</th>
                                <th scope="col">아이디</th>
                                <th scope="col">이름</th>
                                <th scope="col">휴대폰번호</th>
                                <th scope="col">거래번호</th>
                                <th scope="col">정산내용</th>
                                <th scope="col">회원 입금금액</th>
                                <th scope="col">지급금액</th>
                                <th scope="col">누적금액</th>
                            </tr> 
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td className="time_t">2022-11-23 13:34:03</td>
                                <td>ID_1</td>
                                <td>김정산</td>
                                <td className="num_t">010-0000-0000</td>
                                <td className="num_t">20230302_00000001</td>
                                <td><span className="green_t">송금금액 입금</span></td>
                                <td className="tr_l pay_t">100,000,000 원</td>
                                <td className="tr_l pay_t">0 원</td>
                                <td className="tr_l pay_t">100,000,000원</td>
                            </tr> 

                            <tr>
                                <td>2</td>
                                <td className="time_t">2022-11-23 13:34:03</td>
                                <td>ID_2</td>
                                <td>김산정</td>
                                <td className="num_t">010-0000-0000</td>
                                <td className="num_t">20230302_00000002</td>
                                <td>
                                    <span className="red_t">송금금액 입금</span>
                                </td>
                                <td className="tr_l pay_t">100,000,000 원</td>
                                <td className="tr_l pay_t">0 원</td>
                                <td className="tr_l pay_t">100,000,000원</td>
                            </tr>                             
                        </tbody>

                        <tfoot>
                            <tr>
                                <th scope="col" colspan="7">합계</th>
                                <td className="tr_l pay_t">100,000,000 원</td>
                                <td className="tr_l pay_t red_t">1,000원</td>
                                <td className="tr_l pay_t">99,999,000원</td>                            
                            </tr>  
                        </tfoot>
                    </table>
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