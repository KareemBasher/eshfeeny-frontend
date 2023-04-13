/*         Hooks         */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

/*         Components         */
import CredentialsInput from '../../common/CredentialsInput'
import WideButton from '../../common/WideButton'
import AlternateSignin from '../../common/AlternateSignin'
import WelcomeLogo from '../../common/WelcomeLogo'
import ErrorPage from '../../common/ErrorPage'

/*         Illustration and images         */
import LoginVectorError from '../../../assets/loginPage/LoginVectorError.svg'
import LoginVector from '../../../assets/loginPage/LoginVector.svg'
import PharmacyLogin from '../../../assets/loginPage/PharmacyLogin.svg'
import ManufacturerLogin from '../../../assets/loginPage/ManufacturerLogin.svg'

/*         API         */
import { verifyLogin } from '../../../utils/usersAPI'
import { pharmacyVerifyLogin } from '../../../utils/pharmaciesAPI'

const Login = ({ changeLoggedUser }) => {
  const { type } = useParams()

  if (type !== 'user' && type !== 'pharmacy' && type !== 'manufacturer') {
    return <ErrorPage />
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [vector, setVector] = useState('')

  useEffect(() => {
    setEmail('')
    setPassword('')

    if (type === 'user') setVector(LoginVector)
    else if (type === 'pharmacy') setVector(PharmacyLogin)
    else if (type === 'manufacturer') setVector(ManufacturerLogin)
  }, [])

  const handleInput = (value, name) => {
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }

  const handleSubmit = async () => {
    if (password.length < 8) setError({ password: true })
    else {
      let result
      if (type === 'user') result = await verifyLogin(email, password)
      else if (type === 'pharmacy') result = await pharmacyVerifyLogin(email, password)
      if (result) {
        changeLoggedUser(result._id)
        setError(false)
        if (type === 'user') window.location.href = '/home'
        else if (type === 'pharmacy') window.location.href = '/pharmacy'
        else if (type === 'manufacturer') window.location.href = '/manufacturer'
      } else {
        setError({ all: true })
      }
    }
  }

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Enter' && email.length > 0) {
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
            <Link to={`/forgotPassword/${type}`}>
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
          <img src={error?.all ? LoginVectorError : vector} draggable="false" alt="login vector" />
        </div>
      </div>
    </div>
  )
}

export default Login
