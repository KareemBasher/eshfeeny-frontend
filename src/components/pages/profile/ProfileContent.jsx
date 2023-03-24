import React, { useState, useEffect } from 'react'
import PhoneInputContent from './PhoneInputContent'
import './Option.css'
import { updateUser } from '../../../utils/usersAPI'
import ArrowDown from '../../../assets/common/ArrowDown.svg'

const ProfileContent = ({ user, toggleModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [boxOpen, setBoxOpen] = useState(false)

  useEffect(() => {
    if (user.name && user.email) {
      setName(user.name)
      setEmail(user.email)
      setPhoneNumber(user?.phoneNumber)
      setGender(user?.gender)
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

  const handleSelectBox = () => {
    setBoxOpen(!boxOpen)
  }

  const handleSubmit = async () => {
    if (name.length !== 0 && email.length !== 0 && phoneNumber.length !== 0) {
      await updateUser(user._id, name, email, phoneNumber, gender)
    }
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
                className="w-96 h-14 shadow-sm border border-[#949495] focus:border-lightBlue rounded-[10px] px-4 outline-none"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
              ></input>
            </div>

            <div>
              <label className="text-2xl flex justify-start my-5">البريد الالكترونى</label>
              <input
                dir="ltr"
                className="w-96 h-14 shadow-sm border border-[#949495] focus:border-lightBlue rounded-[10px] px-4 outline-none"
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
                <div className="absolute left-0 py-4 mx-5 pointer-events-none">
                  <img
                    draggable="false"
                    className={`w-[20px] transition-all ${boxOpen && 'rotate-180'}`}
                    src={ArrowDown}
                    alt="arrowDown"
                  />
                </div>
                <div
                  className={`w-96 h-14 relative flex items-center shadow-sm border border-[#949495] px-4 rounded-[10px] ${
                    boxOpen && 'border-[#0597F2]'
                  }`}
                  onClick={() => handleSelectBox()}
                >
                  {gender ? gender : 'اختر'}

                  <div
                    className={`overflow-clip w-96 absolute -left-px top-[91%] flex flex-col items-start border border-t-0 border-[#949495] rounded-[10px] rounded-t-none ${
                      !boxOpen && 'hidden'
                    }`}
                  >
                    <div className="w-full py-4" />
                    <div
                      className="w-full bg-white text-right cursor-pointer hover:bg-[#eff6ff] px-5 py-3 rounded-t-[10px]"
                      onClick={() => setGender('ذكر')}
                    >
                      ذكر
                    </div>
                    <div
                      name="انثي"
                      className="w-full bg-white text-right cursor-pointer hover:bg-[#eff6ff] px-5 py-3 rounded-b-[10px]"
                      onClick={() => setGender('انثى')}
                    >
                      انثى
                    </div>
                  </div>
                </div>
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
