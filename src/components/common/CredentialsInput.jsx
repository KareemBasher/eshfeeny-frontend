import React, { useState } from 'react'
import ShowPassword from '../../assets/common/ShowPassword.svg'
import ShowPasswordOn from '../../assets/common/ShowPasswordOn.svg'
import './PasswordDots.css'

const CredentialsInput = ({ name, placeHolder, type, value, handleInput }) => {
  const [inputType, setInputType] = useState(type)
  const [inputValue, setInputValue] = useState(value)

  const handleOnClick = () => {
    if (inputType === 'password') setInputType('text')
    else setInputType('password')
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
    handleInput(e.target.value, name)
  }

  return (
    <div className="w-full flex flex-row-reverse rounded-[10px] focus-within:border-lightBlue text-[20px] border border-[#868484]">
      {type === 'password' && (
        <img
          src={inputType === 'password' ? ShowPassword : ShowPasswordOn}
          className="px-4 cursor-pointer"
          onClick={(e) => handleOnClick(e)}
          draggable="false"
          alt="show password"
        />
      )}
      <input
        className="w-full py-4 px-3 rounded-[10px] placeholder:text-[#868484] placeholder:text-[16px] outline-none"
        type={inputType}
        placeholder={placeHolder}
        value={inputValue}
        onChange={(e) => handleInputValue(e)}
      />
    </div>
  )
}

export default CredentialsInput
