import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from '../../common/SearchBar'
import RoundButton from '../../common/RoundButton'
import NavListContainer from '../../common/navBar/NavListContainer'
import PageEmpty from '../../common/PageEmpty'
import LogoScript from '../../common/LogoScript'
import CartContent from './CartContent'
/*    Icons    */
import HeartDark from '../../../assets/common/HeartDark.svg'
import CartLight from '../../../assets/common/CartLight.svg'
import Location from '../../../assets/common/Location.svg'
import CartDark from '../../../assets/common/CartDark.svg'
import Person from '../../../assets/common/Person.svg'
/*     API     */
import * as ProductsAPI from '../../../utils/productsAPI'
import * as UsersAPI from '../../../utils/usersAPI'

const Cart = ({ loggedInUser }) => {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState([])

  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const updateItems = async () => {
      const result = await ProductsAPI.getCartProducts(loggedInUser)
      setItems(result?.cart)
    }
    updateItems()
  }, [])

  const removeFromCart = (ID, productID) => {
    UsersAPI.removeFromCart(ID, productID)
    setItems(items.filter(({ product }) => product._id !== productID))
  }

  return (
    <>
      <div className="flex pt-3 px-[112px]">
        <LogoScript />
        <SearchBar onGetData={searchResult} query={query} />
        <RoundButton onGetLogo={HeartDark} onGetText="المفضلة" onGetPath="/favorites" />
        <RoundButton onGetLogo={Location} onGetText="أقرب صيدلية" onGetPath="/location" />
        <RoundButton onGetLogo={CartDark} onGetText="العربة" onGetPath="/cart" />
        <RoundButton onGetLogo={Person} onGetText="حسابي" onGetPath="/profile" />
      </div>

      <NavListContainer />

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
