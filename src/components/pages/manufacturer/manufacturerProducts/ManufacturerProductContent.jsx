import React from 'react'
import ManufacturerProductContainer from '../ManufacturerProductContainer'

const ManufacturerProductContent = ({ items, firstProductIndex, lastProductIndex }) => {
  const currentProducts = items.slice(firstProductIndex, lastProductIndex)

  return (
    <div className="h-fit flex flex-wrap">
      {currentProducts?.map((item) => (
        <ManufacturerProductContainer onGetProduct={item} key={item._id} />
      ))}
    </div>
  )
}

export default ManufacturerProductContent
