import React from 'react'
import { Link } from 'react-router-dom'
/*       Icons       */
import InsuranceImage from '../../../assets/mainPage/InsuranceImage.svg'

const InsuranceCard = () => {
  return (
    <div className="h-72 flex justify-between px-8 py-10 shadow-sm border rounded-[10px]">
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start justify-between">
          <span className="text-[26px]">استخدم كارت التأمين</span>
          <span className="text-[16px] my-5">و اطلب ادويتك بسهوله الأن</span>
        </div>

        <div className="text-[20px] w-[205px] rounded-[30px] bg-[#0583F2] text-white py-2 mt-12 shadow-md text-center">
          <Link to="/prescription">أختر شركة التأمين</Link>
        </div>
      </div>

      <div className="flex items-center">
        <img draggable="false" src={InsuranceImage} alt="insuranceImage" />
      </div>
    </div>
  )
}

export default InsuranceCard
