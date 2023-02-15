import React, { useState } from 'react'
/*      Icons      */
import IncrementButton from '../../../assets/common/AddButton.svg'
import DecrementButton from '../../../assets/common/DecrementButton.svg'
/*     API      */
import * as UsersAPI from '../../../utils/usersAPI'

const QuantityController = ({ onGetQuantity, loggedInUser, productID }) => {
  const [quantity, setQuantity] = useState(onGetQuantity)

  const increment = async (userID, productID) => {
    await UsersAPI.incrementQuantity(userID, productID)
    setQuantity(quantity + 1)
  }

  const decrement = async (userID, productID) => {
    setQuantity(quantity - 1)
    await UsersAPI.decrementQuantity(userID, productID)
    setQuantity(quantity - 1)
  }

  return (
    <div className="flex flex-row justify-center">
      <button>
        <img
          src={IncrementButton}
          className="w-[48px] h-[45px] box-border  "
          onClick={() => increment(loggedInUser, productID)}
        />
      </button>
      <p className="flex items-center justify-center text-blue text-[28px] rounded-[10px] w-[156px] h-[45px] m-1 bg-[#DBEBF5]">
        {quantity}
      </p>
      <button>
        <img
          src={DecrementButton}
          className="w-[48px] h-[45px] box-border "
          onClick={() => decrement(loggedInUser, productID)}
        />
      </button>
    </div>
  )
}

export default QuantityController
