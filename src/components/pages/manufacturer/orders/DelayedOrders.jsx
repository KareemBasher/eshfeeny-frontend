import React, { useEffect, useState } from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'
/*    API      */
import { getDelayedOrders } from '../../../../utils/manufacturersAPI'

const DelayedOrders = ({ loggedInUser, logout }) => {
  const [orders, setOrders] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const getOrders = async () => {
      setOrders(await getDelayedOrders(loggedInUser))
      setRefresh(true)
    }
    getOrders()
  }, [refresh])

  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders
        onGetTitle="الطلبات المؤجلة"
        orders={orders.delayedOrders}
        loggedInUser={loggedInUser}
        type="delayed"
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  )
}

export default DelayedOrders
