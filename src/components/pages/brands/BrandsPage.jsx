import React from 'react'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import PageEmpty from '../../common/PageEmpty'
import ProductContainer from '../../common/ProductContainer'
/*       Icons       */
import Arrow from '../../../assets/common/Arrow.svg'
import { Link, useParams } from 'react-router-dom'

const BrandsPage = ({ loggedInUser }) => {

  const {brand} = useParams()
  console.log(brand)

  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <div className="pt-8 mr-32 2xl:mr-52 text-[16px] text-lightBlue">
        <div className="flex justify-start">
          <Link to="/home" className="hover:underline">
            الرئيسية
          </Link>
          <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
          <Link to="/brands" className="hover:underline">
            الماركات
          </Link>
          <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
          <p className="text-[#1F1F1F]">{brand}</p>
        </div>
      </div>
    </div>
  )
}

export default BrandsPage