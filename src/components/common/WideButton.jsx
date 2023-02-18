import React from 'react'

const WideButton = ({ content, handleOnClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue disabled:bg-[#E5E5E5] disabled:text-[#939393]"
      onClick={() => handleOnClick()}
    >
      {content}
    </button>
  )
}

export default WideButton
