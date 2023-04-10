import React from 'react'
import { Link } from 'react-router-dom'
/*       Icons       */
import PrescriptionImage from '../../../assets/mainPage/PrescriptionImage.svg'

const AddPrescription = () => {
  return (
    <div className="h-72 flex justify-between px-8 py-10 shadow-sm border rounded-[10px]">
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start justify-between">
          <span className="text-[26px]">أضف الروشتة</span>
          <span className="text-[16px] xl:text-right my-5">
            و أعرف أقرب صيدلية من موقعك متوفر فيها كل الدواء
          </span>
        </div>

        <div className="text-[20px] w-[205px] rounded-[30px] bg-[#0583F2] text-white py-2 mt-12 shadow-md text-center">
          <Link to="/prescription">أضف صورة الروشتة</Link>
        </div>
      </div>

      <div className="flex items-center">
        <img className="h-[160px]" draggable="false" src={PrescriptionImage} alt="Prescription" />
      </div>
    </div>
  )
}

export default AddPrescription
