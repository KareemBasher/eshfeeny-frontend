import React, { useState, useEffect } from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'
/*    API      */
import {
  getOrders,
  delayOrder,
  undelayOrder,
  removeOrder
} from '../../../../utils/manufacturersAPI'

const CurrentOrders = ({ loggedInUser, logout }) => {
  const [orders, setOrders] = useState([])

  const removeFromArray = (id) => {
    const newOrders = orders.filter((order) => order._id !== id)
    setOrders(newOrders)
  }

  const delay = (id, orderID) => {
    delayOrder(id, orderID)
    removeFromArray(orderID)
  }

  const unDelay = (id, orderID) => {
    undelayOrder(id, orderID)
    removeFromArray(orderID)
  }

  const remove = (id, orderID) => {
    removeOrder(id, orderID)
    removeFromArray(orderID)
  }

  useEffect(() => {
    const getCurrentOrders = async () => {
      const result = await getOrders(loggedInUser)
      setOrders(result.orders)
    }
    getCurrentOrders()
  }, [])

  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders
        onGetTitle="الطلبات"
        orders={orders}
        loggedInUser={loggedInUser}
        type="current"
        delay={delay}
        unDelay={unDelay}
        remove={remove}
      />
    </div>
  )
}

export default CurrentOrders
