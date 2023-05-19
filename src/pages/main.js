import Link from 'next/link';
import Top from 'components/top';
import Page_menu from 'components/page_menu';
import Bottom_footer from 'components/bottom_footer';
import Footer from 'components/footer';

export default function Main(){    
    return (    
        <>
            {/* <!--#include virtual="/inc/header.asp"-->
            <!--#include virtual="/inc/top.asp"--> */}

            <Top/>               
            
            <div id="content" className="container">
            {/* 페이지메뉴 */}
            {/* #include virtual="/inc/page_menu.asp" */}
            
            <Page_menu/>        

                <section className="sub_box">
                    <div className="title_wrap">
                        <h2 className="page_title">공지사항</h2>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row form_search">
                            <div className="col-12 mt-3">
                                <div className="row-wrap">
                                    <div className="col-0 col-md-1">
                                        <label htmlFor="">검색조건</label>
                                        <select  name="" className="select">
                                            <option>제목</option>
                                            <option>내용</option>
                                        </select>
                                    </div>

                                    <div className="col-md-11">
                                        <label htmlFor="" className="m_t2">검색입력</label>
                                        <div className="search_ba wh70">
                                            <input  type="text"  className="input" placeholder="검색어를 직접 입력해주세요." />
                                            <button type="submit" className="bt blue_bgbor">검색</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="right_btn">
                            <ul>
                                <li>
                                    <button 
                                        type="submit"
                                        className="abt gray_sbt"
                                        onClick={()=>{}}>
                                         목록
                                    </button>
                                </li>
                                <li> 
                                    <select name="" className="select select_listnum">
                                        <option defaultValue>10건</option>
                                        <option>15건</option>
                                        <option>20건</option>
                                        <option>30건</option>
                                        <option>40건</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </form>
                </section>

                <section className="borderbox_table">                
                    <div className="notice_wrap">	
                        <Link href="/board/notice_view">
                            <dl>
                                <dt>
                                    <span className="notice_p">공지</span>시스템이전에따른안내
                                </dt>
                                <dd>2022-11-14</dd>
                            </dl>	
                        </Link>

                        <Link href="/board/notice_view">
                            <dl>
                                <dt>
                                    <span className="notice_p">공지</span>2022년 종합소득세납부안내
                                </dt>
                                <dd>2022-11-14</dd>
                            </dl>	
                        </Link>

                        <Link href="/board/notice_view">
                            <dl>
                                <dt>
                                    <span className="notice_p">공지</span>2022년 개인회원 소득세 납부 안내 공지 2021년 매출소득 종합소득신고
                                </dt>
                                <dd>2022-11-14</dd>
                            </dl>
                        </Link>
                    
                        <Link href="/board/notice_view">
                            <dl>
                                <dt>
                                    <span>02</span>1회 카드결제 승인금액 조정건
                                </dt>
                                <dd>2022-11-14</dd>
                            </dl>	
                        </Link>

                        <Link href="/board/notice_view">
                            <dl>
                                <dt>
                                    <span>01</span>개인회원 매출금액 관리 주의 안내
                                </dt>
                                <dd>2022-11-14</dd>
                            </dl>	
                        </Link>
                    
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

            {/* #include virtual="/inc/bottom_footer.asp" */}
            {/* #include virtual="/inc/footer.asp" */}      
        </>
    )
}



