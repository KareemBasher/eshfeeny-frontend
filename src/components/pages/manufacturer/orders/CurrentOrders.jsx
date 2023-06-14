import React, { useState, useEffect } from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'
/*    API      */
import { getOrders } from '../../../../utils/manufacturersAPI'

const CurrentOrders = ({ loggedInUser, logout }) => {
  const [orders, setOrders] = useState(0)

  useEffect(() => {
    const getCurrentOrders = async () => {
      setOrders(await getOrders(loggedInUser))
    }
    getCurrentOrders()
  }, [])
  console.log(orders)

  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders onGetTitle="الطلبات" />
    </div>
  )
}

export default CurrentOrders
