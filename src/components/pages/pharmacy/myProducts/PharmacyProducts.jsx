/*     HOOKS      */
import React, { useState, useEffect } from 'react'
/*     components      */
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PharmacyProductContent from './PharmacyProductContent'
import Img from './img.png'
import * as ProductAPI from '../../../../utils/productsAPI'

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
      <PharmacyProductContent items={items} />
    </div>
  )
}

export default PharmacyProducts
