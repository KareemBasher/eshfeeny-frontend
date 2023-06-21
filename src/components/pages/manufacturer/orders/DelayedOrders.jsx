import React, { useEffect, useState } from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'
/*    API      */
import { getDelayedOrders, removeOrder, undelayOrder } from '../../../../utils/manufacturersAPI'

const DelayedOrders = ({ loggedInUser, logout }) => {
  const [orders, setOrders] = useState([])

  const removeFromArray = (id) => {
    const newOrders = orders.filter((order) => order._id !== id)
    setOrders(newOrders)
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
    const getOrders = async () => {
      const result = await getDelayedOrders(loggedInUser)
      setOrders(result.delayedOrders)
    }
    getOrders()
  }, [])
  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders
        onGetTitle="الطلبات المؤجلة"
        orders={orders}
        loggedInUser={loggedInUser}
        type="delayed"
        unDelay={unDelay}
        remove={remove}
      />
    </div>
  )
}

export default DelayedOrders
