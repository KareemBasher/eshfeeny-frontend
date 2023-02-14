import React, { useState } from 'react'
import HeartDark from '../../../assets/common/HeartDark.svg'
// import QuantityController from '../../common/QuantityController'

const CartContent = ({ onGetItems, OnGetTitle, onRemoveCartItem, onAddAmount, amount }) => {
  return (
    <div>
      <div className="text-right text-[28px] m-10 mr-20">{OnGetTitle}</div>
      <ol className="flex flex-wrap mr-20">
        {onGetItems.map((product) => (
          <li key={product._id}>
            <div className="flex justify-center shadow-sm rounded-[10px] mt-5 w-[600px] h-[340px] border-[#E7E7E7] border-[0.8px] ml-5">
              <div className="flex justify-start">
                <img src={HeartDark} className="w-32 m-5" />
              </div>
              <div className="flex  h-full  flex-col  justify-end  text-[18px]">
                <div>
                  <p>{product.nameAr}</p>
                  <p className="">{product.volume}</p>
                  <p>{product.amount}</p>
                  <p className="text-blue ">{product.price} جنيه</p>
                </div>
                <QuantityController />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default CartContent
