import React, { useState } from 'react'
import QuantityControllerCart from './QuantityControllerCart'
import CloseButton from '../../../assets/common/CloseButton.svg'

const CartItem = ({ product, loggedInUser, quantity, onRemoveItem }) => {
  const [price, setPrice] = useState(product.price * quantity)

  const updatePrice = (quantity) => {
    setPrice(product.price * quantity)
  }

  return (
    <div className="flex justify-evenly text-right border-b mt-5 h-32 w-full">
      <div className="flex items-center justify-center">
        <img src="" className="w-[150px]" />
      </div>
      <div className="text-[20px] flex items-center w-[250px]">
        <p>
          {product.nameAr}
          {product.volume ? ` | ${product.volume}` : ''}
          {product.amount ? ` | ${product.amount}` : ''}
        </p>
      </div>

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
        <img src={CloseButton} alt="Remove from cart" />
      </button>
    </div>
  )
}

export default CartItem
