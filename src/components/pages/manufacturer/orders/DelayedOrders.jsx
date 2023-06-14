import React from 'react'
/*        Components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Orders from './Orders'

const DelayedOrders = ({ loggedInUser, logout }) => {
  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <Orders />
    </div>
  )
}

export default DelayedOrders
