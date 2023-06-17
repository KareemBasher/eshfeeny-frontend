import React from 'react'
import { Link } from 'react-router-dom'

const RoundButton = ({ onGetLogo, onGetText, onGetPath, onGetCartLength }) => {
  return (
    <div className="flex mr-5 min-w-fit items-center">
      <Link
        to={onGetPath}
        className="flex bg-[#F7F7F7] justify-center rounded-full shadow-md w-10 h-10 relative"
      >
        {onGetCartLength > 0 && onGetText === 'المفضلة' && (
          <div className="absolute right-0 bg-orange w-[17px] h-[17px] justify-center items-center rounded-full text-[12px]">
            {onGetCartLength}
          </div>
        )}
        {onGetCartLength > 0 && onGetText === 'العربة' && (
          <div className="absolute right-0 bg-orange w-[17px] h-[17px] justify-center items-center rounded-full text-[12px]">
            {onGetCartLength}
          </div>
        )}
        {onGetCartLength > 0 && onGetText === 'أقرب صيدلية' && (
          <div className="absolute right-2.5 top-1.5 bg-orange w-[10px] h-[10px] justify-center items-center rounded-full text-[12px]"></div>
        )}
        {onGetCartLength > 0 && onGetText === 'الطلبات' && (
          <div className="absolute right-2.5 top-1.5 bg-orange w-[10px] h-[10px] justify-center items-center rounded-full text-[12px]"></div>
        )}
        {onGetCartLength > 0 && onGetText === 'الطلبات المؤجلة' && (
          <div className="absolute right-2.5 top-1.5 bg-orange w-[10px] h-[10px] justify-center items-center rounded-full text-[12px]"></div>
        )}
        <img className="self-center" draggable="false" src={onGetLogo} alt="RadialButton" />
      </Link>
      <Link to={onGetPath} className="self-center px-2">
        <p className="text-[20px] pr-1">{onGetText}</p>
      </Link>
    </div>
  )
}

export default RoundButton
