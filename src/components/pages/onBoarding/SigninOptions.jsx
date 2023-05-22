import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Logo from '../../../assets/common/Logo.svg'
import ErrorPage from '../../common/ErrorPage'

const SigninOptions = ({ changeLoggedInUser }) => {
  const { type } = useParams()

  if (type !== 'user' && type !== 'pharmacy' && type !== 'manufacturer') {
    return <ErrorPage />
  }

  const handleGuestLogin = () => {
    changeLoggedInUser('6439bd5e1c12d023717e2be5', 'user')
    window.location.href = '/home'
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img className="w-[306px]" draggable="false" src={Logo} alt="Logo" />
      <p className="text-[28px] my-10">مرحبا بك في تطبيق ميدفايندر</p>

      {type === 'pharmacy' && (
        <p className="text-[24px] mb-10">
          لو مخزنك فاضي تقدر الأن من خلال ميدفايندر تتابع مخزونك و تتواصل مباشرةً مع المصنعين
        </p>
      )}

      {type === 'manufacturer' && (
        <p className="text-[24px] mb-10">
          تقدر الأن من خلال ميدفايندر تستقبل كل طلباتك من الصيدليات و تتابع مخزونك
        </p>
      )}

      <div className="w-[472px] flex flex-col">
        <Link to={`/login/${type}`}>
          <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
            تسجيل الدخول
          </button>
        </Link>

        <Link to={`/signup/${type}`}>
          <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
            إنشاء حساب
          </button>
        </Link>

        {type === 'user' && (
          <button
            onClick={() => handleGuestLogin()}
            className="text-[#949495] underline underline-offset-4"
          >
            تصفح كضيف
          </button>
        )}
      </div>
    </div>
  )
}

export default SigninOptions
