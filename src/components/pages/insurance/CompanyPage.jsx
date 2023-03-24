import React, { useState } from 'react'
/*         Hooks        */
import { Link, useParams } from 'react-router-dom'
/*         component imports         */
import UserNavigation from '../../common/UserNavigation'
/*         images imports         */
import AddPrescriptionImage from '../../../assets/insuranceCompanies/AddPrescriptionImage.png'
import MonthlyMedicine from '../../../assets/insuranceCompanies/MonthlyMedicine.png'

const CompanyPage = ({ loggedInUser }) => {
  const { company,url } = useParams()
  const [card, setCard] = useState('')
  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>

      <div className="flex flex-col mt-16 mr-24">
        <div className="mb-16">
          <p className="text-[26px] text-right">{company}</p>
        </div>

        <div className="flex">
          {card.length ? (
            <div className="w-[608px] h-[348px] border rounded-[15px] flex flex-col ml-10">
              <Link>
                <img draggable="false" className="m-2" src={MonthlyMedicine} alt="" />
                <p className="mt-[75px] text-[26px]">اطلب الأدوية الشهرية</p>
              </Link>
            </div>
          ) : (
            <div className="w-[608px] h-[348px] border rounded-[15px] flex flex-col ml-10">
              <Link to={`/insuranceCards/${company}`}>
                <img draggable="false" className="m-2" src={MonthlyMedicine} alt="" />
                <p className="mt-[75px] text-[26px]">اطلب الأدوية الشهرية</p>
              </Link>
            </div>
          )}
          {card.length ? (
            <div className="w-[608px] h-[348px] border rounded-[15px] flex flex-col">
              <Link>
                <img draggable="false" className="m-2" src={AddPrescriptionImage} alt="" />
                <p className="mt-16 text-[26px]">أضف صورة الروشتة</p>
              </Link>
            </div>
          ) : (
            <div className="w-[608px] h-[348px] border rounded-[15px] flex flex-col">
              <Link to={`/insuranceCards/${company}`}>
                <img draggable="false" className="m-2" src={AddPrescriptionImage} alt="" />
                <p className="mt-16 text-[26px]">أضف صورة الروشتة</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CompanyPage
