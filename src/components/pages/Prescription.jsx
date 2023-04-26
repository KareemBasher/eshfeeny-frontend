import React from 'react'
/*    Components    */
import UserNavigation from '../common/UserNavigation'
import ImageDroper from '../common/ImageDroper'
import PageEmpty from '../common/PageEmpty'
/*    Icons    */
import GuestLogo from '../../assets/common/AlternativeLogo.svg'

const Prescription = ({ loggedInUser, logout }) => {
  return (
    <>
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
        <div>
          <PageEmpty
            onGetTitle="الروشتة"
            onGetLogo={GuestLogo}
            onGetText1="أنت الان في وضع الضيف"
            onGetText2="الرجاء تسجيل الدخول للاستمتاع بالمميزات"
            onGetButtonText="تسجيل الدخول"
            onGetPath="./login/user"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full my-16">
          <div className="w-full flex justify-start px-20">
            <p className="text-right text-[26px]">الروشتة</p>
          </div>

          <div>
            <ImageDroper title="أضف صورة الروشتة" buttonTitle={'اعرف اقرب صيدلية'} />
          </div>
        </div>
      )}
    </>
  )
}

export default Prescription
