import React, { useState } from 'react'
import CredentialsInput from '../../common/CredentialsInput'
import CloseButton from '../../../assets/common/CloseButton.svg'
import CheckCircle from '../../../assets/common/CheckCircle.svg'
import { updatePassword, verifyLogin } from '../../../utils/usersAPI'

const changePassword = ({ toggleModal, user }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordChanged, setPasswordChanged] = useState(false)
  const [error, setError] = useState({})

  const handleOnChange = (value, name) => {
    if (name === 'oldPassword') setOldPassword(value)
    else if (name === 'newPassword') setNewPassword(value)
    else setConfirmPassword(value)
  }

  const checkOldPassword = async () => {
    const result = await verifyLogin(user.email, oldPassword)
    if (result) {
      setError((prev) => ({ ...prev, old: false }))
      return true
    } else {
      setError((prev) => ({ ...prev, old: true }))
      return false
    }
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

  const handleSubmit = async () => {
    const oldPasswordResult = await checkOldPassword()
    if (checkNewPassword() && oldPasswordResult) {
      const result = await updatePassword(user._id, newPassword)
      if (result?.modifiedCount === 1) {
        setPasswordChanged(true)
        setTimeout(() => {
          toggleModal()
        }, 2000)
      }
    }
  }

  return (
    <div className="my-20">
      <div className="flex flex-wrap justify-center items-center">
        <div className="border rounded-[10px] flex flex-col justify-center py-5 px-5 w-[1040px]">
          {passwordChanged ? (
            <div className="flex flex-col justify-center items-center m-10">
              <img src={CheckCircle} alt="Password changed" />
              <p className="text-[24px]">تم تغيير كلمة المرور الخاصة بك بنجاح</p>
            </div>
          ) : (
            <>
              <div className="my-5 grid-flow-col grid w-full">
                <p className="text-[28px] inline justify-self-end">تغيير كلمة المرور</p>
                <button
                  onClick={() => toggleModal()}
                  className="text-[28px] text-[#4D4D4D] justify-self-end"
                >
                  <img src={CloseButton} alt="closeButton" />
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
                    <span className="text-[#EB1D36] text-[14px]">
                      كلمة المرور القديمة غير صحيحة
                    </span>
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
                    {error.new && (
                      <p className="text-[#EB1D36] text-[14px]">كلمة السر غير متطابقة</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  disabled={oldPassword.length < 1}
                  className="bg-lightBlue text-white disabled:bg-[#E5E5E5] rounded-[10px] disabled:text-[#676767] text-[22px] py-4 px-10 m-5"
                  onClick={() => handleSubmit()}
                >
                  تغيير كلمة المرور
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default changePassword
