import React, { useState } from 'react'
import WelcomeLogo from '../../common/WelcomeLogo'
import CredentialsInput from '../../common/CredentialsInput'
import SignupVector from '../../../assets/common/SignupVector.svg'
import WideButton from '../../common/WideButton'
const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [error, setError] = useState(false)

  const handleInput = (value, name) => {
    if (name === 'newPassword') setNewPassword(value)
    else if (name === 'checkPassword') setCheckPassword(value)
  }
  return (
    <div>
      <div>
        <WelcomeLogo />
      </div>

      <div className="flex justify-around">
        <div className="felx flex-col  mt-10 w-[472px]">
          <div className="text-right text-[26px] mb-10">
            <p>إنشاء كلمة مرور جديدة</p>
          </div>
          <div className="mb-5">
            <CredentialsInput
              name={'newPassword'}
              placeHolder={'أدخل كلمة المرور الجديدة'}
              type={'password'}
              value={newPassword}
              handleInput={handleInput}
            />
          </div>

          <div className="mb-20">
            <CredentialsInput
              name={'checkPassword'}
              placeHolder={'تاكيد كلمة المرور'}
              type={'password'}
              value={checkPassword}
              handleInput={handleInput}
            />
          </div>

          <div className="flex justify-start mb-4">
            <WideButton
              disabled={checkPassword.length > 0 ? false : true}
              content={'تأكيد'}
              handleOnClick={handleSubmit}
            />
          </div>
        </div>
        <div>
          <img src={SignupVector} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NewPassword
