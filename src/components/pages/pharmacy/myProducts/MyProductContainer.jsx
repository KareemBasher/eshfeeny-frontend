import React from 'react'
import { Link } from 'react-router-dom'

const MyProductContainer = ({ product }) => {
  return (
    <div className="flex flex-col justify-evenly rounded-[10px] hover:shadow-xl transition-all duration-300 shadow-sm w-[240px] h-[340px] border-[#E7E7E7] border-[0.8px] mx-2 my-4">
      <Link
        to={`/pharmacyProduct/${product._id}`}
        className="h-1/2 w-full flex items-center justify-center"
      >
        <img src={product?.images} className="h-3/4" draggable="false" alt="Product" />
      </Link>
      <div className="flex flex-col justify-end text-right px-3 pb-3 text-[18px]">
        <Link to={`/pharmacyProduct/${product._id}`}>
          <p className="text-[17px]">
            {product.nameAr}
            {product.volume ? ` | ${product.volume}` : ''}
            {product.amount ? ` | ${product.amount}` : ''}
          </p>
        </Link>
        <p className="text-lightBlue my-1 text-[17px]">{product.price} جنيه</p>
        <p className="text-[17px]">
          الكميات المتبقية: <span className="text-lightBlue">{product.quantity}</span>
          <span className="text-lightBlue mx-[3px]">عبوات</span>
        </p>
      </div>
    </div>
  )
}

export default MyProductContainer
