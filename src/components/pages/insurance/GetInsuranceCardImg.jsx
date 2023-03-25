import React, { useState, useEffect } from 'react'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import WideButton from '../../common/WideButton'
/*    API    */
import { getInsuranceCompany } from '../../../utils/insuranceCompaniesAPI'
/*    Icons    */
import GetImage from '../../../assets/insuranceCompanies/GetImage.svg'
import Plus from '../../../assets/insuranceCompanies/Plus.svg'
import InsuranceAddCard from '../../../assets/insuranceCompanies/InsuranceAddCard.svg'

const GetInsuranceCardImg = ({ loggedInUser, companyId }) => {
  const [company, setCompany] = useState('')

  useEffect(() => {
    const getCompany = async () => {
      const result = await getInsuranceCompany(companyId)

      setCompany(result)
    }

    getCompany()
  }, [])

  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>

      <div className="flex justify-around mt-20">
        <div className="flex flex-col  ">
          <div className="text-right">
            <div className="flex items-center mb-10">
              <p className="text-[26px] text-right ml-10">{company.name}</p>
              <img className="h-16" draggable="false" src={company.logo} alt="Company image" />
            </div>
            <div className="text-[22px]">
              <p className="text-right">صورة الكارت</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="border-[3px] border-dashed border-lightBlue w-[700px] h-[372px] flex flex-col items-center rounded-[10px]">
              <div className="mt-16">
                <img src={GetImage} alt="" />
              </div>

              <div className="mt-6">
                <p className="text-[#0583F2] text-[22px]">
                  صورة كارت التأمين<span className="text-[#F99D1C]"> سارى</span> الصلاحية
                </p>
              </div>

              <button className="flex text-[24px] text-lightBlue justify-center border rounded-[10px] border-lightBlue mt-10 px-10 py-2">
                <img src={Plus} alt="" />
                <p className="mr-2">صورة الكارت</p>
              </button>
            </div>
          </div>

          <div className="mt-10">
            <WideButton
              //   disabled={userName.length > 0 ? false : true}
              content={'حفظ الكارت'}
              //   handleOnClick={handleSubmit}
            />
          </div>
        </div>

        <div className="">
          <img src={InsuranceAddCard} alt="" />
        </div>
      </div>
    </div>
  )
}

export default GetInsuranceCardImg
