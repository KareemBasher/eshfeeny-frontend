import React from 'react'
/*      Hooks    */
import { useEffect, useState } from 'react'
/*      Components     */
import PharmacyNavigation from '../../common/PharmacyNavigation'
import CredentialsInput from '../../common/CredentialsInput'
import WideButton from '../../common/WideButton'
import PharmacyConfirmRequest from './PharmacyConfirmRequest'
/*      icons     */
import ConfirmPayment from '../../../assets/common/ConfirmPayment.svg'
import Warning from '../../../assets/common/Warning.svg'
/*      API     */
import { getCart } from '../../../utils/pharmaciesAPI'

const PharmacyConfirmOrder = ({ loggedInUser, logout }) => {
  const [total, setTotal] = useState()
  const [check, setCheck] = useState(false)
  const [pharmacyName, setPharmacyName] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')
  const [reqeust, setRequest] = useState(false)

  useEffect(() => {
    const getTotal = async () => {
      const result = await getCart(loggedInUser)
      setTotal(result?.total ? result.total : [])
    }
    getTotal()
  })
  const onCheckHandler = () => {
    setCheck(!check)
  }

  const handleInput = (value, name) => {
    if (name === 'pharmacyName') setPharmacyName(value)
    else if (name === 'number') setNumber(value)
    else if (name === 'address') setAddress(value)
  }

  const inputValidation = () => {
    const errorObj = {}
    if (pharmacyName.length === 0) errorObj.pharmacyNameLength = true
    else errorObj.pharmacyNameLength = false

    if (number.length === 0) errorObj.numberLength = true
    else errorObj.numberLength = false

    if (address.length === 0) errorObj.addressLength = true
    else errorObj.addressLength = false
    setError(errorObj)
    if (errorObj.pharmacyNameLength || errorObj.numberLength || errorObj.addressLength)
      errorObj.allData = true
    else return false
  }

  const handleSubmit = () => {
    inputValidation()
    setRequest(!reqeust)
    setTimeout(() => {
      setRequest(false)
    }, 2000)
  }

  return (
    <div>
      <div>
        <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      </div>

      <div className="flex justify-center items-center mr-20 relative">
        <div>
          <div className="flex flex-col items-start text-right mt-10 ">
            <p className="text-[26px] mb-10">الدفع بواسطة</p>
            <div className="relative flex items-center justify-end">
              <button
                onClick={() => onCheckHandler()}
                className={`text-[20px]  w-[1147px] border rounded-[10px] text-right p-3 ${
                  check && `border-[#0583F2] text-blue`
                }`}
              >
                الدفع عند التسليم
              </button>
              {check && (
                <img
                  className="absolute w-[31px] flex items-end ml-5"
                  src={ConfirmPayment}
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="flex flex-col text-right mt-5">
            <p className="text-[26px] mb-5">أدخل البيانات</p>
            <div className="w-[1147px] border flex justify-start rounded-[10px] h-[521px] text-right">
              <div className=" flex flex-col justify-evenly text-right h-full pr-10">
                <div className="w-[472px]">
                  <p className="text-[24px] mb-5">أسم الصيدلية</p>
                  <CredentialsInput
                    name={'pharmacyName'}
                    placeHolder={'أدخل اسم الصيدلية'}
                    type={'text'}
                    value={pharmacyName}
                    handleInput={handleInput}
                  />
                  {error.pharmacyNameLength && (
                    <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل اسم الصيدلية</span>
                  )}
                </div>
                <div className="w-[472px]">
                  <p className="text-[24px] mb-5">رقم الهاتف</p>
                  <CredentialsInput
                    name={'number'}
                    placeHolder={'أدخل رقم الهاتف'}
                    type={'text'}
                    value={number}
                    handleInput={handleInput}
                  />
                  {error.numberLength && (
                    <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل رقم الهاتف</span>
                  )}
                </div>
                <div className="w-[472px]">
                  <p className="text-[24px] mb-5">العنوان</p>
                  <CredentialsInput
                    name={'address'}
                    placeHolder={'أدخل العنوان'}
                    type={'text'}
                    value={address}
                    handleInput={handleInput}
                  />
                  {error.addressLength && (
                    <span className="text-[#EB1D36] text-[14px]">من فضلك ادخل العنوان</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-[333px] flex flex-col justify-center  border rounded-[10px] p-5 mr-5 mb-[350px]">
            <div className="flex text-[26px] justify-evenly">
              <p>الاجمالي</p>
              <p className="text-[#0583F2]">{total} جنيه</p>
            </div>
            <div className="pt-10 flex flex-col">
              {error.allData && (
                <div className="flex">
                  <img src={Warning} alt="" />
                  <span className="text-[#EB1D36] text-[14px]">
                    يرجي إدخال كافة البيانات لتتمكن من تأكيد الطلب
                  </span>
                </div>
              )}

              <div>
                <WideButton
                  content="إتمام الطلب"
                  handleOnClick={handleSubmit}
                  disabled={!address || !number || !pharmacyName}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute">
          {reqeust && (
            <div>
              <PharmacyConfirmRequest />
            </div>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default PharmacyConfirmOrder
