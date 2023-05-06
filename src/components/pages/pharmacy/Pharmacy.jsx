import React from 'react'
import PharmacyNavigation from '../../common/PharmacyNavigation'
import PharmacyAds from './PharmacyAds'
import Brands from '../user/main/Brands'
import PharmacyCategoryItems from './PharmacyCategoryItems'

const Pharmacy = ({ loggedInUser, logout }) => {
  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="2xl:mx-28">
        <PharmacyAds />
        <PharmacyCategoryItems
          onGetTitle="عروض لا تفوتك"
          onGetType="العناية بالبشرة و الشعر"
          onGetCategory="العناية باليد و القدم"
          onGetContainer="one"
          loggedInUser={loggedInUser}
        />
        <PharmacyCategoryItems
          onGetTitle="عروض لا تفوتك"
          onGetType="الأدوية"
          onGetCategory="الفيتامينات و المكملات الغذائية"
          onGetContainer="two"
          loggedInUser={loggedInUser}
        />
        <Brands onGetType="pharmacy" />
      </div>
    </div>
  )
}

export default Pharmacy
