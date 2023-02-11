import React from 'react'
import logo from '../../assets/common/logo.svg'
import CredentialsInput from '../common/CredentialsInput'
import LoginVector from '../../assets/common/LoginVector.svg'

const Login = ({ changeLoggedUSer }) => {
  return (
    <div>
      <div className="flex h-[25vh] items-center justify-center">
        <img src={logo} className="mx-5 w-[44px]" alt="logo" />
        <span className="text-[24px]">مرحبا بك في تطبيق أشفينى </span>
      </div>

      <div className="flex h-[75vh] justify-around">
        <div className="m-10 w-3/12 flex flex-col">
          <p className="text-[28px] mb-10 text-right">قم بتسجيل الدخول</p>
          <CredentialsInput placeHolder={'البريد الاكتروني'} type={'text'} />
          <CredentialsInput placeHolder={'كلمة المرور'} type={'password'} />
        </div>
        <div className="w-4/12">
          <img src={LoginVector} alt="login vector" />
        </div>
      </div>
    </div>
  )
}

export default Login
