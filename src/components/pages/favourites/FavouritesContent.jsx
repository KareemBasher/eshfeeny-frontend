import React from 'react'
/*     Components      */
import FavouriteProducts from '../../common/ProductContainer'

const FavouritesContent = ({ onGetTitle, onGetItems, onRemoveFavourite, loggedInUser }) => {
  return (
    <div>
      <div className="text-right text-[28px] m-10 mr-20">{onGetTitle}</div>
      <ol className="flex flex-wrap justify-start mr-20">
        {onGetItems.map((product) => (
          <li key={product._id}>
            <FavouriteProducts
              onGetProduct={product}
              onRemoveFavourite={onRemoveFavourite}
              loggedInUser={loggedInUser}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FavouritesContent
