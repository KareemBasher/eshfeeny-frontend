import React, { useState } from 'react'
import UserNavigation from '../../common/UserNavigation'
import InsuranceCardImg from '../../../assets/insuranceCompanies/InsuranceCardImg.svg'

const InsuranceCardPage = ({ loggedInUser }) => {
  const [card, setCard] = useState('')
  return (
    <>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>
      {!card.length ? (
        <div className=" mt-16 mr-24">
          <div className="text-right text-[26px]">
            <p>إيجي كير</p>
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
              <button>أضف كارت</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default InsuranceCardPage
