import React from 'react'
/*     Components      */
import PharmacyProductContainer from '../../common/PharmacyProductContainer'

const PharmacyFavouritesContent = ({ onGetTitle, onGetItems, loggedInUser, favorites }) => {``
  return (
    <div className="mr-32 2xl:mr-52">
      <div className="text-right text-[28px] my-10">{onGetTitle}</div>
      <ol className="flex flex-wrap justify-start -mr-2">
        {onGetItems.map((product) => (
          <li key={product._id}>
            <PharmacyProductContainer
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

export default PharmacyFavouritesContent
