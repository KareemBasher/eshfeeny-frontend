import React, { useState } from 'react'
import ShowPassword from '../../assets/common/ShowPassword.svg'

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
    <div className="w-full mb-5 flex flex-row-reverse bg-[#ECECEC] rounded-[10px] shadow-[0px_2px_1px_rgba(0,0,0,0.15)]">
      {type === 'password' && (
        <img
          src={ShowPassword}
          className="px-4 cursor-pointer"
          onClick={(e) => handleOnClick(e)}
          alt="show password"
        />
      )}
      <input
        className="bg-[#ECECEC] w-full py-4 px-3 rounded-[10px] placeholder:text-[#868484] outline-none"
        type={inputType}
        placeholder={placeHolder}
        value={inputValue}
        onChange={(e) => handleInputValue(e)}
      />
    </div>
  )
}

export default CredentialsInput
