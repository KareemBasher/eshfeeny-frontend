import React, { useState } from 'react'
import WelcomeLogo from '../../common/WelcomeLogo'
import CredentialsInput from '../../common/CredentialsInput'
const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [error, setError] = useState(false)

  const handleInput = (value, name) => {
    if (name === 'newPassword') setNewPassword(value)
    else if (name === 'checkPassword') setCheckPassword(value)
  }
  return (
    <div>
      <div>
        <WelcomeLogo />
      </div>
      <div>
        <div>
          <CredentialsInput
            name={'newPassword'}
            placeHolder={'البريد الاكتروني'}
            type={'password'}
            value={newPassword}
            handleInput={handleInput}
          />
        </div>
        <div>
          <CredentialsInput
            name={'checkPassword'}
            placeHolder={'البريد الاكتروني'}
            type={'password'}
            value={checkPassword}
            handleInput={handleInput}
          />
        </div>
      </div>
    </div>
  )
}

export default NewPassword
