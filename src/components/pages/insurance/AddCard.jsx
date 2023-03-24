import React, { useState } from 'react'
import UserNavigation from '../../common/UserNavigation'
import CredentialsInput from '../../common/CredentialsInput'
import WideButton from '../../common/WideButton'
import InsuranceAddCard from '../../../assets/insuranceCompanies/InsuranceAddCard.svg'

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')

  const handleInput = (value, name) => {
    if (name === 'cardNumber') setCardNumber(value)
    else if (name === 'userName') setUserName(value)
  }
  const inputValidation = () => {
    const errorObj = {}
    if (cardNumber.length === 0) errorObj.cardNumberLength = true
    else errorObj.cardNumberLength = false

    if (userName.length === 0) errorObj.userNameLength = true
    else errorObj.userNameLength = false
    setError(errorObj)
    if (errorObj.cardNumberLength || errorObj.userNameLength) return false
    else return true
  }
  const handleSubmit = () => {
    inputValidation()
  }
  return (
    <div>
      <div>
        <UserNavigation />
      </div>

      <div className="flex justify-around mt-20">
        <div>
          <div>
            <div>{/* title */}</div>
            <div>
              <p>رقم الكارت</p>
              <CredentialsInput
                name={'cardNumber'}
                placeHolder={'أدخل رقم الكارت'}
                type={'text'}
                value={cardNumber}
                handleInput={handleInput}
              />
              {error.cardNumberLength && (
                <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل رقم الكارت</span>
              )}
            </div>
            <div>
              <p>أسم حامل الكارت</p>
              <CredentialsInput
                name={'userName'}
                placeHolder={'أدخل الأسم'}
                type={'text'}
                value={userName}
                handleInput={handleInput}
              />
              {error.userNameLength && (
                <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل اسم</span>
              )}
            </div>
          </div>
          <div>
            <WideButton
              // disabled={checkPassword.length > 0 ? false : true}
              content={'تأكيد'}
              handleOnClick={handleSubmit}
            />
          </div>
        </div>
        <div>
          <img src={InsuranceAddCard} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AddCard
