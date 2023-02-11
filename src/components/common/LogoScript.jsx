import React from 'react'
import Logo from '../../assets/common/Logo.svg'

const LogoScript = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={Logo} className="w-[40px] h-[40px]" alt="Logo" />
      <p className="text-[20px] mx-3 pl-6">أشفيني</p>
    </div>
  )
}

export default LogoScript
