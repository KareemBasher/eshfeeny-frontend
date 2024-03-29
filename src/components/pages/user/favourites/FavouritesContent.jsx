import React from 'react'
/*     Components      */
import ProductContainer from '../../../common/ProductContainer'

const FavouritesContent = ({ onGetTitle, onGetItems, loggedInUser, favorites }) => {
  return (
    <div className="mr-32 2xl:mr-52">
      <div className="text-right text-[28px] my-10">{onGetTitle}</div>
      <ol className="flex flex-wrap justify-start -mr-2">
        {onGetItems.map((product) => (
          <li key={product._id}>
            <ProductContainer
              onGetProduct={product}
              loggedInUser={loggedInUser}
              favorites={favorites}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FavouritesContent
