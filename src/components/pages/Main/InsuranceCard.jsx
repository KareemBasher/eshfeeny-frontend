import React from 'react'
import InsuranceImage from '../../../assets/MainPage/InsuranceImage.svg'

const InsuranceCard = () => {
  return (
    <div className="flex w-[570px] border rounded-[10px] shadow-md">
      <div className="flex flex-col text-right m-10">
        <p className="text-[26px]">استخدم كارت التأمين</p>
        <p className="text-[16px] my-5">و اطلب ادويتك بسهوله الأن </p>
        <button className="text-[22px] w-[184px] rounded-[30px] bg-[#0583F2] text-white py-2 my-7">
          أختر شركة التأمين
        </button>
      </div>
      <div>
        <img src={InsuranceImage} alt="insuranceImage" />
      </div>
    </div>
  )
}

export default InsuranceCard
