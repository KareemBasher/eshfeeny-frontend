import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
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
  const location = useLocation()

  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  let i = 0
  const input = document.querySelector('.searchBar')
  input?.addEventListener('keypress', (e) => {
    i++
    if (e.key === 'Enter' && i <= 1) {
      document.querySelector('.searchButton').click()
    }
  })

  const [cartItems, setCartItems] = useState(0)
  const [favouriteItems, setFavouriteItems] = useState(0)

  useEffect(() => {
    const getItems = async () => {
      const cart = await ProductsAPI.getCartProducts(loggedInUser)
      const favourite = await ProductsAPI.getFavoriteProducts(loggedInUser)
      setCartItems(cart.cart.length ? cart.cart.length : 0)
      setFavouriteItems(favourite.length ? favourite.length : 0)
    }
    getItems()
  }, [cartItems, favouriteItems])
  return (
    <>
      <div className="flex px-20 pr-24 py-7 justify-center">
        <LogoScript />
        <SearchBar onGetData={searchResult} query={query} />
        <RoundButton
          onGetLogo={HeartDark}
          onGetText="المفضلة"
          onGetPath="/favorites"
          onGetCartLength={favouriteItems}
          active={location.pathname === '/favorites'}
        />
        <RoundButton
          onGetLogo={CartDark}
          onGetText="العربة"
          onGetPath="/cart"
          onGetCartLength={cartItems}
          active={location.pathname === '/cart'}
        />
        <RoundButton
          onGetLogo={Location}
          onGetText="أقرب صيدلية"
          onGetPath="/location"
          onGetCartLength={cartItems}
          active={location.pathname === '/location'}
        />
        <RoundButton
          onGetLogo={Person}
          onGetText="حسابي"
          onGetPath="/profile"
          onGetCartLength={0}
          active={location.pathname === '/profile'}
        />
      </div>
      <NavListContainer />
    </>
  )
}

export default UserNavigation
