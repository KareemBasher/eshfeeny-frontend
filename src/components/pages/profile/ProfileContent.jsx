import React, { useState, useEffect } from 'react'
import PhoneInputContent from './PhoneInputContent'
import './Option.css'
import { updateUser } from '../../../utils/usersAPI'
import ArrowUp from '../../../assets/common/ArrowUp.svg'
import ArrowDown from '../../../assets/common/ArrowDown.svg'

const ProfileContent = ({ user, toggleModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [arrow, setArrow] = useState(false)
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
  const handelArrow = () => {
    setArrow(!arrow)
  }

  return (
    <div>
      {/* /* title */}
      <div className="text-right text-[28px] m-10 mr-20">
        <p>الملف الشخصى</p>
      </div>
      {/* inputs */}

      <div className="flex  justify-center mb-20">
        <div className="flex flex-col justify-center border rounded-[10px] w-[904px] h-[500px]">
          <div className="flex flex-row justify-around ">
            <div className=" ">
              <label className=" text-2xl flex my-5 justify-start">الأسم</label>
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

          <div className="flex flex-row justify-around">
            <div className="flex flex-col justify-start my-10">
              <label className="text-2xl text-right my-5">رقم الهاتف</label>

              <PhoneInputContent phoneNumber={phoneNumber} handlePhoneChange={handlePhoneChange} />
            </div>
            <div className="flex flex-col justify-start my-10">
              <label className="text-2xl flex flex-start my-5">الجنس</label>
              <div className="relative">
                <div className="absolute left-0 my-5 mx-5 pointer-events-none">
                  {!arrow ? (
                    <img className="w-[20px]" src={ArrowDown} alt="arrowDown" />
                  ) : (
                    <img className="w-[20px]" src={ArrowUp} alt="arrowUp" />
                  )}
                </div>
                <select
                  onClick={handelArrow}
                  className="w-96 h-14 shadow-sm outline-none px-4 rounded-[10px] bg-[#F7F7F7]"
                  id="sex"
                >
                  <option selected disabled value="select">
                    اختر
                  </option>
                  <option value="ذكر">ذكر</option>
                  <option value="انثى">انثى</option>
                </select>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-row justify-center">
            <button
              className="text-[24px] text-white bg-blue rounded-[10px] m-5 w-[193px] h-[58px]"
              onClick={() => handleSubmit()}
            >
              حفظ التغيير
            </button>

            <div className="text-[24px] py-2 border-opacity-50 border border-black w-[193px] h-[58px] rounded-[10px] m-5">
              <button onClick={() => toggleModal()}>تغيير كلمة السر</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileContent
