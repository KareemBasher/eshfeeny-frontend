/*     HOOKS      */
import React, { useState, useEffect } from 'react'
/*     components      */
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PharmacyProductContent from './PharmacyProductContent'
import * as ProductAPI from '../../../../utils/productsAPI'
import SideBar from './sideBar/SideBar'

const PharmacyProducts = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const updateItems = async () => {
      const result = await ProductAPI.getPharmacyProducts(loggedInUser)
      setItems(result ? result : [])
    }
    updateItems()
  }, [])

  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="flex mx-32">
        <SideBar />
        <PharmacyProductContent items={items} />
      </div>
    </div>
  )
}

export default PharmacyProducts
