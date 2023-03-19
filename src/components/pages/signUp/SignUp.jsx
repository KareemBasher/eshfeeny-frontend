import React, { useState } from 'react'
import CredentialsInput from '../../common/CredentialsInput'
import WelcomeLogo from '../../common/WelcomeLogo'
import WideButton from '../../common/WideButton'
import AlternateSignin from '../../common/AlternateSignin'
import SingupVector from '../../../assets/common/SingupVector.svg'
const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassowrd] = useState('')
  const [error, setError] = useState({})

  const handleInput = (value, name) => {
    if (name === 'name') setName(value)
    else if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
    else if (name === 'checkPassword') setCheckPassowrd(value)
  }

  const handleSubmit = () => {
    if (name.length === 0) setError((prev) => ({ ...prev, nameLength: true }))
    else setError((prev) => ({ ...prev, nameLength: false }))

    if (email.length === 0) setError((prev) => ({ ...prev, emailLength: true }))
    else setError((prev) => ({ ...prev, emailLength: false }))

    if (!email.match('/^S+@S+.S+$/')) setError((prev) => ({ ...prev, emailCheck: true }))
    else setError((prev) => ({ ...prev, emailCheck: false }))

    if (password.length < 8) setError((prev) => ({ ...prev, passwordLength: true }))
    else setError((prev) => ({ ...prev, passwordLength: false }))

    if (password === checkPassword) setError((prev) => ({ ...prev, passwordCheck: true }))
    else setError((prev) => ({ ...prev, passwordCheck: true }))
  }

  return (
    <>
      <div>
        <WelcomeLogo />
      </div>

      <div className="flex justify-evenly ml-24">
        <div className="flex flex-col h-[75vh]">
          <div className=" w-[472px] flex flex-col">
            <p className="text-[28px] mb-10 text-right">إنشاء حساب جديد</p>
            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'name'}
                placeHolder={'اسم المستخدم'}
                type={'text'}
                value={name}
                handleInput={handleInput}
              />
              <div>
                {error.nameLength && (
                  <div className="">
                    <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل اسم</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'email'}
                placeHolder={'البريد الاكتروني'}
                type={'text'}
                value={email}
                handleInput={handleInput}
              />
              {error.emailLength ? (
                <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل البريد</span>
              ) : (
                error.emailCheck && (
                  <span className="text-[#EB1D36] text-[14px]">البريد الاكتروني غير صحيح</span>
                )
              )}
            </div>

            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'password'}
                placeHolder={'كلمة المرور'}
                type={'password'}
                value={password}
                handleInput={handleInput}
              />
              {error.passwordLength && (
                <span className="text-[#EB1D36] text-[14px]">
                  من فضلك كلمة المرور يجيب الا تقل عن 8 احرف او ارقام
                </span>
              )}
            </div>

            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'checkPassword'}
                placeHolder={'تاكيد كلمة المرور'}
                type={'password'}
                value={checkPassword}
                handleInput={handleInput}
              />
              {error.passwordCheck && (
                <span className="text-[#EB1D36] text-[14px] mb-10">
                  من فضلك ادخل كلمه مرور صحيحة
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-start">
            <WideButton
              disabled={checkPassword.length > 0 ? false : true}
              content={'تأكيد'}
              handleOnClick={handleSubmit}
            />
          </div>

          <div className="w-full flex justify-center relative">
            <AlternateSignin state={'signup'} />
          </div>
        </div>

        <div className="">
          <img draggable="false" src={SingupVector} alt="login vector" />
        </div>
      </div>
    </>
  )
}

export default SignUp
