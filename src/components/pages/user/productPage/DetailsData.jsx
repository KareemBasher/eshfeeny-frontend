import React from 'react'
/*     Icons      */
import Bullet from '../../../../assets/common/ListBullet.svg'

const DetailsData = ({ Title, Data }) => {
  return (
    <ul className="text-[20px] mb-12 ">
      <p className="text-[25px] mb-3">{Title}</p>
      {Data &&
        Data.map((data) => (
          <div key={`${data}1`} className="flex items-start pt-3">
            <img
              draggable="false"
              key={`${data}2`}
              src={Bullet}
              className="ml-4 pt-3"
              alt="BulletPoint"
            />
            <li className="text-[20px]" key={`${data}3`}>
              {data}
            </li>
          </div>
        ))}
    </ul>
  )
}

export default DetailsData
