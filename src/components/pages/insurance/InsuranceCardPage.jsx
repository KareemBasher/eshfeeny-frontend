import React, { useState, useEffect } from 'react'
/*         component imports         */
import UserNavigation from '../../common/UserNavigation'
/*         image imports         */
import InsuranceCardImg from '../../../assets/insuranceCompanies/InsuranceCardImg.svg'
import Plus from '../../../assets/insuranceCompanies/Plus.svg'
import { Link, useParams } from 'react-router-dom'
import { getInsuranceCards } from '../../../utils/usersAPI'
import { getInsuranceCompany } from '../../../utils/insuranceCompaniesAPI'
import ConfrimRequest from './ConfrimRequest'

const InsuranceCardPage = ({ loggedInUser }) => {
  const [card, setCard] = useState([])
  const { companyId } = useParams('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState(false)

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

  const handelMessage = () => {
    setMessage(!message)
    setTimeout(() => {
      setMessage(false)
    }, 2000)
  }
  console.log(message)
  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>

      {!card?.length ? (
        <div className=" mt-16 mr-24">
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
      ) : (
        <>
          <div className="text-right mt-16 mr-24 text-[26px]">
            <p>أختر كارت</p>
          </div>

          <div className="relative mr-24">
            <div className=" flex justify-center">
              <div className="absolute">{message ? <ConfrimRequest /> : null}</div>
            </div>
            {card.map(({ nameOnCard, number }) => (
              <>
                <div
                  onClick={() => handelMessage()}
                  className="border rounded-[10px]  my-5 mt-10 w-[997px] hover:bg-[#FFE5CC]"
                >
                  <div className="flex px-5 py-5 items-center">
                    <div className="ml-5">
                      <img className="w-[60px] ml-10" src={company.logo} alt="" />
                    </div>
                    <div>
                      <div className="text-[20px] mb-1">{nameOnCard}</div>
                      <div className="text-[20px]">{number}</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-center ">
            <Link
              to={`/addCard/${companyId}`}
              className="flex text-[24px] text-lightBlue justify-center border rounded-[10px] border-lightBlue mt-10 px-10 py-2"
            >
              <img src={Plus} alt="plus" />
              <p className="mr-2 mx-3">أضف كارت جديد</p>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default InsuranceCardPage
