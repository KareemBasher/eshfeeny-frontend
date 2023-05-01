import React, { useState, useEffect } from 'react'
/*    Components    */
import UserNavigation from '../../../common/UserNavigation'
import PageEmpty from '../../../common/PageEmpty'
import CartContent from './CartContent'
/*    Icons    */
import CartLight from '../../../../assets/common/CartLight.svg'
import GuestLogo from '../../../../assets/common/AlternativeLogo.svg'
/*     API     */
import * as ProductsAPI from '../../../../utils/productsAPI'
import * as UsersAPI from '../../../../utils/usersAPI'

const Cart = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const updateItems = async () => {
      const result = await ProductsAPI.getCartProducts(loggedInUser)
      setItems(result?.cart ? result.cart : [])
    }
    updateItems()
  }, [])

  const removeFromCart = (ID, productID) => {
    UsersAPI.removeFromCart(ID, productID)
    setItems(items.filter(({ product }) => product._id !== productID))
  }

  return (
    <>
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
        <div>
          <PageEmpty
            onGetTitle="سلة التسوق"
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
            <CartContent
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
    </>
  )
}

export default Cart
