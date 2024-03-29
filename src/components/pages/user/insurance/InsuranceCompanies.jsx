import React, { useEffect, useState } from 'react'
/*         component imports         */
import UserNavigation from '../../../common/UserNavigation'
import PageEmpty from '../../../common/PageEmpty'
/*    Icons    */
import GuestLogo from '../../../../assets/common/AlternativeLogo.svg'
/*         Hooks        */
import { Link } from 'react-router-dom'
/*         API         */
import { getInsuranceCompanies } from '../../../../utils/insuranceCompaniesAPI'

const InsuranceCompanies = ({ loggedInUser, logout }) => {
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
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
        <div>
          <PageEmpty
            onGetTitle="أختر شركة التأمين"
            onGetLogo={GuestLogo}
            onGetText1="أنت الان في وضع الضيف"
            onGetText2="الرجاء تسجيل الدخول للاستمتاع بالمميزات"
            onGetButtonText="تسجيل الدخول"
            onGetPath="./login/user"
          />
        </div>
      ) : (
        <div className="flex flex-col text-right mr-32 2xl:mr-52">
          <div className="my-10">
            <p className="text-[26px]">أختر شركة التأمين</p>
          </div>

          <div className="flex ">
            {companies.map(({ _id, logo }) => (
              <Link key={_id} to={`/insuranceCompanies/${_id}/`}>
                <div className="w-[233px] h-[310px] hover:shadow-xl transition-all duration-300 shadow-sm border rounded-[10px] flex justify-center items-center ml-5">
                  <img draggable="false" className="w-3/4" src={logo} alt="inInsuranceCompanies" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default InsuranceCompanies
