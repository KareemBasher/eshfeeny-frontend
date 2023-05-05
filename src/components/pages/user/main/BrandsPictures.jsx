import React from 'react'
import { Link } from 'react-router-dom'

const BrandsPictures = ({ onGetImage, onGetPath, onGetType }) => {
  return (
    <Link
      to={onGetType === 'pharmacy' ? `/pharmacyBrands/${onGetPath}` : `/brands/${onGetPath}`}
      className="flex flex-col justify-center p-5 rounded-lg hover:shadow-xl transition-all duration-300 shadow-sm w-[233px] h-[195px] border-[#E7E7E7] border-[0.8px] mx-2 my-4"
    >
      <img src={onGetImage} />
    </Link>
  )
}

export default BrandsPictures
