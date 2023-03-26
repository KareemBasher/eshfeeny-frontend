import React from 'react'
import CheckCircle from '../../../assets/insuranceCompanies/CheckCircle.svg'
const ConfrimRequest = () => {
  return (
    <div className="flex  justify-center items-center bg-white">
      <div className="border h-[450px] w-[450px] flex flex-col justify-center items-center rounded-[15px]">
        <div>
          <img className="w-[250px]" src={CheckCircle} alt="CheckCircle" />
        </div>
        <div>
          <p className="text-[24px] w-full mt-10">تم إرسال طلبك بنجاح</p>
        </div>
      </div>
    </div>
  )
}

export default ConfrimRequest
