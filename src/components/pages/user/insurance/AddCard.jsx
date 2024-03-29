/*    Hooks    */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
/*    components    */
import UserNavigation from '../../../common/UserNavigation'
import CredentialsInput from '../../../common/CredentialsInput'
import WideButton from '../../../common/WideButton'
/*    API   */
import { getInsuranceCompany } from '../../../../utils/insuranceCompaniesAPI'

/*    Icons    */
import InsuranceAddCard from '../../../../assets/insuranceCompanies/InsuranceAddCard.svg'
import GetInsuranceCardImg from './GetInsuranceCardImg'

const AddCard = ({ loggedInUser, logout }) => {
  const { id } = useParams()
  const [cardNumber, setCardNumber] = useState('')
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  const [company, setCompany] = useState('')
  const [nextPage, setNextPage] = useState(false)

  useEffect(() => {
    const getCompany = async () => {
      const result = await getInsuranceCompany(id)

      setCompany(result)
    }

    getCompany()
  }, [])

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

  const handleSubmit = async () => {
    const validCredentials = inputValidation()
    if (validCredentials) {
      setNextPage(true)
    }
  }

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Enter' && cardNumber.length > 0) {
        handleSubmit()
      }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [userName, cardNumber])

  return (
    <div>
      {!nextPage ? (
        <>
          <UserNavigation loggedInUser={loggedInUser} logout={logout} />
          <div className="flex">
            <div>
              <div className="w-[472px] flex flex-col text-right mr-32 2xl:mr-52">
                <div className="flex justify-start items-center my-10">
                  <p className="text-[26px] text-right ml-10">بيانات الكارت</p>
                  <img className="h-16" draggable="false" src={company.logo} alt="Company image" />
                </div>
                <div>
                  <div className="mb-10">
                    <p className="text-[24px] mb-5">رقم الكارت</p>
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
                    <p className="text-[24px] mb-5">أسم حامل الكارت</p>
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
                <div className="mt-8">
                  <WideButton
                    disabled={userName.length > 0 ? false : true}
                    content={'التالى'}
                    handleOnClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end pl-24 2xl:pl-44 mt-14">
              <img src={InsuranceAddCard} alt="" />
            </div>
          </div>
        </>
      ) : (
        <GetInsuranceCardImg
          loggedInUser={loggedInUser}
          companyId={id}
          cardName={company.name}
          userName={userName}
          cardNumber={cardNumber}
        />
      )}
    </div>
  )
}

export default AddCard
