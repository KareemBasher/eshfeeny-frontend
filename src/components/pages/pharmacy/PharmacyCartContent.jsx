import React from 'react'

const PharmacyCartContent = ({ OnGetTitle, onGetItems }) => {
  return (
    <div>
      <div>
        <p className="text-right text-[28px] my-10 mr-32 2xl:mr-52">{OnGetTitle}</p>
      </div>
    </div>
  )
}

export default PharmacyCartContent
