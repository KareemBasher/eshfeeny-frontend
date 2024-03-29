import React from 'react'
/*      Icons      */
import Close from '../../../../assets/manufacturer/Close.svg'

const PopUp = ({ onGetHandlePopup, onGetManufacturerId, order, type, remove, delay, unDelay }) => {
  return (
    <div className="absolute">
      <div className="bg-[#FDFDFF] relative w-28 2xl:w-40 h-fit right-28 2xl:right-40 bottom-16 shadow-lg border-[1px] rounded-">
        <button
          className="bg-[#FDFDFF] relative bottom-3 left-2 flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1px] shadow-lg"
          onClick={() => onGetHandlePopup()}
        >
          <img src={Close} />
        </button>
        <div className="text-[14px] relative bottom-3">
          <button
            onClick={() => remove(onGetManufacturerId, order.key)}
            className="py-1 pr-2 hover:bg-[#EFF6FF] hover:border-r-2 hover:border-r-blue w-full text-right"
          >
            تأكيد الطلب
          </button>
          {type === 'current' && (
            <button
              className="py-1 pr-2 hover:bg-[#EFF6FF] hover:border-r-2 hover:border-r-blue w-full text-right"
              onClick={() => delay(onGetManufacturerId, order.key)}
            >
              تأجيل الطلب
            </button>
          )}
          {type === 'delayed' && (
            <button
              className="py-1 pr-2 hover:bg-[#EFF6FF] hover:border-r-2 hover:border-r-blue w-full text-right"
              onClick={() => unDelay(onGetManufacturerId, order.key)}
            >
              إضافة الى الطلبات الجديدة
            </button>
          )}
          <hr className="mx-2 my-1"></hr>
          <button
            onClick={() => remove()}
            className="py-1 pr-2 hover:bg-[#EFF6FF] hover:border-r-2 hover:border-r-blue w-full text-right text-[#EB1D36]"
          >
            حذف الطلب
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopUp
