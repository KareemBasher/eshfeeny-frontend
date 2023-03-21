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
    <div className="flex flex-row justify-center mb-3">
      <button>
        <img
          draggable="false"
          src={IncrementButton}
          className="w-[40px] h-[35px] box-border"
          onClick={() => increment(onGetUserID, onGetProductID)}
          alt="IncrementButton"
        />
      </button>
      <p className="flex items-center justify-center text-blue text-[20px] rounded-[10px] w-[100px] h-[35px] m-1 bg-[#CCE6FF]">
        {modifiedQuantity}
      </p>
      {modifiedQuantity > 1 ? (
        <button>
          <img
            draggable="false"
            src={DecrementButton}
            className="w-[40px] h-[35px] box-border "
            onClick={() => decrement(onGetUserID, onGetProductID)}
            alt="DecrementButton"
          />
        </button>
      ) : (
        <button>
          <img
            draggable="false"
            src={RemoveButton}
            className="w-[40px] h-[35px] box-border"
            onClick={() => removeFromCart(onGetUserID, onGetProductID)}
            alt="RemoveButton"
          />
        </button>
      )}
    </div>
  )
}

export default QuantityController
