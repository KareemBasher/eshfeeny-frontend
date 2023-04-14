import React from 'react'
import PharmacyNavigation from '../../common/PharmacyNavigation'
import PharmacyAds from './PharmacyAds'
import Brands from '../main/Brands'

const Pharmacy = ({ loggedInUser, logout }) => {
  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="2xl:mx-28">
        <PharmacyAds />
        <Brands />
      </div>
    </div>
  )
}

export default Pharmacy
