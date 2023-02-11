import React from 'react'

const WideButton = ({ content }) => {
  return (
    <button className="w-full max-w-[472px] h-[58px] rounded-[10px] my-3 text-[24px] text-white bg-blue">
      {content}
    </button>
  )
}

export default WideButton
