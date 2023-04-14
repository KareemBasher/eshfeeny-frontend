import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
/*    Components    */
import LogoScript from './LogoScript'
import SearchBar from './SearchBar'
import RoundButton from './RoundButton'
import NavListContainer from './navBar/NavListContainer'
import PharmacyProfileRoundButton from './PharmacyProfileRoundButton'
/*       Icons        */
import HeartDark from '../../assets/common/HeartDark.svg'
import CartDark from '../../assets/common/CartDark.svg'
import PharmacyProducts from '../../assets/common/PharmacyProducts.svg'
/*      API      */
import { getCartProducts, getFavoriteProducts } from '../../utils/productsAPI'

const PharmacyNavigation = ({ loggedInUser, logout }) => {
  const [query, setQuery] = useState('')
  const location = useLocation()

  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const input = document.querySelector('.searchBar')
    const handleTextSearch = (e) => {
      //Variable to check if input is Empty
      let i = 0
      if (input.value) {
        i = 1
      }
      //Checks if 'Enter' is pressed
      if (e.key === 'Enter' && i === 1) {
        document.querySelector('.searchButton').click()
      }
    }
    input?.addEventListener('keypress', (e) => {
      handleTextSearch(e)
    })
    return () => {
      input?.removeEventListener('keypress', (e) => {
        handleTextSearch(e)
      })
    }
  }, [])

  const [cartItems, setCartItems] = useState(0)
  const [favouriteItems, setFavouriteItems] = useState(0)

  useEffect(() => {
    const getItems = async () => {
      const cart = await getCartProducts(loggedInUser)
      const favourite = await getFavoriteProducts(loggedInUser)
      setCartItems(cart.cart.length ? cart.cart.length : 0)
      setFavouriteItems(favourite.length ? favourite.length : 0)
    }
    getItems()
  }, [cartItems, favouriteItems])

  return (
    <>
      <div className="flex px-32 2xl:px-52 py-7 justify-center relative bg-[#fdfdff] z-30">
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
          onGetLogo={PharmacyProducts}
          onGetText="منتجاتى"
          onGetPath={`/pharmacyProducts`}
          onGetCartLength={cartItems}
          active={location.pathname === '/pharmacyProducts'}
        />
        <PharmacyProfileRoundButton loggedInUser={loggedInUser} logout={logout} />
      </div>
      <NavListContainer />
    </>
  )
}

export default PharmacyNavigation
