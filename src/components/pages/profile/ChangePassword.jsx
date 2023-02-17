import React, { useState } from 'react'
import CredentialsInput from '../../common/CredentialsInput'
import CloseButton from '../../../assets/common/CloseButton.svg'

const changePassword = ({ toggleModal }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [NewPassword, setNewPassword] = useState('')

  const oldPasswordHandler = (e) => {
    setOldPassword(e.target.value)
  }
  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value)
  }

  return (
    <div className="my-20">
      <div className="flex justify-center items-center">
        <div className="border rounded-[10px] flex flex-col justify-center py-10 px-16">
          <div className="my-5 grid-flow-col grid">
            <p className="text-[28px] inline justify-self-end">تغيير كلمة المرور</p>
            <button
              onClick={() => toggleModal()}
              className="text-[28px] text-[#4D4D4D] justify-self-end"
            >
              <img src={CloseButton} alt="" />
            </button>
          </div>

          <div className="flex flex-col">
            <div className="w-[470px] my-5">
              <p className="text-[20px] text-right my-2">كلمة المرور الحالية</p>
              <CredentialsInput
                name="password"
                type="password"
                placeHolder="ادخل كلمة المرور القديمة"
                value={oldPassword}
                handleInput={oldPasswordHandler}
              />
            </div>

            <div className="w-[470px] my-5">
              <p className="text-[20px] text-right my-2">كلمة المرور الجديدة</p>
              <CredentialsInput
                name="password"
                type="password"
                placeHolder="ادخل كلمة المرور الجديدة"
                value={NewPassword}
                handleInput={newPasswordHandler}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue rounded-[10px] text-white text-[22px] p-4">
              تغيير كلمة المرور
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default changePassword
