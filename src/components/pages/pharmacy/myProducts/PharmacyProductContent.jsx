import React from 'react'
/*     components     */
import PharmacyProductItems from './PharmacyProductItems'

const PharmacyProductContent = ({ items }) => {
  return (
    <div className="justify-start mr-32 2xl:mr-52 ">
      <ol className="flex flex-wrap justify-start -mr-2">
        {items.map((item) => (
          <ol key={item._id}>
            <PharmacyProductItems item={item} />
          </ol>
        ))}
      </ol>
    </div>
  )
}

export default PharmacyProductContent
