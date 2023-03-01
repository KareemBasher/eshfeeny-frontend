import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
/*       Icons       */
import HeartEmpty from '../../assets/common/HeartYellowEmpty.svg'
import HeartFill from '../../assets/common/HeartYellow.svg'
/*     Components      */
import QuantityController from './QuantityController'
/*     API     */
import * as UsersAPI from '../../utils/usersAPI'

const ProductContainer = ({ onGetProduct, loggedInUser, favorites }) => {
  const [showButton, setShowButton] = useState(true)
  const [itemInFavorites, setItemInFavorites] = useState(false)

  useEffect(() => {
    if (favorites?.includes(onGetProduct._id)) setItemInFavorites(true)
  }, [favorites])

  const handleShowButton = () => {
    setShowButton(true)
  }

  const handleHideButton = () => {
    setShowButton(false)
  }

  const handleRemove = async () => {
    await UsersAPI.removeFromFavorites(loggedInUser, onGetProduct._id)
    setItemInFavorites(false)
  }

  const handleAdd = async () => {
    await UsersAPI.addToFavorites(loggedInUser, onGetProduct._id)
    setItemInFavorites(true)
  }

  return (
    <div className="flex flex-col justify-between rounded-lg shadow-sm w-[233px] h-[340px] border-[#E7E7E7] border-[0.8px] ml-5 my-4">
      <button
        className="w-[22px] box-border mr-3 mt-5"
        onClick={() => (itemInFavorites ? handleRemove() : handleAdd())}
      >
        <img
          src={itemInFavorites ? HeartFill : HeartEmpty}
          alt={itemInFavorites ? 'Remove from favorites' : 'add to favorites'}
        />
      </button>
      <Link to={`/product/${onGetProduct._id}`} className="flex justify-center">
        <img src="" className="w-32 m-5" alt="Product" />
      </Link>
      <div className="text-right p-3 text-[18px]">
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

export default ProductContainer
