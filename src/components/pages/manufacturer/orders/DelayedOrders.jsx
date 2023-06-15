import React, { useEffect, useState } from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'
/*    API      */
import { getDelayedOrders } from '../../../../utils/manufacturersAPI'

const DelayedOrders = ({ loggedInUser, logout }) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getCurrentOrders = async () => {
      setOrders(await getDelayedOrders(loggedInUser))
    }
    getCurrentOrders()
  }, [])
  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders onGetTitle="الطلبات المؤجلة" orders={orders.orders} />
    </div>
  )
}

export default DelayedOrders
