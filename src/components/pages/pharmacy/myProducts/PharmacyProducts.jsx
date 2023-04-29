import React, { useState } from 'react'
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PharmacyProductContent from './PharmacyProductContent'
import Img from './img.png'

const PharmacyProducts = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      img: Img,
      name: 'سنسوداين | معجون اسنان ترميم وحماية | 75مل',
      price: 70,
      quantity: 4
    }
  ])
  console.log()
  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      <PharmacyProductContent items={items} />
    </div>
  )
}

export default PharmacyProducts
