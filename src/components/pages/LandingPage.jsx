import React from 'react'
import Logo from '../../assets/common/Logo.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-[306px] my-14" draggable="false" src={Logo} alt="Logo" />
      <p className="text-[28px]">مرحبا بك في تطبيق أشفينى</p>

      <div className="w-[472px] flex flex-col mt-32">
        <Link to="/login">
          <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
            تسجيل الدخول
          </button>
        </Link>

        <Link to="/signup">
          <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
            إنشاء حساب
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
