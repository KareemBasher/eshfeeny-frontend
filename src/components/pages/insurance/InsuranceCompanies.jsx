import React from 'react'
import UserNavigation from '../../common/UserNavigation'
import Image1 from '../../../assets/insuranceCompanies/Image1.png'
import Image2 from '../../../assets/insuranceCompanies/Image2.png'
import { Link } from 'react-router-dom'

const InsuranceCompanies = ({ loggedInUser }) => {
  const images = [{ url: Image1 }, { url: Image2 }]
  return (
    <div>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
      </div>

      <div className="flex m-5">
        {images.map(({ url, index }) => (
          <div
            className="w-[233px] h-[310px] border rounded-[10px] flex justify-center items-center m-5"
            key={index}
          >
            <Link>
              <img className="items-center" src={url} alt="inInsuranceCompanies" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InsuranceCompanies
