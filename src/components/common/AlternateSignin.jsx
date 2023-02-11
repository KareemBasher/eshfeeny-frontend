import React from 'react'
import facebook from '../../assets/common/Facebook.svg'
import google from '../../assets/common/Google logo.svg'
import apple from '../../assets/common/Apple.svg'
import { Link } from 'react-router-dom'

const AlternateSignin = ({ state }) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center opacity-80">
        <div className="w-2/5 h-[2px] bg-[#868484]"></div>
        <span className="text-[#868484] text-[12px] px-1">أو باستخدام</span>
        <div className="w-2/5 h-[2px] bg-[#868484]"></div>
      </div>

      <div className="flex w-full items-center justify-center my-8">
        <div className="w-[52px] h-[52px] flex items-center justify-center bg-[#F5F5F5] rounded-full shadow-md mx-2">
          <img src={apple} alt="apple" />
        </div>

        <div className="w-[52px] h-[52px] flex items-center justify-center bg-[#F5F5F5] rounded-full shadow-md mx-2">
          <img src={facebook} alt="facebook" />
        </div>

        <div className="w-[52px] h-[52px] flex items-center justify-center bg-[#F5F5F5] rounded-full shadow-md mx-2">
          <img src={google} alt="google" />
        </div>
      </div>

      <div className="text-[14px]">
        {state === 'login' ? (
          <div>
            <span>ليس لديك حساب؟</span>
            <Link to="/signup">
              <span className="mx-1 text-blue underline">انشئ حساب</span>
            </Link>
          </div>
        ) : (
          <div>
            <span>لديك حساب بالفعل؟</span>
            <Link to="/login">
              <span className="mx-1 text-blue underline">سجل دخول</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default AlternateSignin
