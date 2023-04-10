import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartContent = ({ onGetItems, OnGetTitle, loggedInUser, onRemoveItem }) => {
  return (
    <div>
      <div className="text-right text-[28px] my-10 mr-32 2xl:mr-52">{OnGetTitle}</div>
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
        <p className="text-[24px] text-lightBlue">
          <Link
            className="text-[24px] text-lightBlue border border-lightBlue rounded-[10px] py-2 px-6"
            to="/location"
          >
            اعرض الصيديليات
          </Link>
        </p>
        <p className="text-[#676767] text-[14px] my-5">قد تخلتف الأسعار بين الصيدليات</p>

        <Link className="text-[20px] text-lightBlue underline underline-offset-[5px]" to="/home">
          استمر بالتسوق
        </Link>
      </div>
    </div>
  )
}

export default CartContent
