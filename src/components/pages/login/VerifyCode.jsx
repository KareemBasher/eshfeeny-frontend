import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AuthCode from 'react-auth-code-input'

/*         Assets         */
import WelcomeLogo from '../../common/WelcomeLogo'
import WideButton from '../../common/WideButton'
import SingupVector from '../../../assets/common/SingupVector.svg'

/*         API         */
import { sendEmail } from '../../../utils/dashboard'

const VerifyCode = () => {
  const [code, setCode] = useState('')
  const [emailedCode, setEmailedCode] = useState('')
  const params = useParams()

  useEffect(() => {
    const getCode = async () => {
      setEmailedCode(await sendEmail(params.email))
    }

    getCode()
    console.log(emailedCode)
  }, [])

  const handleCodeValue = (value) => {
    setCode(value)
  }

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
              <WideButton content="تحقق" disabled={code.length === 4 ? false : true} />
            </div>
            <div>
              <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] border border-black">
                إعادة إرسال الرمز
              </button>
            </div>
          </div>
        </div>

        {/* img  */}
        <div>
          <img src={SingupVector} alt="" />
        </div>
      </div>
    </div>
  )
}

export default VerifyCode
