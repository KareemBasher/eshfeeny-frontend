import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/*         Page imports         */
import WelcomeLogo from '../../common/WelcomeLogo'
import CredentialsInput from '../../common/CredentialsInput'
/*         Assets         */
import WideButton from '../../common/WideButton'
import SignupVector from '../../../assets/common/SignupVector.svg'

/*         API         */
import { updatePassword, checkUserEmail } from '../../../utils/usersAPI'

const NewPassword = ({ type }) => {
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [error, setError] = useState(false)
  const [user, setUser] = useState({})

  const code = useParams().code
  const codeFromStorage = sessionStorage.getItem('resetPasswordCode')
  const email = sessionStorage.getItem('resetPasswordEmail')

  useEffect(() => {
    const checkEmail = async () => {
      const response = await checkUserEmail(email)
      if (response === 'false') {
        window.location.href = `/login/${type}`
      } else {
        setUser(response)
      }
    }

    checkEmail()
  }, [])

  if (code !== codeFromStorage) {
    window.location.href = `/login/${type}`
  }

  const handleInput = (value, name) => {
    if (name === 'newPassword') setNewPassword(value)
    else if (name === 'checkPassword') setCheckPassword(value)
  }

  const inputValidation = () => {
    const errorObj = {}

    if (newPassword.length < 8) errorObj.passwordLength = true
    else errorObj.passwordLength = false

    if (newPassword !== checkPassword || checkPassword < 8) errorObj.passwordCheck = true
    else errorObj.passwordCheck = false

    setError(errorObj)

    if (errorObj.passwordCheck || errorObj.passwordLength) return false
    else return true
  }

  const handleSubmit = () => {
    const credentialsCorrect = inputValidation()

    if (credentialsCorrect) {
      updatePassword(user._id, newPassword)
      sessionStorage.removeItem('resetPasswordCode')
      sessionStorage.removeItem('resetPasswordEmail')
      window.location.href = '/login/'
    }
  }

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter' && checkPassword.length > 0) {
        handleSubmit()
      }
    }

    window.addEventListener('keydown', handleEnter)

    return () => {
      window.removeEventListener('keydown', handleEnter)
    }
  }, [newPassword, checkPassword])

  return (
    <div>
      <div>
        <WelcomeLogo />
      </div>

      <div className="flex justify-around">
        <div className="felx flex-col  mt-10 w-[472px]">
          <div className="text-right text-[26px] mb-10">
            <p>إنشاء كلمة مرور جديدة</p>
          </div>
          <div className="mb-5">
            <CredentialsInput
              name={'newPassword'}
              placeHolder={'أدخل كلمة المرور الجديدة'}
              type={'password'}
              value={newPassword}
              handleInput={handleInput}
            />
            <div className="text-right">
              {error.passwordLength && (
                <div className="">
                  <span className="text-[#EB1D36] text-[14px] text-right">
                    من فضلك كلمة المرور يجيب الا تقل عن 8 احرف او ارقام
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mb-10">
            <CredentialsInput
              name={'checkPassword'}
              placeHolder={'تاكيد كلمة المرور'}
              type={'password'}
              value={checkPassword}
              handleInput={handleInput}
            />
            <div className="text-right">
              {error.passwordCheck && (
                <div className="">
                  <span className="text-[#EB1D36] text-[14px] text-right">
                    من فضلك ادخل نفس كلمه المرور
                  </span>
                </div>
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
        </div>
        <div>
          <img src={SignupVector} alt="" draggable="false" />
        </div>
      </div>
    </div>
  )
}

export default NewPassword
