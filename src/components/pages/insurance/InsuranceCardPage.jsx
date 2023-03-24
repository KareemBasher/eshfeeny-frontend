import React, { useState } from 'react'
/*         component imports         */
import UserNavigation from '../../common/UserNavigation'
/*         image imports         */
import InsuranceCardImg from '../../../assets/insuranceCompanies/InsuranceCardImg.svg'
import { Link, useParams } from 'react-router-dom'

const InsuranceCardPage = ({ loggedInUser }) => {
  const [card, setCard] = useState('')
  const { company } = useParams()
  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>

      {!card.length ? (
        <div className=" mt-16 mr-24">
          <div className="text-right text-[26px]">
            <p>{company}</p>
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
              <Link to="/addCard">أضف كارت</Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default InsuranceCardPage
