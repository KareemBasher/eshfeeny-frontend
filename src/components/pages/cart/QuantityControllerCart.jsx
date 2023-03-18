import React, { useState } from 'react'
/*      Icons      */
import IncrementButton from '../../../assets/common/AddButton.svg'
import DecrementButton from '../../../assets/common/DecrementButton.svg'
import DecrementDisabledButton from '../../../assets/common/DecrementDisabledButton.svg'
/*     API      */
import * as UsersAPI from '../../../utils/usersAPI'

const QuantityController = ({ onGetQuantity, loggedInUser, productID, updatePrice }) => {
  const [quantity, setQuantity] = useState(onGetQuantity)

  const increment = async (userID, productID) => {
    await UsersAPI.incrementQuantity(userID, productID)
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    updatePrice(newQuantity)
  }

  const decrement = async (e, userID, productID) => {
    if (quantity === 1) {
      e.target.disabled = true
    } else {
      await UsersAPI.decrementQuantity(userID, productID)
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      updatePrice(newQuantity)
    }
  }

  return (
    <div className="flex flex-row justify-center">
      <button>
        <img
          src={IncrementButton}
          className="w-[48px] h-[45px] box-border"
          onClick={() => increment(loggedInUser, productID)}
          alt="IncrementButton"
        />
      </button>
      <p className="flex items-center justify-center text-blue text-[28px] rounded-[10px] w-[156px] h-[45px] m-1 bg-[#cce6ff]">
        {quantity}
      </p>
      <button className="disabled:bg-gray-500">
        <img
          src={quantity === 1 ? DecrementDisabledButton : DecrementButton}
          className="w-[48px] h-[45px] box-border"
          onClick={(e) => decrement(e, loggedInUser, productID)}
          alt="DecrementButton"
        />
      </button>
    </div>
  )
}

export default QuantityController
