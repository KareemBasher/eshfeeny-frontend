import React, { useEffect, useState } from 'react'
/*         component imports         */
import UserNavigation from '../../common/UserNavigation'
import Arrow from '../../../assets/common/Arrow.svg'
/*         Hooks        */
import { Link } from 'react-router-dom'
/*         API         */
import { getInsuranceCompanies } from '../../../utils/insuranceCompaniesAPI'

const InsuranceCompanies = ({ loggedInUser }) => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const getCompanies = async () => {
      const result = await getInsuranceCompanies()
      setCompanies(result)
    }

    getCompanies()
  }, [])

  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>
      <div className="flex flex-col text-right mt-16 mr-24">
        <div>
          <div className="flex justify-start mb-10">
            <Link to="/home" className="hover:underline text-lightBlue">
              الرئيسية
            </Link>

            <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
            <p className="text-[#1F1F1F]">كارت التامين</p>
          </div>
        </div>
        <div className="mb-14">
          <p className="text-[26px]">أختر شركة التأمين</p>
        </div>

        <div className="flex ">
          {companies.map(({ _id, name, logo }) => (
            <Link key={_id} to={`/insuranceCompanies/${name}/`}>
              <div className="w-[233px] h-[310px] hover:shadow-xl transition-all duration-300 shadow-sm border rounded-[10px] flex justify-center items-center ml-5">
                <img draggable="false" className="w-3/4" src={logo} alt="inInsuranceCompanies" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InsuranceCompanies
