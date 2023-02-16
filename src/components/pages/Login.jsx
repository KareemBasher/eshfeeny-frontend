import React, { useState, useEffect } from 'react'
import Logo from '../../assets/common/Logo.svg'
import CredentialsInput from '../common/CredentialsInput'
import LoginVector from '../../assets/loginPage/LoginVector.svg'
import LoginVectorError from '../../assets/loginPage/LoginVectorError.svg'
import WideButton from '../common/WideButton'
import AlternateSignin from '../common/AlternateSignin'
import { verifyLogin } from '../../utils/usersAPI'

const Login = ({ changeLoggedUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    setEmail('')
    setPassword('')
  }, [])

  const handleInput = (value, name) => {
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }

  const handleSubmit = async () => {
    if (password.length < 4) setError({ password: true })
    else {
      const result = await verifyLogin(email, password)
      if (result) {
        changeLoggedUser(result._id)
        setError(false)
      } else {
        setError({ all: true })
      }
    }
  }

  return (
    <div>
      <div className="flex h-[25vh] items-center justify-center">
        <img src={Logo} className="mx-5 w-[44px]" alt="Logo" />
        <span className="text-[24px]">مرحبا بك في تطبيق أشفينى </span>
      </div>

      <div className="flex h-[75vh] justify-around">
        <div className="m-10 w-[472px] flex flex-col">
          <p className="text-[28px] mb-10 text-right">قم بتسجيل الدخول</p>
          <CredentialsInput
            name={'email'}
            placeHolder={'البريد الاكتروني'}
            type={'text'}
            value={email}
            handleInput={handleInput}
          />
          <CredentialsInput
            name={'password'}
            placeHolder={'كلمة المرور'}
            type={'password'}
            value={password}
            handleInput={handleInput}
          />

          <div className="flex flex-row-reverse items-center justify-between">
            <span className="text-[14px] text-[#868484] underline float-left cursor-pointer">
              هل نسيت كلمة السر؟
            </span>

            {error.password ? (
              <span className="text-[#EB1D36] text-[14px]">
                من فضلك كلمة المرور يجيب الا تقل عن 8 احرف او ارقام
              </span>
            ) : (
              error.all && (
                <span className="text-[#EB1D36] text-[14px]">
                  يوجد خطأ بالإيميل أو كلمة السر التى سجلتها
                </span>
              )
            )}
          </div>

          <div className="mt-16 mb-4">
            <WideButton content={'تأكيد'} handleOnClick={handleSubmit} />
          </div>

          <div className="w-full flex justify-center relative">
            <AlternateSignin state={'login'} />
          </div>
        </div>
        <div className="w-4/12">
          <img src={error?.all ? LoginVectorError : LoginVector} alt="login vector" />
        </div>
      </div>
    </div>
  )
}

export default Login
