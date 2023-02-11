import React, { useState, useEffect } from 'react'
import logo from '../../assets/common/logo.svg'
import CredentialsInput from '../common/CredentialsInput'
import LoginVector from '../../assets/common/LoginVector.svg'
import WideButton from '../common/WideButton'
import AlternateSignin from '../common/AlternateSignin'

const Login = ({ changeLoggedUSer }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setEmail('')
    setPassword('')
  }, [])

  const handleInput = (value, name) => {
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }
  return (
    <div>
      <div className="flex h-[25vh] items-center justify-center">
        <img src={logo} className="mx-5 w-[44px]" alt="logo" />
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

          <div>
            <span className="text-[14px] text-[#868484] underline float-left ml-6 cursor-pointer">
              هل نسيت كلمة السر؟
            </span>
          </div>

          <div className="mt-16 mb-4">
            <WideButton content={'تأكيد'} />
          </div>

          <div className="w-full flex justify-center relative">
            <AlternateSignin state={'login'} />
          </div>
        </div>
        <div className="w-4/12">
          <img src={LoginVector} alt="login vector" />
        </div>
      </div>
    </div>
  )
}

export default Login
