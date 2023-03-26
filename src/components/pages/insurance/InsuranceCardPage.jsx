import React, { useState, useEffect } from 'react'
/*         component imports         */
import UserNavigation from '../../common/UserNavigation'
import ConfrimRequest from './ConfrimRequest'
/*         image imports         */
import InsuranceCardImg from '../../../assets/insuranceCompanies/InsuranceCardImg.svg'
import Plus from '../../../assets/insuranceCompanies/Plus.svg'
/*        HOOKS         */
import { Link, useParams } from 'react-router-dom'
/*         API       */
import { getInsuranceCards } from '../../../utils/usersAPI'
import { getInsuranceCompany } from '../../../utils/insuranceCompaniesAPI'

const InsuranceCardPage = ({ loggedInUser }) => {
  const [card, setCard] = useState([])
  const { companyId } = useParams('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState(false)
  const [clickedDiv, setClickedDiv] = useState('')

  useEffect(() => {
    const getCard = async () => {
      const result = await getInsuranceCards(loggedInUser)
      setCard(result)
      const companyData = await getInsuranceCompany(companyId)
      setCompany(companyData)
    }

    setClickedDiv('')

    getCard()
  }, [])

  const handelMessage = (number) => {
    setMessage(!message)
    setClickedDiv(number)
    setTimeout(() => {
      setMessage(false)
    }, 2000)
  }

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
              <div key={number}>
                <div
                  onClick={() => handelMessage(number)}
                  className={`border rounded-[10px]  my-5 mt-10 w-[997px] ${
                    clickedDiv === number && 'bg-[#FFE5CC] border-[#F99D1C]'
                  }`}
                >
                  <div className="flex rounded-[10px] justify-between items-center">
                    <div className="flex px-5 py-5 items-center">
                      <div className="ml-5">
                        <img
                          draggable="false"
                          className="w-[60px] ml-10"
                          src={company.logo}
                          alt="companyLogo"
                        />
                      </div>

                      <div>
                        <div className="text-[20px] mb-1">{nameOnCard}</div>
                        <div className="text-[20px]">{number}</div>
                      </div>
                    </div>

                    <div
                      className={`border border-[#F99D1C] rounded-full w-7 h-7 ml-10 justify-center items-center ${
                        clickedDiv === number ? 'flex' : 'hidden'
                      }`}
                    >
                      <p
                        className={`rounded-full w-4 h-4 ${
                          clickedDiv === number && 'bg-[#F99D1C]'
                        }`}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to={`/addCard/${companyId}`}
              className="flex text-[24px] text-lightBlue justify-center border rounded-[10px] border-lightBlue mt-10 px-8 py-2"
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
