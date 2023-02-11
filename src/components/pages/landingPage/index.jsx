import React from 'react'
import logo from '../../../assets/common/logo.svg'
import WideButton from './WideButton'

const index = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <img className="w-[306px] my-14" src={logo} alt="logo" />
      <p className="text-[28px]">مرحبا بك في تطبيق أشفينى</p>

      <div className="flex flex-col mt-32">
        <WideButton content={'تسجيل الدخول'} />
        <WideButton content={'إنشاء حساب'} />
      </div>
    </div>
  )
}

export default index
