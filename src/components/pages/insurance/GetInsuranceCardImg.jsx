import React from 'react'
import UserNavigation from '../../common/UserNavigation'

const GetInsuranceCardImg = ({ loggedInUser }) => {
  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>
    </div>
  )
}

export default GetInsuranceCardImg
