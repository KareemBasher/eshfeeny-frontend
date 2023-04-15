import React from 'react'

const PharmacyFavouritesContent = ({ onGetTitle, onGetItems, loggedInUser }) => {
  return (
    <div>
      <div className="text-right text-[28px] my-10 mr-32 2xl:mr-52">{onGetTitle}</div>
    </div>
  )
}

export default PharmacyFavouritesContent
