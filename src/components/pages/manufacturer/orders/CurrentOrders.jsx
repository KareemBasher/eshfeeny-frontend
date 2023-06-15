import React, { useState, useEffect } from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'
/*    API      */
import { getOrders } from '../../../../utils/manufacturersAPI'

const CurrentOrders = ({ loggedInUser, logout }) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getCurrentOrders = async () => {
      setOrders(await getOrders(loggedInUser))
    }
    getCurrentOrders()
  }, [])

  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders onGetTitle="الطلبات" orders={orders.orders} />
    </div>
  )
}

export default CurrentOrders
