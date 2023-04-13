import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/*     Assets      */
import SignupVector from '../../../assets/common/SignupVector.svg'
/*     Components      */
import CredentialsInput from '../../common/CredentialsInput'
import WelcomeLogo from '../../common/WelcomeLogo'
import WideButton from '../../common/WideButton'
import AlternateSignin from '../../common/AlternateSignin'
import ErrorPage from '../../common/ErrorPage'
/*     API      */
import { createUser } from '../../../utils/usersAPI'

const SignUp = ({ changeLoggedUser }) => {
  const { type } = useParams()

  if (type !== 'user' && type !== 'pharmacy' && type !== 'manufacturer') {
    return <ErrorPage />
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassowrd] = useState('')
  const [error, setError] = useState({})

  const handleInput = (value, name) => {
    if (name === 'name') setName(value)
    else if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
    else if (name === 'checkPassword') setCheckPassowrd(value)
  }

  const inputValidation = async () => {
    const errorObj = {}

    if (name.length === 0) errorObj.nameLength = true
    else errorObj.nameLength = false

    if (email.length === 0) errorObj.emailLength = true
    else errorObj.emailLength = false

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
      errorObj.emailCheck = true
    else errorObj.emailCheck = false

    if (password.length < 8) errorObj.passwordLength = true
    else errorObj.passwordLength = false

    if (password !== checkPassword || checkPassword < 8) errorObj.passwordCheck = true
    else errorObj.passwordCheck = false

    setError(errorObj)

    if (
      errorObj.emailCheck ||
      errorObj.emailExists ||
      errorObj.emailLength ||
      errorObj.nameLength ||
      errorObj.passwordCheck ||
      errorObj.passwordLength
    )
      return false
    else return true
  }

  const handleSubmit = async () => {
    const validCredentials = await inputValidation()

    if (validCredentials) {
      const result = await createUser(name, email, password)

      if (result === 'User already exists') setError((prev) => ({ ...prev, emailExists: true }))
      else {
        setError((prev) => ({ ...prev, userExists: false }))
        changeLoggedUser(result._id)
        window.location.href = '/home'
      }
    }
  }

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Enter' && checkPassword.length > 0) {
        handleSubmit()
      }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [name, email, password, checkPassword])

  return (
    <>
      <div>
        <WelcomeLogo />
      </div>

      <div className="flex h-[75vh] justify-around">
        <div className="flex flex-col h-[75vh]">
          <div className=" w-[472px] flex flex-col">
            <p className="text-[28px] mb-10 text-right">إنشاء حساب جديد</p>
            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'name'}
                placeHolder={'اسم المستخدم'}
                type={'text'}
                value={name}
                handleInput={handleInput}
              />
              <div>
                {error.nameLength && (
                  <div className="">
                    <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل اسم</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'email'}
                placeHolder={'البريد الاكتروني'}
                type={'text'}
                value={email}
                handleInput={handleInput}
              />
              {error.emailLength ? (
                <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل بريدك الالكتروني</span>
              ) : error.emailCheck ? (
                <span className="text-[#EB1D36] text-[14px]">البريد الاكتروني غير صحيح</span>
              ) : (
                error.emailExists && (
                  <span className="text-[#EB1D36] text-[14px]">البريد الاكتروني مسجل بالفعل</span>
                )
              )}
            </div>

            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'password'}
                placeHolder={'كلمة المرور'}
                type={'password'}
                value={password}
                handleInput={handleInput}
              />
              {error.passwordLength && (
                <span className="text-[#EB1D36] text-[14px]">
                  من فضلك كلمة المرور يجيب الا تقل عن 8 احرف او ارقام
                </span>
              )}
            </div>

            <div className="text-right flex flex-col items-start justify-start mb-5">
              <CredentialsInput
                name={'checkPassword'}
                placeHolder={'تاكيد كلمة المرور'}
                type={'password'}
                value={checkPassword}
                handleInput={handleInput}
              />
              {error.passwordCheck && (
                <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل نفس كلمه المرور</span>
              )}
            </div>
          </div>

          <div className="flex justify-start mb-4">
            <WideButton
              disabled={checkPassword.length > 0 ? false : true}
              content={'تأكيد'}
              handleOnClick={handleSubmit}
            />
          </div>

          <div className="w-full flex justify-center relative">
            <AlternateSignin state={'signup'} />
          </div>
        </div>

        <div>
          <img draggable="false" src={SignupVector} alt="login vector" />
        </div>
      </div>
    </>
  )
}

export default SignUp
