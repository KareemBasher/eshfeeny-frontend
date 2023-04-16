import React, { useState } from 'react'
/*    Components    */
import CredentialsInput from '../../common/CredentialsInput'
/*    icon    */
import CloseButton from '../../../assets/common/CloseButton.svg'

const PharmacyChangePassword = ({ toggleModal }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({})

  const handleOnChange = (value, name) => {
    if (name === 'oldPassword') setOldPassword(value)
    else if (name === 'newPassword') setNewPassword(value)
    else setConfirmPassword(value)
  }

  const checkNewPassword = () => {
    if (newPassword.length < 8) {
      setError((prev) => ({ ...prev, new: true }))
      return false
    } else if (newPassword !== confirmPassword) {
      setError((prev) => ({ ...prev, confirm: true }))
      return false
    } else {
      setError((prev) => ({ ...prev, new: false }))
      return true
    }
  }

  const handleSubmit = () => {
    checkNewPassword()
  }
  return (
    <div className="my-20">
      <div className="flex flex-wrap justify-center items-center">
        <div className="border rounded-[10px] flex flex-col justify-center py-5 px-5 w-[1040px]">
          <div className="my-5 grid-flow-col grid w-full">
            <p className="text-[28px] inline justify-self-end">تغيير كلمة المرور</p>
            <button
              onClick={() => toggleModal()}
              className="text-[28px] text-[#4D4D4D] justify-self-end"
            >
              <img draggable="false" src={CloseButton} alt="closeButton" />
            </button>
          </div>
          <div className="flex flex-col">
            <div className="w-[450px] my-5 mx-5 flex flex-col items-start">
              <p className="text-[20px] text-right my-5">كلمة المرور الحالية</p>
              <CredentialsInput
                name="oldPassword"
                type="password"
                placeHolder="ادخل كلمة المرور القديمة"
                value={oldPassword}
                handleInput={handleOnChange}
              />
              {error.old && (
                <span className="text-[#EB1D36] text-[14px]">كلمة المرور القديمة غير صحيحة</span>
              )}
            </div>

            <div className="flex flex-row justify-around">
              <div className="w-[450px]  flex flex-col items-start">
                <p className="text-[20px] text-right my-5">كلمة المرور الجديدة</p>
                <CredentialsInput
                  name="newPassword"
                  type="password"
                  placeHolder="ادخل كلمة المرور الجديدة"
                  value={newPassword}
                  handleInput={handleOnChange}
                />
                {error.new && (
                  <p className="text-[#EB1D36] text-[14px]">
                    من فضلك كلمة المرور يجيب الا تقل عن 8 احرف او ارقام
                  </p>
                )}
              </div>

              <div className="w-[450px] flex flex-col items-start">
                <p className="text-[20px] text-right my-5">تأكيد كلمة المرور الجديدة</p>
                <CredentialsInput
                  name="confirmPassword"
                  type="password"
                  placeHolder="تأكيد كلمة المرور الجديدة"
                  value={confirmPassword}
                  handleInput={handleOnChange}
                />
                {error.new && <p className="text-[#EB1D36] text-[14px]">كلمة السر غير متطابقة</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              disabled={oldPassword.length < 1}
              className="bg-lightBlue text-white disabled:bg-[#E5E5E5] rounded-[10px] disabled:text-[#8d8d8d] text-[22px] py-4 px-10 m-5 mt-12"
              onClick={() => handleSubmit()}
            >
              تغيير كلمة المرور
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PharmacyChangePassword
