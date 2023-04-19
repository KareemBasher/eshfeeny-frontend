import React from 'react'
import WideButton from './WideButton'

const PageEmpty = ({
  onGetLogo,
  onGetText1,
  onGetText2,
  onGetTitle,
  onGetPath,
  onGetButtonText
}) => {
  return (
    <div>
      <div className="text-right text-[28px] my-10 mr-32 2xl:mr-52">{onGetTitle}</div>
      <div className="flex justify-center my-8">
        <div className="flex justify-center rounded-full w-[148px] h-[148px] bg-[#F7F7F7]">
          <img className=" self-center" draggable="false" src={onGetLogo} alt="Logo" />
        </div>
      </div>
      <div className="m-5 text-[26px]">
        <p>{onGetText1}</p>
        {onGetText1 === 'أنت الان في وضع الضيف' && <p className="py-5">{onGetText2}</p>}
      </div>
      <div>
        <WideButton
          content={onGetButtonText}
          handleOnClick={() => (window.location.href = onGetPath)}
        />
      </div>
    </div>
  )
}

export default PageEmpty
