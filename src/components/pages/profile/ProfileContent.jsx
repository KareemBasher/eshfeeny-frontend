import React, { useState, useEffect } from 'react'
import PhoneInputContent from './PhoneInputContent'
import { updateUser } from '../../../utils/usersAPI'

const ProfileContent = ({ user, toggleModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    if (user.name && user.email) {
      setName(user.name)
      setEmail(user.email)
      setPhoneNumber(user?.phoneNumber)
    }
  }, [user])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = (phone) => {
    setPhoneNumber(phone)
  }

  const handleSubmit = async () => {
    if (name.length !== 0 && email.length !== 0 && phoneNumber.length !== 0) {
      await updateUser(user._id, name, email, phoneNumber)
    }
  }

  return (
    <div>
      {/* /* title */}
      <div className="text-right text-[28px] m-10 mr-20">
        <p>الملف الشخصى</p>
      </div>
      {/* inputs */}

      <div className="flex justify-center mb-20">
        <div className="flex flex-col justify-center border border-black rounded-[10px] w-[904px] h-[500px]">
          <div className="flex flex-row  justify-around ">
            <div className=" ">
              <label className=" text-2xl flex my-5 justify-start" htmlFor="">
                الأسم
              </label>
              <input
                className="w-96 h-14 shadow-sm rounded-[10px] px-4 outline-none bg-[#F7F7F7]"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
              ></input>
            </div>

            <div>
              <label className="text-2xl flex justify-start my-5">البريد الالكترونى</label>
              <input
                className="w-96 h-14 shadow-sm outline-none px-4 rounded-[10px] bg-[#F7F7F7]"
                type="text"
                value={email}
                onChange={(e) => handleEmailChange(e)}
              ></input>
            </div>
          </div>

          <div className="flex flex-col justify-start m-10">
            <label className="text-2xl text-right my-5">رقم الهاتف</label>

            <PhoneInputContent phoneNumber={phoneNumber} handlePhoneChange={handlePhoneChange} />
          </div>
          {/* buttons */}
          <div className="flex flex-row justify-center">
            <button
              className="text-[24px] text-white bg-blue rounded-[10px] m-5 w-[193px] h-[58px]"
              onClick={() => handleSubmit()}
            >
              حفظ التغيير
            </button>

            <div className="text-[24px] py-2 text-lightBlue border-opacity-50 border border-lightBlue w-[193px] h-[58px] rounded-[10px] m-5 ">
              <button onClick={() => toggleModal()}>تغيير كلمة السر</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileContent
