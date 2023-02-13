import React from 'react'
/*     Components      */
import FavouriteProducts from './FavouriteProducts'

const FavouritesContent = ({ onGetTitle, onGetItems, onGetCartItems, onRemoveFavourite }) => {
  // const cartItemsID = onGetCartItems.map((item) => item.id)
  console.log(onGetCartItems)
  return (
    <div>
      <div className="text-right text-[28px] m-10 mr-20">{onGetTitle}</div>
      <ol className="flex flex-wrap justify-start mr-20">
        {onGetItems.map((product) => (
          <li key={product._id}>
            <FavouriteProducts onGetProduct={product} onRemoveFavourite={onRemoveFavourite} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FavouritesContent
