import React, { useState } from 'react'
/*     components     */
import MyProductContainer from './MyProductContainer'
import Pagination from './Pagination'

const PharmacyProductContent = ({ items }) => {
  let result = 9
  if (innerWidth === 1920) {
    result = 15
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(result)

  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProducts = items.slice(firstProductIndex, lastProductIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex flex-wrap">
      {currentProducts.map((item) => (
        <MyProductContainer product={item} key={item._id} />
      ))}
      <Pagination
        totalProducts={items?.length}
        productsPerPage={productsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default PharmacyProductContent
