import React, { useState } from 'react'
/*     Components    */
import PopUp from './PopUp'
/*      Icons      */
import ThreeDots from '../../../../assets/manufacturer/More.svg'

const RowContent = ({ data, manufacturerId }) => {
  const [popUp, setPopUp] = useState(false)

  const handlePopup = () => {
    setPopUp(!popUp)
  }

  return (
    <>
      {/*  Image and Name   */}
      <td className="flex h-[103px]">
        <div className="flex p-2 min-w-fit">
          <img src={data.productImage} />
        </div>
        <p className="flex justify-center items-center w-full px-5">
          {data.productName} {data.productVolume ? ` | ${data.productVolume}` : ''}
          {data.productAmount ? ` | ${data.productAmount}` : ''}
        </p>
      </td>
      {/*     Quantity     */}
      <td>{data.quantity} عبوة</td>
      {/*  Total Price   */}
      <td>{data.totalPrice} جنيه</td>
      {/*  Pharmacy Name   */}
      <td>{data.pharmacyName}</td>
      {/*  Phone Number   */}
      <td>{data.phoneNumber}</td>
      {/*  Address   */}
      <td>{data.pharmacyAdress}</td>
      {/*  Order Status   */}
      <td>
        <button className="p-5" onClick={() => handlePopup()}>
          <img src={ThreeDots} />
        </button>
        {popUp && <PopUp onGetHandlePopup={handlePopup} />}
      </td>
    </>
  )
}

export default RowContent
