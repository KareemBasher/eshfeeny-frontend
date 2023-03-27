import React from 'react'
import Logo from '../../assets/common/Logo.svg'
const WelcomeLogo = () => {
  return (
    <div>
      <div className="flex h-[25vh] items-center justify-center">
        <img src={Logo} draggable="false" className="mx-5 w-[44px]" alt="Logo" />
        <span className="text-[24px]">مرحبا بك في تطبيق أشفينى </span>
      </div>
    </div>
  )
}

export default WelcomeLogo
