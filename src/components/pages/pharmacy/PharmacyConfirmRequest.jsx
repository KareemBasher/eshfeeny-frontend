import React from 'react'
import PharmacyOrder from '../../../assets/common/PharmacyOrder.svg'
const PharmacyConfirmRequest = () => {
  return (
    <div className="flex  justify-center items-center bg-white">
      <div className="border h-[450px] w-[450px] flex flex-col justify-center items-center rounded-[15px] shadow-md">
        <div>
          <img className="w-[250px]" src={PharmacyOrder} alt="CheckCircle" />
        </div>
        <div>
          <p className="text-[24px] w-full mt-10">تم إرسال طلبك بنجاح</p>
        </div>
      </div>
    </div>
  )
}

export default PharmacyConfirmRequest
