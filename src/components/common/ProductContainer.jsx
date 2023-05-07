import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
/*       Icons       */
import HeartEmpty from '../../assets/common/HeartYellowEmpty.svg'
import HeartFill from '../../assets/common/HeartYellow.svg'
/*     Components      */
import QuantityController from './QuantityController'
/*     API     */
import * as UsersAPI from '../../utils/usersAPI'

const ProductContainer = ({ onGetProduct, loggedInUser, favorites, onGetType }) => {
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
    <div className="flex flex-col justify-between rounded-[10px] hover:shadow-xl transition-all duration-300 shadow-sm w-[233px] h-[340px] border-[#E7E7E7] border-[0.8px] mx-2 my-4">
      <button
        className="w-[22px] box-border mr-3 mt-5"
        onClick={() => (itemInFavorites ? handleRemove() : handleAdd())}
      >
        {loggedInUser !== '6439bd5e1c12d023717e2be5' && (
          <img
            draggable="false"
            src={itemInFavorites ? HeartFill : HeartEmpty}
            alt={itemInFavorites ? 'Remove from favorites' : 'add to favorites'}
          />
        )}
      </button>
      <Link
        to={
          onGetType === 'pharmacy'
            ? `/pharmacyProduct/${onGetProduct._id}`
            : `/product/${onGetProduct._id}`
        }
        className="flex justify-center max-h-[30%]"
      >
        <img src={onGetProduct?.images} draggable="false" alt="Product" />
      </Link>
      <div className="text-right px-3 text-[18px]">
        <Link
          to={
            onGetType === 'pharmacy'
              ? `/pharmacyProduct/${onGetProduct._id}`
              : `/product/${onGetProduct._id}`
          }
        >
          <p>
            {onGetProduct.nameAr}
            {onGetProduct.volume ? ` | ${onGetProduct.volume}` : ''}
            {onGetProduct.amount ? ` | ${onGetProduct.amount}` : ''}
          </p>
        </Link>
        <p className="text-lightBlue my-3">{onGetProduct.price} جنيه</p>
        <div className="flex justify-center">
          {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
            <button
              className="my-1 h-[40px] px-10 mb-4 rounded-[10px] text-white bg-orange"
              onClick={() => (window.location.href = '/cart')}
            >
              أضف الى العربة
            </button>
          ) : (
            <div>
              {showButton && (
                <button
                  className="my-1 h-[40px] px-10 mb-4 rounded-[10px] text-white bg-orange"
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
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductContainer
