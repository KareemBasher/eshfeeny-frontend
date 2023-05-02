import React, { useEffect, useState } from 'react'
/*      Icons      */
import IncrementButton from '../../../../assets/common/AddButton.svg'
import DecrementButton from '../../../../assets/common/DecrementButton.svg'
/*     API      */
import * as ProductsAPI from '../../../../utils/productsAPI'
import * as UsersAPI from '../../../../utils/usersAPI'

const QuantityController = ({ handleHideComponent, onGetUserID, onGetProductID }) => {
  const [baseQuantity, setBaseQuantity] = useState('0') //value in data base
  const [modifiedQuantity, setModifiedQuantity] = useState(0) //shown value
  useEffect(() => {
    const itemQuantity = async () => {
      const checkQuantity = await ProductsAPI.checkCart(onGetUserID, onGetProductID)
      if (checkQuantity) {
        setBaseQuantity(checkQuantity)
        setModifiedQuantity(checkQuantity)
      } else {
        await UsersAPI.addToCart(onGetUserID, onGetProductID)
        const quantity = await ProductsAPI.checkCart(onGetUserID, onGetProductID)
        setModifiedQuantity(quantity)
        setBaseQuantity(quantity)
      }
    }
    itemQuantity()
  }, [])
  const increment = async (userID, productID) => {
    setModifiedQuantity(modifiedQuantity + 1)
    await UsersAPI.incrementQuantity(userID, productID)
    setBaseQuantity(baseQuantity + 1)
  }
  const decrement = async (userID, productID) => {
    setModifiedQuantity(modifiedQuantity - 1)
    await UsersAPI.decrementQuantity(userID, productID)
    setBaseQuantity(baseQuantity - 1)
  }
  const removeFromCart = async (userID, productID) => {
    handleHideComponent()
    await UsersAPI.removeFromCart(userID, productID)
  }
  return (
    <div className="flex justify-start">
      <button>
        <img
          draggable="false"
          src={IncrementButton}
          className="w-[54pxpx] h-[48px] box-border ml-[3px]"
          onClick={() => increment(onGetUserID, onGetProductID)}
          alt="IncrementButton"
        />
      </button>
      <p className="flex items-center justify-center text-blue text-[28px] rounded-[10px] w-[220px] h-[48px] m-1 bg-[#cce6ff]">
        {modifiedQuantity}
      </p>

      <button>
        <img
          draggable="false"
          src={DecrementButton}
          className="w-[54px] h-[48px] box-border"
          onClick={() =>
            modifiedQuantity > 1
              ? decrement(onGetUserID, onGetProductID)
              : removeFromCart(onGetUserID, onGetProductID)
          }
          alt="DecrementButton"
        />
      </button>
    </div>
  )
}

export default QuantityController
