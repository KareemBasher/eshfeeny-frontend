import React from 'react'
import QuantityControllerCart from './QuantityControllerCart'

const CartItem = ({ product, loggedInUser, quantity, onRemoveItem }) => {
  return (
    <div className="flex justify-around shadow-sm rounded-[10px] mt-5 w-[600px] h-[245px] border-[#E7E7E7] border-[0.8px] ml-5">
      <div className="flex items-center justify-center w-1/3">
        <img className="w-[150px]" />
      </div>

      <div className="flex h-full w-1/2 flex-col items-start justify-around text-[18px]">
        <div className="text-right">
          <p>
            {product.nameAr}
            {product.volume ? ` | ${product.volume}` : ''}
            {product.amount ? ` | ${product.amount}` : ''}
          </p>
          <p className="text-lightBlue text-[20px] py-1">{product.price} جنيه</p>
        </div>
        <QuantityControllerCart
          loggedInUser={loggedInUser}
          onGetQuantity={quantity}
          productID={product._id}
          onRemoveItem={onRemoveItem}
        />
      </div>
    </div>
  )
}

export default CartItem
