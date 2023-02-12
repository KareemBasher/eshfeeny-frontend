import React from 'react'

const PageEmpty = ({ onGetLogo, onGetText, onGetTitle }) => {
  return (
    <div>
      <div className="text-right text-[28px] m-10 mr-20">{onGetTitle}</div>
      <div className="flex justify-center my-8">
        <div className="flex justify-center rounded-full w-[148px] h-[148px]  bg-[#F7F7F7]">
          <img className="h-[77.69px] self-center" src={onGetLogo} alt="Logo" />
        </div>
      </div>
      <div className="m-5 text-[26px]">
        <p>{onGetText}</p>
      </div>
    </div>
  )
}

export default PageEmpty
