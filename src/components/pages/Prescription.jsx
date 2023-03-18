import React from 'react'
/*    Components    */
import UserNavigation from '../common/UserNavigation'
import ImageDroper from '../common/ImageDroper'

const Prescription = ({ loggedInUser }) => {
  return (
    <>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>

      <div className="flex flex-col items-center w-full my-16">
        <div className="w-full flex justify-start px-20">
          <p className="text-right text-[26px]">الروشتة</p>
        </div>

        <div className="cursor-pointer mt-20">
          <ImageDroper title="أضف صورة الروشتة" />
        </div>

        <div>
          <button className="text-[24px] py-2 my-2 text-[#F5F5F5] w-[472px] bg-[#0583F2] rounded-[10px] flex justify-center">
            أعرف أقرب صيدلية
          </button>
        </div>
      </div>
    </>
  )
}

export default Prescription
