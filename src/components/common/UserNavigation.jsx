import React, { useEffect, useState } from 'react'
/*    Components    */
import SearchBar from '../common/SearchBar'
import RoundButton from '../common/RoundButton'
import NavListContainer from '../common/navBar/NavListContainer'
import LogoScript from '../common/LogoScript'
/*       Icons        */
import HeartDark from '../../assets/common/HeartDark.svg'
import Location from '../../assets/common/Location.svg'
import CartDark from '../../assets/common/CartDark.svg'
import Person from '../../assets/common/Person.svg'
/*      API      */
import * as ProductsAPI from '../../utils/productsAPI'

const UserNavigation = ({ loggedInUser }) => {
  const [query, setQuery] = useState('')
  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    const getCartItems = async () => {
      const result = await ProductsAPI.getCartProducts(loggedInUser)
      setCartItems(result.cart.length ? result.cart.length : 0)
    }
    getCartItems()
  }, [cartItems])

  return (
    <>
      <div className="flex px-20 py-7 justify-center">
        <LogoScript />
        <SearchBar onGetData={searchResult} query={query} />
        <RoundButton
          onGetLogo={HeartDark}
          onGetText="المفضلة"
          onGetPath="/favorites"
          onGetCartLength={0}
        />
        <RoundButton
          onGetLogo={Location}
          onGetText="أقرب صيدلية"
          onGetPath="/location"
          onGetCartLength={cartItems}
        />
        <RoundButton
          onGetLogo={CartDark}
          onGetText="العربة"
          onGetPath="/cart"
          onGetCartLength={cartItems}
        />
        <RoundButton
          onGetLogo={Person}
          onGetText="حسابي"
          onGetPath="/profile"
          onGetCartLength={0}
        />
      </div>
      <NavListContainer />
    </>
  )
}

export default UserNavigation
