import React from 'react'
import PharmacyCartItems from './PharmacyCartItems'
import { Link } from 'react-router-dom'

const PharmacyCartContent = ({
  onGetItems,
  onGetTotal,
  OnGetTitle,
  loggedInUser,
  onRemoveItem,
  click,
  setClick
}) => {
  return (
    <div>
      <div className="text-right text-[28px] my-10 mr-32 2xl:mr-52">{OnGetTitle}</div>

      <div className="flex justify-start mr-32 2xl:mr-52">
        <ol>
          {onGetItems.map(({ product, quantity }) => (
            <li key={product._id}>
              <PharmacyCartItems
                product={product}
                loggedInUser={loggedInUser}
                quantity={quantity}
                onRemoveItem={onRemoveItem}
                click={click}
                setClick={setClick}
              />
            </li>
          ))}
        </ol>
        <div className="w-[333px] h-[188px] border rounded-[10px] mt-5 p-5 mr-5">
          <div className="flex text-[26px] justify-between">
            <p>الاجمالي</p>
            <p className="text-[#0583F2]">{onGetTotal} جنيه</p>
          </div>
          <div className="pt-10">
            <Link to="/pharmacyConfirm">
              <div className="w-full max-w-[472px] h-[58px] rounded-[10px] p-2 text-[24px] text-white bg-blue disabled:bg-[#E5E5E5] disabled:text-[#939393]">
                إتمام الطلب
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PharmacyCartContent
