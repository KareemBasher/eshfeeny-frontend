import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PharmacyQuantityCart from './PharmacyQuantityCart'
import CloseButton from '../../../../assets/common/CloseButton.svg'

const PharmacyCartItems = ({ product, loggedInUser, quantity, onRemoveItem, click, setClick }) => {
  const [price, setPrice] = useState(product.price * quantity)

  const updatePrice = (quantity) => {
    setPrice(product.price * quantity)
  }

  return (
    <div className="flex justify-between 2xl:pl-20 text-right border rounded-[10px] shadow-sm mt-5 h-32 2xl:w-[1227px]">
      <Link to={`/product/${product._id}`} className="flex items-center justify-center w-[150px]">
        <img src={product?.images} draggable="false" className="max-h-[80%]" alt="Product" />
      </Link>
      <Link to={`/product/${product._id}`} className="text-[20px] flex items-center w-[250px]">
        <p>
          {product.nameAr}
          {product.volume ? ` | ${product.volume}` : ''}
          {product.amount ? ` | ${product.amount}` : ''}
        </p>
      </Link>

      <div className="flex h-full flex-col items-start justify-around text-[18px] mx-9">
        <PharmacyQuantityCart
          loggedInUser={loggedInUser}
          onGetQuantity={quantity}
          productID={product._id}
          updatePrice={updatePrice}
          click={click}
          setClick={setClick}
        />
      </div>

      <div className="flex items-center w-[150px]">
        <p className="text-lightBlue text-[24px]">{price} جنيه</p>
      </div>

      <button onClick={() => onRemoveItem(loggedInUser, product._id)} className="pl-2 2xl:pl-0">
        <img src={CloseButton} draggable="false" alt="Remove from cart" />
      </button>
    </div>
  )
}

export default PharmacyCartItems
