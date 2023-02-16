import React, { useState } from 'react'
/*       Icons       */
import Heart from '../../assets/common/HeartYellow.svg'
/*     Components      */
import QuantityController from './QuantityController'
import { Link } from 'react-router-dom'

const FavouriteProducts = ({ onGetProduct, onRemoveFavourite, loggedInUser }) => {
  const [showButton, setShowButton] = useState(true)
  const handleShowButton = () => {
    setShowButton(true)
  }
  const handleHideButton = () => {
    setShowButton(false)
  }
  return (
    <div className="flex flex-col justify-between rounded-lg shadow-sm w-[233px] h-[340px] border-[#E7E7E7] border-[0.8px] ml-5 my-4">
      <button
        className="w-[22px] box-border mr-3 mt-5"
        onClick={() => onRemoveFavourite(loggedInUser, onGetProduct._id)}
      >
        <img src={Heart} />
      </button>
      <Link to={`/product/${onGetProduct._id}`} className="flex justify-center">
        <img src="" className="w-32 m-5" />
      </Link>
      <div className="text-right p-3 text-[18px] h-">
        <Link to={`/product/${onGetProduct._id}`}>
          <p>
            {onGetProduct.nameAr}
            {onGetProduct.volume ? ` | ${onGetProduct.volume}` : ''}
            {onGetProduct.amount ? ` | ${onGetProduct.amount}` : ''}
          </p>
        </Link>
        <p className="text-lightBlue py-1">{onGetProduct.price} جنيه</p>
        <div className="flex justify-center">
          {showButton && (
            <button
              className="my-1 h-[40px] px-10 rounded-[10px] text-white bg-orange"
              onClick={handleHideButton}
            >
              أضف الى العربة
            </button>
          )}
          {!showButton && (
            <QuantityController
              handleHideComponent={handleShowButton}
              onGetUserID={loggedInUser}
              onGetProductID={onGetProduct._id}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default FavouriteProducts
