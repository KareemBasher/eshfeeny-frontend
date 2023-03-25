import React from 'react'
/*     Components     */
import UserNavigation from '../../common/UserNavigation'
import SideBar from '../../common/sideBar/SideBar'

const CategoreyPage = ({ loggedInUser }) => {
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <SideBar />
    </div>
  )
}

export default CategoreyPage
