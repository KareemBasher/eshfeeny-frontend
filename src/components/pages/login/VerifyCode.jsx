import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AuthCode from 'react-auth-code-input'

/*         Assets         */
import WelcomeLogo from '../../common/WelcomeLogo'
import WideButton from '../../common/WideButton'
import SignupVector from '../../../assets/common/SignupVector.svg'

/*         API         */
import { sendEmail } from '../../../utils/dashboard'

const VerifyCode = () => {
  const [code, setCode] = useState('')
  const [emailedCode, setEmailedCode] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState(false)
  const params = useParams()

  useEffect(() => {
    const getCode = async () => {
      setEmailedCode(await sendEmail(params.email))
    }

    getCode()
  }, [])

  const handleCodeValue = (value) => {
    setCode(value)
  }

  const handleSubmit = () => {
    if (code === emailedCode.code) {
      const code = Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
      sessionStorage.setItem('resetPasswordCode', code)
      sessionStorage.setItem('resetPasswordEmail', params.email)

      window.location.href = `/newPassword/${code}`
      setError(false)
    } else {
      setEmailSent(false)
      setError(true)
    }
  }

  const handleResend = async () => {
    setEmailedCode(await sendEmail(params.email))
    setEmailSent(true)
    setError(false)

    setTimeout(() => {
      setEmailSent(false)
    }, 5000)
  }

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter' && code.length === 4) {
        handleSubmit()
      }
    }

    window.addEventListener('keydown', handleEnter)

    return () => {
      window.removeEventListener('keydown', handleEnter)
    }
  }, [code])

  return (
    <div>
      <div>
        <WelcomeLogo />
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start w-[472px] my-20">
          {/* text */}
          <div className="mb-5">
            <p className="mb-2 text-right text-[28px]">أدخل رمز التحقق</p>
            <p className="text-[18px]">تم إرسال رمز مكون من 4 أرقام إلى بريدك الإلكتروني</p>
          </div>

          {/* input */}
          <div className="mb-10">
            <div dir="ltr">
              <AuthCode
                className="codeInput"
                value={code}
                inputClassName={
                  'h-[60px] w-[60px] m-2 border border-[#949495] rounded-[10px] outline-lightBlue text-center text-[20px]'
                }
                length={4}
                onChange={handleCodeValue}
              />
            </div>
          </div>

          {/* buttons */}
          <div className="w-full">
            <div className="mb-2">
              <WideButton
                handleOnClick={handleSubmit}
                content="تحقق"
                disabled={code.length === 4 ? false : true}
              />
            </div>
            <div className="text-right">
              <button
                className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] border border-black"
                onClick={() => handleResend()}
              >
                إعادة إرسال الرمز
              </button>
              {emailSent && <span className="text-lightBlue">تم إعادة ارسال كود التحقيق</span>}
              {error && <span className="text-red-600">كود التحقيق غير صحيح</span>}
            </div>
          </div>
        </div>

        {/* img  */}
        <div>
          <img src={SignupVector} alt="" />
        </div>
      </div>
    </div>
  )
}

export default VerifyCode
