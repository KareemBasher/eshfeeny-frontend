import React from 'react'
import PharmacyProductItems from './PharmacyProductItems'

const PharmacyProductContent = ({ items }) => {
  return (
    <div>
      <PharmacyProductItems items={items} />
    </div>
  )
}

export default PharmacyProductContent
