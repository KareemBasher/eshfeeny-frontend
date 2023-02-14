import React, { useState } from 'react'
/*       Icons       */
import Heart from '../../../assets/common/HeartYellow.svg'
/*     Components      */
import QuantityController from '../../common/QuantityController'

const FavouriteProducts = ({ onGetProduct, onRemoveFavourite }) => {
  const [showButton, setShowButton] = useState(true)
  const handleShowButton = () => {
    setShowButton(true)
  }
  const handleHideButton = () => {
    setShowButton(false)
  }
  return (
    <div className="flex flex-col justify-between rounded-lg shadow-sm w-[233px] h-[340px] border-[#E7E7E7] border-[0.8px] ml-5 my-4">
      <button onClick={() => onRemoveFavourite('63d9239b6ff014381890d178', onGetProduct._id)}>
        <img src={Heart} className="w-[22px] box-border mr-3 mt-5" />
      </button>
      <div className="flex justify-center">
        <img src="" className="w-32 m-5" />
      </div>
      <div className="text-right p-3 text-[18px] h-">
        <p>
          {onGetProduct.nameAr}
          {onGetProduct.volume ? ` | ${onGetProduct.volume}` : ''}
          {onGetProduct.amount ? ` | ${onGetProduct.amount}` : ''}
        </p>
        <p className="text-blue py-1">{onGetProduct.price} جنيه</p>
        <div className="self-center">
          {showButton && (
            <button
              className="my-1 p-1 px-10 rounded-xl text-orange border-orange border-[0.8px]"
              onClick={handleHideButton}
            >
              أضف الى العربة
            </button>
          )}
          {!showButton && (
            <QuantityController
              handleHideComponent={handleShowButton}
              onGetUserID="63d9239b6ff014381890d178"
              onGetProductID={onGetProduct._id}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default FavouriteProducts
