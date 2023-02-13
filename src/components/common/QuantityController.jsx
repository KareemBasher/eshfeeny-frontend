import React, { useEffect, useState } from 'react'
/*      Icons      */
import IncrementButton from '../../assets/common/AddButton.svg'
import DecrementButton from '../../assets/common/DecrementButton.svg'
import RemoveButton from '../../assets/common/DeleteButton.svg'

const QuantityController = ({ onGetQuantity }) => {
  return (
    <div className=" flex flex-row">
      <button>
        <img src={IncrementButton} className="w-[48px] h-[45px] box-border  " />
      </button>
      <p className="text-center text-[#0597F2] text-[28px] rounded-[10px] w-[156px] h-[45px] m-3 bg-[#c4e3f7]">
        {onGetQuantity}
      </p>
      {onGetQuantity > 1 ? (
        <button>
          <img src={DecrementButton} className="w-[48px] h-[45px] box-border " />
        </button>
      ) : (
        <button>
          <img src={RemoveButton} className="w-[48px] h-[45px] box-border " />
        </button>
      )}
    </div>
  )
}

export default QuantityController
