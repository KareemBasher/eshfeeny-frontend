import React, { useEffect, useState } from 'react'
/*      Icons      */
import IncrementButton from '../../assets/common/AddButton.svg'
import DecrementButton from '../../assets/common/DecrementButton.svg'
import RemoveButton from '../../assets/common/DeleteButton.svg'
/*     API      */
import * as ProductsAPI from '../../utils/productsAPI'

const QuantityController = ({ onGetUserID, onGetProductID }) => {
  const [quantity, seQyantity] = useState('0')
  useEffect(() => {
    const itemQuantity = async () => {
      seQyantity(await ProductsAPI.checkCart(onGetUserID, onGetProductID))
    }
    itemQuantity()
  }, [])
  return (
    <div className=" flex flex-row">
      <button>
        <img src={IncrementButton} className="w-[48px] h-[45px] box-border  " />
      </button>

      <p className="text-center text-[#0597F2] text-[28px] rounded-[10px] w-[156px] h-[45px] m-3 bg-[#c4e3f7]">
        {quantity}
      </p>
      <button>
        <img src={RemoveButton} className="w-[48px] h-[45px] box-border " />
      </button>
    </div>
  )
}

export default QuantityController
