import React from 'react'
import Logo from '../../../assets/common/Logo.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img className="w-[306px]" draggable="false" src={Logo} alt="Logo" />
      <p className="text-[26px] my-10">أختر نوع الحساب</p>

      <div className="w-[472px] flex flex-col">
        <Link to="/landingPage/user">
          <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
            مستخدم
          </button>
        </Link>

        <Link to="/landingPage/pharmacy">
          <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
            صيدلية
          </button>
        </Link>

        <Link to="/landingPage/manufacturer">
          <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
            مصنع
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
