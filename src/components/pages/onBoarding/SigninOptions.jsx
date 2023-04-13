import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Logo from '../../../assets/common/Logo.svg'
import ErrorPage from '../../common/ErrorPage'

const SigninOptions = () => {
  const { type } = useParams()

  if (type !== 'user' && type !== 'pharmacy' && type !== 'manufacturer') {
    return <ErrorPage />
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img className="w-[306px]" draggable="false" src={Logo} alt="Logo" />
      <p className="text-[28px] my-10">مرحبا بك في تطبيق أشفينى</p>

      {type === 'pharmacy' && (
        <p className="text-[24px] mb-10">
          لو مخزنك فاضي تقدر الأن من خلال أشفينى تتابع مخزونك و تتواصل مباشرتاً مع المصنعين
        </p>
      )}

      {type === 'manufacturer' && (
        <p className="text-[24px] mb-10">
          تقدر الأن من خلال أشفينى تستقبل كل طلباتك من الصيدليات و تتابع مخزونك
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
          <Link className="text-[#949495] underline underline-offset-4" to={`/signup/${type}`}>
            تصفح كضيف
          </Link>
        )}
      </div>
    </div>
  )
}

export default SigninOptions
