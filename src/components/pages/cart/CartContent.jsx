import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartContent = ({ onGetItems, OnGetTitle, loggedInUser, onRemoveItem }) => {
  return (
    <div className="mr-20">
      <div className="text-right text-[28px] my-10">{OnGetTitle}</div>
      <ol className="flex flex-col mb-16">
        {onGetItems.map(({ product, quantity }) => (
          <li key={product._id}>
            <CartItem
              product={product}
              loggedInUser={loggedInUser}
              quantity={quantity}
              onRemoveItem={onRemoveItem}
            />
          </li>
        ))}
      </ol>

      <div className="flex w-full flex-col justify-center">
        <p className="text-[28px] underline text-lightBlue underline-offset-8">
          <Link to="/products">استمر بالتسوق</Link>
        </p>
        <p className="text-[#676767] text-[14px] my-5">قد تخلتف الأسعار بين الصيدليات</p>
      </div>
    </div>
  )
}

export default CartContent
