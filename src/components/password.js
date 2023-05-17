import Link from "next/link"

export default function Password() {
    return(
        <>
            <div className="alert_popup password_popup non_bg">
                <div className="small_pop">
                    <Link href="#" className="btn_close">
                        <span className="btn__close" alt="닫기" title="닫기"></span>
                    </Link>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="popup_title">
                            <h2>비밀번호변경</h2>
                        </div>

                        <div className="popup_body" >
                            <h3 className="i_pt">
                                <img src="/img/icon/icon_dte.svg" alt="" /> 
                                    비밀번호 관리정책
                            </h3>
                            <ul>
                                <li>비밀번호 유효기간 90일</li>
                                <li>8자리이상 12자리 이하이며 한글은 사용할수 없습니다.</li>
                                <li>문자, 숫자, 특수문자 조합생성</li>
                                <li>사번, 전화번호 등은 사용할 수 없음</li>
                            </ul>

                            <div className="agency_form">
                                <dl className="dl_wh">
                                    <dt>아이디</dt>
                                    <dd>
                                        <input type="text" className="input" placeholder="사용하시는 아이디를 입력해주세요." />
                                    </dd>
                                </dl>
                
                                <dl className="dl_wh">
                                    <dt>기존 비밀번호</dt>
                                    <dd>
                                        <input type="password" placeholder="2~12자 이내 영문과 숫자만 가능합니다." />
                                    </dd>
                                </dl>

                                <dl className="dl_wh">
                                    <dt>변경 비밀번호</dt>
                                    <dd>
                                        <input type="password" placeholder="2~12자 이내 영문과 숫자만 가능합니다." />
                                    </dd>
                                </dl>

                                <dl className="dl_wh">
                                    <dt>변경 비밀번호 재입력</dt>
                                    <dd>
                                        <input type="password" placeholder="2~12자 이내 영문과 숫자만 가능합니다." />
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="popup_footer">
                            <button className="bt blue_bgbor">수정</button> 
                            <Link href="" className="bt cancel_bt">취소</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}