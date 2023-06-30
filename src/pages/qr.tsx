import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import speakeasy from '@levminer/speakeasy'

export default function QR() {
    // let secret = speakeasy.generateSecret({length: 10})
    // console.log(secret.base32)
    let secret = 'JB2EKJCXPVXWSLBX'
    let url = speakeasy.otpauthURL({secret: secret, label: 'TOTP Test', encoding: 'base32', period: 30})

    const [pass, setPass] = useState(false)

    const checkCode = (codeInput: any) => {
        const code = codeInput.target.value
        if(code.length==6){
            const qwe = speakeasy.totp.verify({
                secret: secret,
                encoding: 'base32',
                token: code,
                step: 30
            })
            console.log(code, qwe)
            setPass(qwe)
        }
    }

    return (
        <>
        <div id="content" className="container">
            <QRCode value={url}></QRCode>
            <input style={{width: "200px", display: "block", margin: "auto"}} type='number' placeholder='otp키 입력' onChange={checkCode} maxLength={6}/>
            {
                pass===true? <p style={{fontSize: "1rem"}}>성공</p> : <p>실패</p>
            }
        </div> 
        </>
    )
}