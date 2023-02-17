import React from 'react'
import PhoneInputContent from './PhoneInputContent'

const ProfileContent = ({ toggleModal }) => {
  return (
    <div className=" ">
      {/* /* title */}
      <div className=" text-right text-[28px] m-10 mr-20">
        <p>الملف الشخصى</p>
      </div>
      {/* inputs */}

      <div className="flex justify-center  ">
        <div className="flex flex-col  justify-center border-2 rounded-[10px] w-[904px] h-[500px]">
          <div className="flex flex-row  justify-around ">
            <div className=" ">
              <label className=" text-2xl flex my-5 justify-start" htmlFor="">
                الأسم
              </label>
              <input
                className="w-96 h-14 shadow-sm rounded-[10px] px-4 outline-none bg-[#F7F7F7]"
                type="text"
              ></input>
            </div>

            <div className="">
              <label className=" text-2xl flex justify-start  my-5" htmlFor="">
                البريد الالكترونى
              </label>
              <input
                className="w-96  h-14 shadow-sm outline-none px-4 rounded-[10px] bg-[#F7F7F7]"
                type="text "
              ></input>
            </div>
          </div>

          <div className="flex flex-col justify-start m-10">
            <label className="text-2xl text-right my-5">رقم الهاتف</label>

            <PhoneInputContent />
          </div>
          {/* buttons */}
          <div className="flex flex-row  justify-center">
            <button className="text-[24px] text-white bg-blue rounded-[10px] m-5 w-[193px] h-[58px]">
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
