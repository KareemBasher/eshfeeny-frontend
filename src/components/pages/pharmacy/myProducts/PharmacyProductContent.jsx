import React from 'react'
/*     components     */
import MyProductContainer from './MyProductContainer'

const PharmacyProductContent = ({ items, firstProductIndex, lastProductIndex }) => {

  const currentProducts = items.slice(firstProductIndex, lastProductIndex)

  return (
    <div className="h-fit flex flex-wrap">
      {currentProducts?.map((item) => (
        <MyProductContainer product={item} key={item._id} />
      ))}
    </div>
  )
}

export default PharmacyProductContent
