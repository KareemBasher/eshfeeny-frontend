import React, { useState, useEffect } from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'
/*    API      */
import { getOrders } from '../../../../utils/manufacturersAPI'

const CurrentOrders = ({ loggedInUser, logout }) => {
  const [orders, setOrders] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const getCurrentOrders = async () => {
      setOrders(await getOrders(loggedInUser))
      setRefresh(true)
    }
    getCurrentOrders()
  }, [refresh])

  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders
        onGetTitle="الطلبات"
        orders={orders.orders}
        loggedInUser={loggedInUser}
        type="current"
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  )
}

export default CurrentOrders
