import React, { useEffect, useState } from 'react'
/*         Hooks        */
import { Link, useParams } from 'react-router-dom'
/*         component imports         */
import UserNavigation from '../../common/UserNavigation'
/*         images imports         */
import AddPrescriptionImage from '../../../assets/insuranceCompanies/AddPrescriptionImage.png'
import MonthlyMedicine from '../../../assets/insuranceCompanies/MonthlyMedicine.png'
/*         API         */
import { getInsuranceCompany } from '../../../utils/insuranceCompaniesAPI'

const CompanyPage = ({ loggedInUser, logout }) => {
  const [company, setCompany] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const getCompany = async () => {
      const result = await getInsuranceCompany(id)
      setCompany(result)
    }

    getCompany()
  }, [])

  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="flex flex-col mt-16 mr-32 2xl:mr-52">
        <div className="mb-16 flex justify-start items-center">
          <p className="text-[26px] text-right ml-10">{company.name}</p>
          <img className="h-16" draggable="false" src={company.logo} alt="Company image" />
        </div>

        <div className="flex">
          <div className="w-[608px] h-[348px] hover:shadow-xl transition-all duration-300 shadow-sm border rounded-[15px] flex flex-col ml-10">
            <Link to={`/insuranceCards/${company._id}`}>
              <img draggable="false" className="m-2" src={MonthlyMedicine} alt="" />
              <p className="mt-[75px] text-[26px]">اطلب الأدوية الشهرية</p>
            </Link>
          </div>
          <div className="w-[608px] h-[348px] hover:shadow-xl transition-all duration-300 shadow-sm border rounded-[15px] flex flex-col">
            <Link>
              <img draggable="false" className="m-2" src={AddPrescriptionImage} alt="" />
              <p className="mt-16 text-[26px]">أضف صورة الروشتة</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyPage
