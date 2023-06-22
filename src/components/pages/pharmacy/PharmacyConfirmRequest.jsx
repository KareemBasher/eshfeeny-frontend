import React from 'react'
import PharmacyOrder from '../../../assets/common/PharmacyOrder.svg'

const PharmacyConfirmRequest = () => {
  return (
    <div className="h-[450px] w-[450px] border bg-white flex flex-col justify-center items-center rounded-[15px] shadow-md absolute inset-0 m-auto">
      <div>
        <img draggable="false" className="w-[250px]" src={PharmacyOrder} alt="CheckCircle" />
      </div>
      <div>
        <p className="text-[24px] w-full mt-10">تم إرسال طلبك بنجاح</p>
      </div>
    </div>
  )
}

export default PharmacyConfirmRequest
