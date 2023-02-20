import React, { useState, useEffect } from 'react'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import PageEmpty from '../../common/PageEmpty'
import CartContent from './CartContent'
/*    Icons    */
import CartLight from '../../../assets/common/CartLight.svg'
/*     API     */
import * as ProductsAPI from '../../../utils/productsAPI'
import * as UsersAPI from '../../../utils/usersAPI'

const Cart = ({ loggedInUser }) => {
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
      <UserNavigation loggedInUser={loggedInUser} />
      <div>
        {items.length ? (
          <CartContent
            onGetItems={items}
            OnGetTitle="سلة التسوق"
            loggedInUser={loggedInUser}
            onRemoveItem={removeFromCart}
          />
        ) : (
          <PageEmpty onGetTitle="سلة التسوق" onGetLogo={CartLight} onGetText="عربة التسوق فارغة " />
        )}
      </div>
    </>
  )
}

export default Cart
