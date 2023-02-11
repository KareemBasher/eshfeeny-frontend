import React from 'react'
import logo from '../../assets/common/logo.svg'
import WideButton from '../common/WideButton'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <img className="w-[306px] my-14" src={logo} alt="logo" />
      <p className="text-[28px]">مرحبا بك في تطبيق أشفينى</p>

      <div className="flex flex-col mt-32">
        <Link to="/login">
          <WideButton content={'تسجيل الدخول'} />
        </Link>

        <Link to="/signup">
          <WideButton content={'إنشاء حساب'} />
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
