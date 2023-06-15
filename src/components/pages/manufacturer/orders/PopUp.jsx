import React from 'react'
/*      Icons      */
import Close from '../../../../assets/manufacturer/Close.svg'

const PopUp = ({ onGetHandlePopup }) => {
  return (
    <div className="absolute">
      <div className="bg-[#FDFDFF] relative w-28 2xl:w-40 h-24 2xl:h-32 right-28 2xl:right-40 bottom-16 shadow-lg border-[1px] rounded-md">
        <button
          className="bg-[#FDFDFF] relative bottom-3 left-2 flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1px] shadow-lg"
          onClick={() => onGetHandlePopup()}
        >
          <img src={Close} />
        </button>
      </div>
    </div>
  )
}

export default PopUp
