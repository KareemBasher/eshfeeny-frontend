import React from 'react'
import UserNavigation from './UserNavigation'
import Error from '../../assets/common/Error.svg'
const ErrorPage = ({ loggedInUser }) => {
  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>
      <div className="flex flex-col items-center my-20">
        <div>
          <p className="text-[32px] mb-5">حدث خطأ</p>
          <p className="text-[28px] mb-10">نعتذر لعدم وجود الصفحة</p>
        </div>
        <div>
          <img draggable="false" src={Error} alt="404 Error Message" />
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
