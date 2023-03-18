import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/common/Logo.svg'

const LogoScript = () => {
  return (
    <Link to="/home" className="flex justify-center items-center">
      <img src={Logo} className="w-[40px] h-[40px] mx-5" alt="Logo" />
      <p className="text-[20px] ml-10">أشفيني</p>
    </Link>
  )
}

export default LogoScript
