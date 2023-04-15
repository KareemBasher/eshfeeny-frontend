import React from 'react'
/*    Components    */
import UserNavigation from '../common/UserNavigation'
import ImageDroper from '../common/ImageDroper'

const Prescription = ({ loggedInUser, logout }) => {
  return (
    <>
      <div>
        <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      </div>

      <div className="flex flex-col items-center w-full my-16">
        <div className="w-full flex justify-start px-20">
          <p className="text-right text-[26px]">الروشتة</p>
        </div>

        <div>
          <ImageDroper title="أضف صورة الروشتة" buttonTitle={'اعرف اقرب صيدلية'} />
        </div>
      </div>
    </>
  )
}

export default Prescription
