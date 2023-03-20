import React, { useState } from 'react'
import ReactCodeInput from 'react-code-input'
import WelcomeLogo from '../../common/WelcomeLogo'
import WideButton from '../../common/WideButton'
import './ReactCodeInput.css'
import SingupVector from '../../../assets/common/SingupVector.svg'
const VerificationCode = () => {
  const [code, setCode] = useState('')

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
              <ReactCodeInput
                type="text"
                fields={4}
                value={code}
                onChange={(value) => handleCodeValue(value)}
                inputStyle={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  border: '1px solid #868484',
                  margin: '5px',
                  textAlign: 'center',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  outline: '1px soild #0597F2'
                }}
              />
            </div>
          </div>

          {/* buttons */}
          <div className="w-full">
            <div className="mb-2">
              <WideButton content="تحقق" disabled={code.length === 4 ? false : true} />
            </div>
            <div>
              <WideButton content="إعادة ارسال الرمز" />
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

export default VerificationCode
