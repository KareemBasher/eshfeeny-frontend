import React, { useState, useEffect } from 'react'
/*         component imports         */
import UserNavigation from '../../common/UserNavigation'
/*         image imports         */
import InsuranceCardImg from '../../../assets/insuranceCompanies/InsuranceCardImg.svg'
import { Link, useParams } from 'react-router-dom'
import { getInsuranceCards } from '../../../utils/usersAPI'
import { getInsuranceCompany } from '../../../utils/insuranceCompaniesAPI'

const InsuranceCardPage = ({ loggedInUser }) => {
  const [card, setCard] = useState('')
  const { companyId } = useParams('')
  const [company, setCompany] = useState('')

  useEffect(() => {
    const getCard = async () => {
      const result = await getInsuranceCards(loggedInUser)
      setCard(result)
      const companyData = await getInsuranceCompany(companyId)
      setCompany(companyData)
      console.log(result)
    }

    getCard()
  }, [])

  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>

      {card?.length ? (
        <div className=" mt-16 mr-24">
          <div className="text-right text-[26px]">
            <p>{company.name}</p>
          </div>

          <div className="flex flex-col items-center mt-20">
            <div className="mb-10">
              <img src={InsuranceCardImg} alt="InsuranceCardImg" />
            </div>

            <div className="text-[24px] mb-5">
              <p>لا يوجد كروت تامين </p>
            </div>

            <div className="text[20px] mb-5">
              <p>من فضلك قم بإضافة كارت تأمين لتتمكن من استخدام هذه الخدمة.</p>
            </div>

            <div className="text-[24px] border border-lightBlue rounded-[10px] py-2 px-10 text-lightBlue">
              <Link to={`/addCard/${companyId}`}>أضف كارت</Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default InsuranceCardPage
