import React from 'react'
import UserNavigation from '../../common/UserNavigation'
import Image1 from '../../../assets/insuranceCompanies/Image1.png'
import Image2 from '../../../assets/insuranceCompanies/Image2.png'
import Arrow from '../../../assets/common/Arrow.svg'
import { Link } from 'react-router-dom'

const InsuranceCompanies = ({ loggedInUser }) => {
  const images = [
      { url: Image1, params: 'ميت لايف' },
      { url: Image2, params: 'مصر هيلث كير' }
  ]
  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>
      <div className="flex flex-col text-right mt-16 mr-24">
        <div>
          <div className="flex justify-start mb-10">
            <Link to="/home" className="hover:underline text-lightBlue">
              الرئيسية
            </Link>

            <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
            <p className="text-[#1F1F1F]">كارت التامين</p>
          </div>
        </div>
        <div className="mb-14">
          <p className="text-[26px]">أختر شركة التأمين</p>
        </div>

        <div className="flex ">
          {images.map(({ url, index, params }) => (
            <div
              className="w-[233px] h-[310px] border rounded-[10px] flex justify-center items-center ml-5"
              key={index}
            >
              <Link to={`/insuranceCompanies/${params}/`}>
                <img
                  draggable="false"
                  className="items-center"
                  src={url}
                  alt="inInsuranceCompanies"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InsuranceCompanies
