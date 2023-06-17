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
/*        API        */
import * as ManufacturerAPI from '../../utils/manufacturersAPI'

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

  const [orders, setOrders] = useState(0)
  const [delayedOrders, setDelayedOrders] = useState(0)

  useEffect(() => {
    const getItems = async () => {
      const orders = await ManufacturerAPI.getOrders(loggedInUser)
      const delayedOrders = await ManufacturerAPI.getDelayedOrders(loggedInUser)
      setOrders(orders.orders ? orders.orders : 0)
      setDelayedOrders(delayedOrders.delayedOrders ? delayedOrders.delayedOrders : 0)
    }
    getItems()
  }, [])

  return (
    <>
      <div className="flex px-32 2xl:px-52 py-7 justify-center relative bg-[#fdfdff] z-30 border">
        <LogoScript home="/manufacturer" />
        <SearchBar onGetType="manufacturer" onGetData={searchResult} query={query} />
        <RoundButton
          onGetLogo={Orders}
          onGetText="الطلبات"
          onGetPath="/currentOrders"
          onGetCartLength={orders.length}
          active={location.pathname === '/orders'}
        />
        <RoundButton
          onGetLogo={DelayedOrders}
          onGetText="الطلبات المؤجلة"
          onGetPath="/delayedOrders"
          onGetCartLength={delayedOrders.length}
          active={location.pathname === '/delayedOrders'}
        />
        <RoundButton
          onGetLogo={FactoryProducts}
          onGetText="منتجاتى"
          onGetPath={`/factoryProducts`}
          onGetCartLength={delayedOrders.length}
          active={location.pathname === '/factoryProducts'}
        />
        <ManufacturerProfileRoundButton loggedInUser={loggedInUser} logout={logout} />
      </div>
    </>
  )
}

export default ManufacturerNavigation
