import React, { useEffect, useState } from 'react'
import Person from '../../assets/common/Person.svg'
import Logout from '../../assets/common/Logout.svg'
import ArrowDown from '../../assets/common/ArrowDown.svg'
import { getUser } from '../../utils/usersAPI'
import { Link } from 'react-router-dom'

const UserProfileRoundButton = ({ loggedInUser, logout }) => {
  const [userName, setUserName] = useState(''
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (loggedInUser !== '6439bd5e1c12d023717e2be5') {
      const getUserData = async () => {
        const data = await getUser(loggedInUser)
        const firstName = data.name.split(' ')[0]
        setUserName(firstName)
      }

      getUserData()
    } else setUserName(null)
  }, [loggedInUser])

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex mr-5 min-w-fit items-center relative" onClick={() => handleShowMenu()}>
      <div className="flex items-center">
        <div className="flex bg-[#F7F7F7] justify-center rounded-full shadow-md w-10 h-10 relative cursor-pointer">
          <img className="self-center" draggable="false" src={Person} alt="RadialButton" />
        </div>

        <div>
          <p className="text-[20px] px-3 cursor-pointer">{userName ? userName : 'تسجيل الدخول'}</p>
        </div>
      </div>

      {loggedInUser !== '6439bd5e1c12d023717e2be5' && showMenu && (
        <div className="w-[240px] py-5 flex flex-col justify-center absolute top-full border rounded-[10px] bg-[#FDFDFF]">
          <Link
            to="/profile"
            className="px-2 py-3 flex items-center hover:bg-[#eff6ff] border-r-2 border-transparent hover:border-r-2 hover:border-[#0583F2]"
          >
            <img className="ml-2" draggable="false" src={Person} alt="Profile" />
            <p>الملف الشخصي</p>
          </Link>
          <button
            onClick={() => handleLogout()}
            className="px-2 py-3 flex items-center text-[#EB1D36] hover:bg-[#eff6ff] border-r-2 border-transparent hover:border-r-2 hover:border-[#0583F2]"
          >
            <img className="w-6 mr-[6px] ml-3" draggable="false" src={Logout} alt="Logout" />
            <p>تسجيل الخروج</p>
          </button>
        </div>
      )}

      {userName && (
        <div>
          <img
            className={`${showMenu && 'rotate-180'} transition-all cursor-pointer`}
            draggable="false"
            src={ArrowDown}
            alt="Down arrow"
          />
        </div>
      )}
    </div>
  )
}

export default UserProfileRoundButton
