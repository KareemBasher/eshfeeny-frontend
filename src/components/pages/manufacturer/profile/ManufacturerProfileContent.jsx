import React, { useState, useEffect } from 'react'
/*    Components    */
import PhoneInputContent from '../../user/profile/PhoneInputContent'
import { updateManufacturer } from '../../../../utils/manufacturersAPI'

const ManufacturerProfileContent = ({ user, toggleModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (user.name && user.email) {
      setName(user.name)
      setEmail(user.email)
      setPhoneNumber(user?.phoneNumber)
      setAddress(user?.address)
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

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleSubmit = async () => {
    if (name.length !== 0 && email.length !== 0) {
      await updateManufacturer(user._id, name, email, phoneNumber, address)
    }
  }

  return (
    <div className="flex flex-col mx-64 mt-2">
      {/* /* title */}
      <div className="text-right text-[28px] mt-10">
        <p>الملف الشخصى</p>
      </div>
      {/* inputs */}

      <div className="flex  justify-start  mx-5 mb-20">
        <div className="flex flex-col justify-center  w-[904px] h-[500px]">
          <div className="flex flex-row justify-around ">
            <div className="mx-10">
              <label className=" text-2xl flex my-5 justify-start">الأسم</label>
              <input
                className="w-[472px] h-14 shadow-sm border border-[#949495] focus:border-lightBlue rounded-[10px] px-4 outline-none"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
              ></input>
            </div>

            <div>
              <label className="text-2xl flex justify-start my-5">البريد الالكترونى</label>
              <input
                dir="ltr"
                className="w-[472px] h-14 shadow-sm border border-[#949495] focus:border-lightBlue rounded-[10px] px-4 outline-none"
                type="text"
                value={email}
                onChange={(e) => handleEmailChange(e)}
              ></input>
            </div>
          </div>

          <div className="flex flex-row justify-around">
            <div className="flex flex-col justify-start my-10 mx-10">
              <label className="text-2xl text-right my-5">رقم الهاتف</label>
              <PhoneInputContent phoneNumber={phoneNumber} handlePhoneChange={handlePhoneChange} />
            </div>

            <div className="flex flex-col justify-start my-10">
              <label className="text-2xl flex flex-start my-5">العنوان</label>
              <div className="relative">
                <input
                  className="w-[472px] h-14 shadow-sm border border-[#949495] focus:border-lightBlue rounded-[10px] px-4 outline-none"
                  type="text"
                  value={address}
                  onChange={(e) => handleAddressChange(e)}
                ></input>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-row justify-center">
            <button
              className="text-[24px] text-white bg-blue rounded-[10px] m-5 w-[223px] h-[58px]"
              onClick={() => handleSubmit()}
            >
              حفظ التغيير
            </button>

            <div className="text-[24px] py-2 border-opacity-50 border border-black w-[223px] h-[58px] rounded-[10px] m-5">
              <button onClick={() => toggleModal()}>تغيير كلمة السر</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManufacturerProfileContent
