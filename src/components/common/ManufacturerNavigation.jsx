import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
/*    Components    */
import LogoScript from './LogoScript'
import SearchBar from './SearchBar'
import RoundButton from './RoundButton'
import ManufacturerProfileRoundButton from './ManufacturerProfileRoundButton'
/*       Icons        */
import Orders from '../../assets/common/Orders.svg'
import DelayedOrders from '../../assets/common/DelayedOrders.svg'
import FactoryProducts from '../../assets/common/PharmacyProducts.svg'
// import * as ProductsAPI from '../../utils/productsAPI'
// import * as PharmcyAPI from '../../utils/pharmaciesAPI'

const ManufacturerNavigation = ({ loggedInUser, logout }) => {
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

//   const [cartItems, setCartItems] = useState(0)
//   const [favouriteItems, setFavouriteItems] = useState(0)

//   useEffect(() => {
//     const getItems = async () => {
//       const cart = await PharmcyAPI.getCart(loggedInUser)
//       const favourite = await ProductsAPI.getFavoriteProductsPharmacy(loggedInUser)
//       setCartItems(cart.cart.length ? cart.cart.length : 0)
//       setFavouriteItems(favourite.length ? favourite.length : 0)
//     }
//     getItems()
//   }, [cartItems, favouriteItems])

  return (
    <>
      <div className="flex px-32 2xl:px-52 py-7 justify-center relative bg-[#fdfdff] z-30">
        <LogoScript home="/manufacturer" />
        <SearchBar onGetType="manufacturer" onGetData={searchResult} query={query} />
        <RoundButton
          onGetLogo={Orders}
          onGetText="الطلبات"
          onGetPath="/orders"
        //   onGetCartLength={favouriteItems}
          active={location.pathname === '/orders'}
        />
        <RoundButton
          onGetLogo={DelayedOrders}
          onGetText="الطلبات المؤجلة"
          onGetPath="/delayedOrders"
        //   onGetCartLength={cartItems}
          active={location.pathname === '/delayedOrders'}
        />
        <RoundButton
          onGetLogo={FactoryProducts}
          onGetText="منتجاتى"
          onGetPath={`/factoryProducts`}
        //   onGetCartLength={cartItems}
          active={location.pathname === '/factoryProducts'}
        />
        <ManufacturerProfileRoundButton loggedInUser={loggedInUser} logout={logout} />
      </div>
    </>
  )
}

export default ManufacturerNavigation
