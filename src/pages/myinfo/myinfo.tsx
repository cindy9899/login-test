import Bottom_footer from "components/bottom_footer"
import Footer from "components/footer"
import Page_menu from "components/page_menu"
import Top from "components/top"
import Link from "next/link"
import { axiosInstance } from "pages/api"
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Myinfo } from "next-auth"
import { useRouter } from "next/router"

export default function Myinfo({alert_show}: any){
    const router = useRouter()
    const [userdata, setUserData] = useState<any>()
    const [settleData, setSettleData] = useState<any>()
    // const [bankData, setBankData] = useState<any>()
    const { register, reset, clearErrors, handleSubmit } = useForm<Myinfo>();
    const [selected, setSelected] = useState("")

    const onValid: SubmitHandler<Myinfo> = async (formData) => {
        const res = await axiosInstance.post('/api/myinfo', formData)

        if(res.data.errorMessage){
            alert(res.data.errorMessage)
            return
        }
        if(res.status === 200){
            alert("수정이 완료되었습니다.")
            router.reload()
        }
    }

    const handleSelect = (e: any) => {
        setSelected(e.target.value)
    }

    useEffect(()=>{
        const loadData = async() => {
            const data: any = await axiosInstance.get('/api/myinfo')
            setUserData(data.data.user_info)
            setSettleData(data.data.settle_info)
            setSelected(data.data.settle_info.bank)
            // setBankData(data.data.bank_info)
        };

        loadData()
    }, [])
    
    return(
        <>
            {/* <!--#include virtual="/inc/header.asp"-->
            <!--#include virtual="/inc/top.asp"--> */}

            <Top alert_show={alert_show}/>

            <div id="content" className="container">
            {/* <!-- 페이지메뉴 -->
            <!--#include virtual="/inc/page_menu.asp"--> */}
                
            <Page_menu />
                
                <section className="sub_box">
                    <div className="title_wrap">
                        <h2 className="page_title">회원 정보수정</h2>
                    </div>
                
                    <form onSubmit={handleSubmit(onValid)}>
                        {/* <!-- 기본정보 --> */}
                        <h3>기본정보</h3>
                        <div className="agency_form">

                            <dl className="dl_wh">
                                <dt>아이디</dt>
                                <dd>
                                    <input
                                    type="text" className="input" defaultValue={userdata?.id} disabled/>
                                </dd>
                            </dl>

                            <dl>
                                <dt>새 비밀번호</dt>
                                <dd>
                                    <input
                                        {...register('new_password', {
                                            required: {
                                                value: false,
                                                message: ''
                                            }
                                        })}
                                    type="password"  />
                                </dd>
                            </dl>
                            <dl>
                                <dt>비밀번호 확인</dt>
                                <dd>
                                    <input
                                        {...register('check_password', {
                                            required: {
                                                value: false,
                                                message: ''
                                            }
                                        })}
                                    type="password"  />
                                </dd>
                            </dl>
                        </div>

                        {/* <!-- 출금 정보 입력 --> */}
                        <h3>출금 정보 입력</h3>
                        <div className="agency_form">
                            <dl>
                                <dt>은행선택</dt>
                                <dd>
                                    <select 
                                        {...register('bank', {
                                            required: {
                                                value: true,
                                                message: ''
                                            }
                                        })}
                                    className="bank_select" value={selected} onChange={handleSelect}>
                                        <option value="">은행명선택</option>
                                        <option value="1">국민은행</option>
                                        <option value="2">우리은행</option>
                                        <option value="3">신한은행</option>
                                        <option value="4">농협</option>
                                        <option value="5">우체국</option>
                                        <option value="6">하나은행</option>
                                        <option value="7">기업은행</option>
                                        <option value="8">SC제일은행</option>
                                        <option value="9">수협은행</option>
                                        <option value="10">산업은행</option>
                                        <option value="11">시티은행</option>
                                        <option value="12">신용협동조합</option>
                                        <option value="13">대구은행</option>
                                        <option value="14">전북은행</option>
                                        <option value="15">새마을금고</option>
                                        <option value="16">경남은행</option>
                                        <option value="17">카카오뱅크</option>
                                        <option value="18">케이뱅크</option>
                                        <option value="19">토스뱅크</option>
                                    </select>
                                </dd>
                            </dl>

                            <dl>
                                <dt>계좌번호</dt>
                                <dd>
                                    <input
                                        {...register('account_num', {
                                            required: {
                                                value: true,
                                                message: ''
                                            }
                                        })}
                                    type="text" className="input" defaultValue={settleData?.account_num} placeholder="비사업자만 해당" />
                                </dd>
                            </dl>

                            <dl>
                                <dt>예금주</dt>
                                <dd>
                                    <input type="text" className="input" defaultValue={settleData?.name} disabled/>
                                </dd>
                            </dl>

                            <dl>
                                <dt>출금비밀번호</dt>
                                <dd>
                                    <input
                                        {...register('account_password', {
                                            required: {
                                                value: false,
                                                message: ''
                                            }
                                        })}
                                    type="password" defaultValue=""/>
                                </dd>
                            </dl>
                        </div>
                        
                        {/* <!-- 개인정보 입력 --> */}
                        <h3>개인정보 입력</h3>
                        <div className="agency_form">
                            <dl>
                                <dt>이름</dt>
                                <dd>
                                    <input type="text" className="input" defaultValue={userdata?.name} disabled/>
                                </dd>
                            </dl>

                            <dl>
                                <dt>닉네임</dt>
                                <dd>
                                    <input
                                        {...register('nickname', {
                                            required: {
                                                value: true,
                                                message: ''
                                            }
                                        })}
                                    type="text" className="input" defaultValue={userdata?.nickname} />
                                </dd>
                            </dl>

                            <dl>
                                <dt>이메일</dt>
                                <dd>
                                    <input
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: ''
                                            }
                                        })}
                                    type="email" className="input" defaultValue={userdata?.email} />
                                </dd>
                            </dl>

                            <dl>
                                <dt>휴대폰번호</dt>
                                <dd>
                                    <input
                                        {...register('phone', {
                                            required: {
                                                value: true,
                                                message: ''
                                            }
                                        })}
                                    type="number" className="input" defaultValue={userdata?.phone} />
                                </dd>
                            </dl>

                            <dl className="dl_wh">
                                <dt>자동등록방지</dt>
                                <dd>자동등록방지 넣어주셈</dd>
                                {/* <dd>결제 필요</dd> */}
                                {/* <dd>https://www.gov-ncloud.com/product/applicationService/captcha</dd> */}
                            </dl>
                        </div>

                        <div className="btn_wrap">
                            <button className="la_btn modifysend_btn" type="submit">수정하기</button> 
                            <Link href="../main" className="la_btn">취소</Link>
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