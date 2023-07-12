import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import { User } from '@prisma/client'
import axios from "axios"
import { axiosInstance } from "pages/api"
import { useRouter } from "next/router"

export default function UserCheck(){
    const router = useRouter()
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm<User>({mode: 'onSubmit'})

    const onValid: SubmitHandler<User> = async (formData) => {
        const res = await axiosInstance.post('/api/auth/usercheck', formData)
        if(res.data.errorMessage){
            alert(res.data.errorMessage)
            return
        }
        if(res.status===200){
            await Promise.all([router.replace('/myinfo/myinfo'), reset()])
        }
    }

    return(
        <>
            <div className="alert_popup userCheck_pupup non_bg">
                <div className="small_pop">
                    <Link href="#" className="btn_close">
                        <span className="btn__close" title="닫기"></span>
                    </Link>
                    <div className="popup_title">
                        <h2>정보수정 본인확인</h2>
                    </div>
                    <div className="popup_body" >
                    <form onSubmit={handleSubmit(onValid)}>
                            <div className="agency_form">
                                <dl className="dl_wh">
                                    <dt>비밀번호</dt>
                                    <dd>
                                        <input 
                                            {...register('password', {
                                                required: {
                                                    value: true,
                                                    message: '비밀번호는 필수 입력사항입니다.'
                                                }
                                            })}
                                        type="password" placeholder="비밀번호를 입력해주세요" />
                                    </dd>
                                </dl>
                            </div>
                        <div className="popup_footer">
                            <button className="bt blue_bgbor" type="submit">확인</button> 
                            <Link href="" className="bt cancel_bt">취소</Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}