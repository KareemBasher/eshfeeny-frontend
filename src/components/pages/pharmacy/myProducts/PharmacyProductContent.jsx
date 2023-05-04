import React from 'react'
/*     components     */
import MyProductContainer from './MyProductContainer'

const PharmacyProductContent = ({ items }) => {
  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <MyProductContainer product={item} key={item._id} />
      ))}
    </div>
  )
}

export default PharmacyProductContent
