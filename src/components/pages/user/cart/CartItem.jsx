import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuantityControllerCart from './QuantityControllerCart'
import CloseButton from '../../../../assets/common/CloseButton.svg'

const CartItem = ({ product, loggedInUser, quantity, onRemoveItem }) => {
  const [price, setPrice] = useState(product.price * quantity)

  const updatePrice = (quantity) => {
    setPrice(product.price * quantity)
  }

  return (
    <div className="flex justify-evenly px-20 text-right border-b mt-5 h-32 w-full">
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

      <div className="flex h-full flex-col items-start justify-around text-[18px]">
        <QuantityControllerCart
          loggedInUser={loggedInUser}
          onGetQuantity={quantity}
          productID={product._id}
          updatePrice={updatePrice}
        />
      </div>

      <div className="flex items-center w-[150px]">
        <p className="text-lightBlue text-[24px]">{price} جنيه</p>
      </div>

      <button onClick={() => onRemoveItem(loggedInUser, product._id)}>
        <img src={CloseButton} draggable="false" alt="Remove from cart" />
      </button>
    </div>
  )
}

export default CartItem
