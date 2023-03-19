/*         Hooks         */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/*         Components         */
import CredentialsInput from '../../common/CredentialsInput'
import WideButton from '../../common/WideButton'
import AlternateSignin from '../../common/AlternateSignin'
import WelcomeLogo from '../../common/WelcomeLogo'

/*         Illustration and images         */
import LoginVectorError from '../../../assets/loginPage/LoginVectorError.svg'
import LoginVector from '../../../assets/loginPage/LoginVector.svg'

/*         API         */
import { verifyLogin } from '../../../utils/usersAPI'

const Login = ({ changeLoggedUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    setEmail('')
    setPassword('')
  }, [])

  const handleInput = (value, name) => {
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }

  const handleSubmit = async () => {
    if (password.length < 8) setError({ password: true })
    else {
      const result = await verifyLogin(email, password)
      if (result) {
        changeLoggedUser(result._id)
        setError(false)
        window.location.href = '/home'
      } else {
        setError({ all: true })
      }
    }
  }

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Enter') {
        handleSubmit()
      }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [password])

  return (
    <div>
      <div>
        <WelcomeLogo />
      </div>

      <div className="flex h-[75vh] justify-around">
        <div className="m-10 w-[472px] flex flex-col">
          <p className="text-[28px] mb-10 text-right">قم بتسجيل الدخول</p>
          <div className="mb-5">
            <CredentialsInput
              name={'email'}
              placeHolder={'البريد الاكتروني'}
              type={'text'}
              value={email}
              handleInput={handleInput}
            />
          </div>
          <div className="mb-5">
            <CredentialsInput
              name={'password'}
              placeHolder={'كلمة المرور'}
              type={'password'}
              value={password}
              handleInput={handleInput}
            />
          </div>

          <div className="flex flex-row-reverse items-center justify-between">
            <Link to="/forgotPassword">
              <span className="text-[14px] text-[#868484] underline float-left">
                هل نسيت كلمة السر؟
              </span>
            </Link>

            {error.password ? (
              <span className="text-[#EB1D36] text-[14px]">
                من فضلك كلمة المرور يجيب الا تقل عن 8 احرف او ارقام
              </span>
            ) : (
              error.all && (
                <span className="text-[#EB1D36] text-[14px]">
                  البريد الالكتروني او كلمة المرور غير صحيحة
                </span>
              )
            )}
          </div>

          <div className="mt-16 mb-4">
            <WideButton
              content={'تأكيد'}
              handleOnClick={handleSubmit}
              disabled={email.length > 0 ? false : true}
            />
          </div>

          <div className="w-full flex justify-center relative">
            <AlternateSignin state={'login'} />
          </div>
        </div>

        <div className="w-4/12">
          <img src={error?.all ? LoginVectorError : LoginVector} alt="login vector" />
        </div>
      </div>
    </div>
  )
}

export default Login
