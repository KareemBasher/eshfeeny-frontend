import React, { useEffect, useState } from 'react'
/*      Icons      */
import IncrementButton from '../../assets/common/AddButton.svg'
import DecrementButton from '../../assets/common/DecrementButton.svg'
import RemoveButton from '../../assets/common/DeleteButton.svg'
/*     API      */
import * as ProductsAPI from '../../utils/productsAPI'
import * as UsersAPI from '../../utils/usersAPI'

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
    <div className=" flex flex-row">
      <button>
        <img
          src={IncrementButton}
          className="w-[48px] h-[45px] box-border  "
          onClick={() => increment(onGetUserID, onGetProductID)}
        />
      </button>
      <p className="text-center text-[#0597F2] text-[28px] rounded-[10px] w-[156px] h-[45px] m-3 bg-[#c4e3f7]">
        {modifiedQuantity}
      </p>
      {modifiedQuantity > 1 ? (
        <button>
          <img
            src={DecrementButton}
            className="w-[48px] h-[45px] box-border "
            onClick={() => decrement(onGetUserID, onGetProductID)}
          />
        </button>
      ) : (
        <button onClick={() => removeFromCart(onGetUserID, onGetProductID)}>
          <img src={RemoveButton} className="w-[48px] h-[45px] box-border " />
        </button>
      )}
    </div>
  )
}

export default QuantityController
