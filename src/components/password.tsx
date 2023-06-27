/* eslint-disable @next/next/no-img-element */
import { User } from "@prisma/client"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { axiosInstance } from "../pages/api"
import { Password } from "next-auth";
import { useRouter } from "next/router";

export default function Password() {
    const router = useRouter()
    const { register, reset, clearErrors, handleSubmit } = useForm<Password>();
    const onValid: SubmitHandler<Password> = async (formData) => {
        console.log('버튼 클릭')
        if(formData.new_password == formData.check_password){ // 비밀번호 확인 일치
            const res = await axiosInstance.post('/api/auth/change', formData)

            if(res?.data.status === 401){ // 기존 비밀번호 불일치
                alert('기존 로그인 정보가 일치하지 않습니다.')
            }
            if(res?.data.status === 200){
                alert('비밀번호가 수정되었습니다.');
                router.reload()
            }
        }else{
            alert('변경 비밀번호 확인이 일치하지 않습니다.')
        }
        
    }
    return(
        <>
            <div className="alert_popup password_popup non_bg">
                <div className="small_pop">
                    <Link href="#" className="btn_close">
                        <span className="btn__close" title="닫기"></span>
                    </Link>
                    
                    <form onSubmit={handleSubmit(onValid)}>
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
                                        <input 
                                            {...register('id', {
                                                required: {
                                                    value: true,
                                                    message: '아이디는 필수 입력사항입니다.'
                                                }
                                            })}
                                        type="text" className="input" placeholder="사용하시는 아이디를 입력해주세요." />
                                    </dd>
                                </dl>
                
                                <dl className="dl_wh">
                                    <dt>기존 비밀번호</dt>
                                    <dd>
                                        <input 
                                            {...register('password', {
                                                required: {
                                                    value: true,
                                                    message: '비밀번호는 필수 입력사항입니다.'
                                                }
                                            })}
                                        type="password" placeholder="2~12자 이내 영문과 숫자만 가능합니다." />
                                    </dd>
                                </dl>

                                <dl className="dl_wh">
                                    <dt>변경 비밀번호</dt>
                                    <dd>
                                        <input 
                                            {...register('new_password', {
                                                required: {
                                                    value: true,
                                                    message: '변경 비밀번호는 필수 입력사항입니다.'
                                                }
                                            })}
                                        type="password" placeholder="2~12자 이내 영문과 숫자만 가능합니다." />
                                    </dd>
                                </dl>

                                <dl className="dl_wh">
                                    <dt>변경 비밀번호 재입력</dt>
                                    <dd>
                                        <input
                                            {...register('check_password', {
                                                required: {
                                                    value: true,
                                                    message: '변경 비밀번호 재입력은 필수 입력사항입니다.'
                                                }
                                            })}
                                        type="password" placeholder="2~12자 이내 영문과 숫자만 가능합니다." />
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="popup_footer">
                            <button className="bt blue_bgbor" type="submit">수정</button> 
                            <Link href="" className="bt cancel_bt">취소</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}