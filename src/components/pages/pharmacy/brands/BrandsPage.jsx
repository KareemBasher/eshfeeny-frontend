import React from 'react'
import { Link } from 'react-router-dom'
/*    Components    */
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import BrandsList from './BrandsList'
/*       Icons       */
import Arrow from '../../../../assets/common/Arrow.svg'

const BrandsPage = ({ loggedInUser, logout }) => {
  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="pt-8 mr-32 2xl:mr-52 text-[16px] text-blue">
        <div className="flex justify-start">
          <Link to="/pharmacy" className="hover:underline">
            الرئيسية
          </Link>
          <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
          <p className="text-[#1F1F1F]">الماركات</p>
        </div>
      </div>
      <BrandsList />
    </div>
  )
}

export default BrandsPage
