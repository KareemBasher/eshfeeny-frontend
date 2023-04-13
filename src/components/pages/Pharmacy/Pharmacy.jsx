import React from 'react'
import PharmacyNavigation from '../../common/PharmacyNavigation'
import Brands from '../main/Brands'

const Pharmacy = ({ loggedInUser }) => {
  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} />
      <Brands />
    </div>
  )
}

export default Pharmacy
