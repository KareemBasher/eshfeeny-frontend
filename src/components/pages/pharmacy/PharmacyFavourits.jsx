import React, { useState } from 'react'
/*    Components    */
import PharmacyNavigation from '../../common/PharmacyNavigation'
import PageEmpty from '../../common/PageEmpty'
import PharmacyFavouritesContent from './PharmacyFavouritesContent'
/*    Icons    */
import GuestLogo from '../../../assets/common/AlternativeLogo.svg'
import HeartLight from '../../../assets/common/HeartLight.svg'

const PharmacyFavourits = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([''])
  const [favoritesId, setFavouriteId] = useState([])

  return (
    <>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
        <div>
          <PageEmpty
            onGetTitle="المنتجات المفضلة"
            onGetLogo={GuestLogo}
            onGetText1="أنت الان في وضع الضيف"
            onGetText2="الرجاء تسجيل الدخول للاستمتاع بالمميزات"
            onGetButtonText="تسجيل الدخول"
            onGetPath="./login/user"
          />
        </div>
      ) : (
        <div>
          {items.length ? (
            <PharmacyFavouritesContent
              onGetTitle="المنتجات المفضلة"
              onGetItems={items}
              loggedInUser={loggedInUser}
              favorites={favoritesId}
            />
          ) : (
            <PageEmpty
              onGetTitle="المنتجات المفضلة"
              onGetLogo={HeartLight}
              onGetText1="لا توجد أي منتجات مفضلة لديك"
              onGetButtonText="اذهب للتسوق الان"
              onGetPath="/home"
            />
          )}
        </div>
      )}
    </>
  )
}

export default PharmacyFavourits
