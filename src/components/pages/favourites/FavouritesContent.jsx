import React from 'react'
import Heart from '../../../assets/common/HeartYellow.svg'
import Pic from '../../../../../comtrex.png'

const FavouritesContent = ({ OnGetTitle, onGetItems }) => {
  return (
    <div>
      <div className="text-right text-[28px] m-10 mr-20">{OnGetTitle}</div>
      <ol className="flex justify-evenly">
        {onGetItems.map((c) => (
          <li key={c.nameEn}>
            <div className="flex flex-col justify-between rounded-lg shadow-md w-[233px] h-[340px] border-[#E7E7E7] border-[0.8px]">
              <img src={Heart} className="w-[22px] box-border mr-3 mt-5" />
              <div className="flex justify-center">
                <img src={Pic} className="w-32 m-5" />
              </div>
              <div className="text-right p-3 text-[18px] h-">
                <p>{c.nameAr}</p>
                <p>{c.volume}</p>
                <p>{c.amount}</p>
                <p className="text-blue py-1">{c.price} جنيه</p>
                <div className="self-center">
                  <button className="my-1 p-1 px-10 rounded-xl text-orange border-orange border-[0.8px]">
                    أضف الى العربة
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FavouritesContent
