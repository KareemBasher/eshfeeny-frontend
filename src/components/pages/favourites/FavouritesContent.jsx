import React from 'react'
import Heart from '../../../assets/common/HeartYellow.svg'

const FavouritesContent = ({ OnGetTitle, onGetItems, onRemoveFavourite }) => {
  console.log(onGetItems)
  return (
    <div>
      <div className="text-right text-[28px] m-10 mr-20">{OnGetTitle}</div>
      <ol className="flex justify-start mr-20">
        {onGetItems.map((product) => (
          <li key={product._id}>
            <div className="flex flex-col justify-between rounded-lg shadow-sm w-[233px] h-[340px] border-[#E7E7E7] border-[0.8px] ml-5">
              <button onClick={() => onRemoveFavourite('63d9239b6ff014381890d178', product._id)}>
                <img src={Heart} className="w-[22px] box-border mr-3 mt-5" />
              </button>
              <div className="flex justify-center">
                <img src="" className="w-32 m-5" />
              </div>
              <div className="text-right p-3 text-[18px] h-">
                <p>
                  {product.nameAr} | {product.volume} | {product.amount}
                </p>
                <p className="text-blue py-1">{product.price} جنيه</p>
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
