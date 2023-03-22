/*         Hooks         */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/*         Components         */
import CredentialsInput from '../../common/CredentialsInput'
import WideButton from '../../common/WideButton'

/*         Illustration and images         */
import Logo from '../../../assets/common/Logo.svg'
import LoginVectorError from '../../../assets/loginPage/LoginVectorError.svg'
import LoginVector from '../../../assets/loginPage/LoginVector.svg'

/*         API         */
import { checkUserEmail } from '../../../utils/usersAPI'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleInput = (email) => {
    setEmail(email)
  }

  const handleSubmit = async () => {
    if (email === '') setError(true)
    else {
      const result = await checkUserEmail(email)
      if (result) {
        setError(false)
        navigate(`/forgotPassword/verify/${email}`)
      } else {
        setError(true)
      }
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleSubmit()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [email])

  return (
    <div>
      <div className="flex h-[25vh] items-center justify-center">
        <img src={Logo} draggable="false" className="mx-5 w-[44px]" alt="Logo" />
        <span className="text-[24px]">مرحبا بك في تطبيق أشفينى </span>
      </div>
      <div className="flex h-[75vh] justify-around">
        <div className="m-10 w-[472px] flex flex-col">
          <p className="text-[28px] mb-10 text-right">نسيت كلمة المرور؟</p>
          <p className="text-[22px] mb-10 text-right">ليس هناك أي مشكلة </p>

          <CredentialsInput
            name={'email'}
            placeHolder={'البريد الاكتروني'}
            type={'text'}
            value={email}
            handleInput={handleInput}
          />

          <div className="flex items-center">
            {error && (
              <span className="text-[#EB1D36] text-[14px]">البريد الألكترونى غير مسجل</span>
            )}
          </div>

          <div className="mt-16 mb-4">
            <WideButton
              content={'إرسال'}
              handleOnClick={handleSubmit}
              disabled={email.length > 0 ? false : true}
            />
          </div>

          <div>
            <span>لديك حساب بالفعل؟</span>
            <Link to="/login">
              <span className="mx-1 text-blue underline">سجل دخول</span>
            </Link>
          </div>
        </div>

        <div className="w-4/12">
          <img src={error ? LoginVectorError : LoginVector} draggable="false" alt="login vector" />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
