import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Password from 'components/password';
import Agreement from 'components/agreement';
import Privacy from 'components/privacy';

export default function Index({ alert_show }) {
  return (
    <>     
     <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Red Account" />
        <meta name="author" content="" />
        <meta name="generator" content="" />
        <title>Red Account</title>
        
        {/* <!-- CSS --> */}
        {/* <Link rel="stylesheet" href="/css/common.css" />
        <Link rel="stylesheet" href="/css/content.css" />
        <Link rel="stylesheet" href="/css/layout.css"></Link> */}
        
        {/* <!-- Favicons --> */}
        {/* <Link rel="icon" href="/img/logo.png" /> */}
      </Head> 

      <div id="content" className="container">
        <div className="login_wrap">
            <div className="login_box">
                <h1>
                    <span>
                      <img src="img/logo.svg" alt="" className="logo_img" /></span>
                    <span>Red Account</span>
                </h1>
                <form action='/main' method='get'  >
                    <ul className="login_input">
                        <li>
                          <input type="text" placeholder="아이디를 입력해주세요." required />
                        </li>
                        <li>
                          <input type="password"   placeholder="비밀번호를 입력해주세요." required/>
                        </li>
                    </ul>
                    <div className="login_info">
                      <div className="info_row check_form">
                        <label className="checkbox">
                          <input type="checkbox" />
                            <span className="checkbox_icon"></span>
                            <span className="checkbox_text"></span>
                            아이디저장
                        </label>
                      </div>                    
                      <div className="info_row end_f">
                        <Link 
                          href="" 
                          className="" 
                          onClick={()=>{
                            alert_show('password_popup');
                            return false;
                          }}>
                          <span className="md_link f_19">비밀번호변경</span>
                        </Link>
                      </div>
                    </div>
                    <div className="btn_wrap">
                      <button  className="point_bg btn_login">로그인</button>
                        <ul className="info_list">
                            <li>
                              <Link 
                                href="" 
                                className="sm_link" 
                                id="" onClick={()=>{
                                  alert_show('privacy_popup');
                                  return false;
                                }}> 
                                개인정보처리방침
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="" 
                                className="sm_link" 
                                id=""
                                onClick={()=>{
                                  alert_show('agreement_popup');
                                  return false;
                                }}>
                                  전자금융거래이용약관
                              </Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>

            <div id="footer" className="main_footer">
              <p className="gray_t">Copyright 2023 © Red Account All rights reserved.</p>
            </div>
        </div>        
      </div>
    </>
  );    
}


