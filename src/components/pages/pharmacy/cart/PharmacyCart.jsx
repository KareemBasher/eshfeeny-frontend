import React, { useState, useEffect } from 'react'
/*    components    */
import PageEmpty from '../../../common/PageEmpty'
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PharmacyCartContent from './PharmacyCartContent'
/*    Icons    */
import CartLight from '../../../../assets/common/CartLight.svg'
import GuestLogo from '../../../../assets/common/AlternativeLogo.svg'
/*    API    */
import * as PharmacyAPI from '../../../../utils/pharmaciesAPI'

const PharmacyCart = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([])

  // useEffect(() => {
  //   const updateItems = async () => {
  //     const result = await PharmacyAPI.getCartProducts(loggedInUser)
  //     setItems(result?.cart ? result.cart : [])
  //   }
  //   updateItems()
  // }, [])

  const removeFromCart = (ID, productID) => {
    PharmacyAPI.removeFromCart(ID, productID)
    setItems(items.filter(({ product }) => product._id !== productID))
  }

  return (
    <div>
      <div>
        <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      </div>

      <div>
        {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
          <div>
            <PageEmpty
              onGetTitle="سلة التسوق"
              onGetLogo={GuestLogo}
              onGetText1="أنت الان في وضع الضيف"
              onGetText2="الرجاء تسجيل الدخول للاستمتاع بالمميزات"
              onGetButtonText="تسجيل الدخول"
              onGetPath="./login/pahrmacy"
            />
          </div>
        ) : (
          <div>
            {items.length ? (
              <PharmacyCartContent
                onGetItems={items}
                OnGetTitle="سلة التسوق"
                loggedInUser={loggedInUser}
                onRemoveItem={removeFromCart}
              />
            ) : (
              <PageEmpty
                onGetTitle="سلة التسوق"
                onGetLogo={CartLight}
                onGetText1="عربة التسوق فارغة "
                onGetButtonText="اذهب للتسوق الان"
                onGetPath="/home"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PharmacyCart
