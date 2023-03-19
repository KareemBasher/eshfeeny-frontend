import React, { useEffect, useState } from 'react'
import CredentialsInput from '../../common/CredentialsInput'
import WelcomeLogo from '../../common/WelcomeLogo'
import WideButton from '../../common/WideButton'
import AlternateSignin from '../../common/AlternateSignin'
import SingupVector from '../../../assets/common/SingupVector.svg'
import { createUser } from '../../../utils/usersAPI'

const SignUp = ({ changeLoggedUser }) => {
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

  const inputValidation = () => {
    if (name.length === 0) setError((prev) => ({ ...prev, nameLength: true }))
    else setError((prev) => ({ ...prev, nameLength: false }))

    if (email.length === 0) setError((prev) => ({ ...prev, emailLength: true }))
    else setError((prev) => ({ ...prev, emailLength: false }))

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
      setError((prev) => ({ ...prev, emailCheck: true }))
    else setError((prev) => ({ ...prev, emailCheck: false }))

    if (password.length < 8) setError((prev) => ({ ...prev, passwordLength: true }))
    else setError((prev) => ({ ...prev, passwordLength: false }))

    if (!password === checkPassword) setError((prev) => ({ ...prev, passwordCheck: true }))
    else setError((prev) => ({ ...prev, passwordCheck: false }))
  }

  const handleSubmit = async () => {
    inputValidation()

    if (
      !error.nameLength &&
      !error.emailLength &&
      !error.emailCheck &&
      !error.passwordLength &&
      !error.passwordCheck
    ) {
      const result = await createUser(name, email, password)

      if (result === 'User already exists') setError((prev) => ({ ...prev, userExists: true }))
      else {
        setError((prev) => ({ ...prev, userExists: false }))
        changeLoggedUser(result._id)
        window.location.href = '/home'
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
                error.userExists && (
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
          <img draggable="false" src={SingupVector} alt="login vector" />
        </div>
      </div>
    </>
  )
}

export default SignUp
