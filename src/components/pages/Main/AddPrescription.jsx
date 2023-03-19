import React from 'react'
import { Link } from 'react-router-dom'
/*       Icons       */
import PrescriptionImage from '../../../assets/mainPage/PrescriptionImage.svg'

const AddPrescription = () => {
  return (
    <div className="flex w-full h-[253px] border rounded-[10px] shadow-md">
      <div className="flex flex-col text-right m-5">
        <div className="mr-5">
          <p className="text-[26px] my-5">أضف الروشتة</p>
          <p className="text-[16px] my-5 break-keep">
            و أعرف أقرب صيدلية من موقعك متوفر فيها كل الدواء
          </p>
        </div>

        <div className="text-[22px] w-[205px] rounded-[30px] bg-[#0583F2] text-white py-2 my-7 mx-5 text-center">
          <Link to="/prescription">أضف صورة الروشتة</Link>
        </div>
      </div>

      <div className="flex  ">
        <img className="w-[129px]" draggable="false" src={PrescriptionImage} alt="insuranceImage" />
      </div>
    </div>
  )
}

export default AddPrescription
