import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import QuantityController from '../../pages/productPage/QuantityControllerProductDetails'
import ProductDetails from './ProductDetails'
/*       Icons       */
import Arrow from '../../../assets/common/Arrow.svg'
import Alternative from '../../../assets/common/Alternative.svg'
/*       API       */
import * as ProductsAPI from '../../../utils/productsAPI'

const ProductPage = ({ loggedInUser }) => {
  const images = []
  const [currentImage, setCurrentImage] = useState([])
  const changeImage = (e) => {
    // setCurrentImage(e.target.src)
    if (e.target.src) {
      setCurrentImage(e.target.src)
    } else {
      setCurrentImage(e.target.firstChild.src)
    }
  }

  const [showButton, setShowButton] = useState(true)
  const handleShowButton = () => {
    setShowButton(true)
  }
  const handleHideButton = () => {
    setShowButton(false)
  }

  const params = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const getProduct = async () => {
      setProduct(await ProductsAPI.getProduct(params.id))
    }
    getProduct()
  }, [])
  return (
    <div>
      <UserNavigation />
      <div className="pt-8 pr-20 text-[16px] text-lightBlue">
        <div className="flex justify-start">
          <Link to="/products" className="hover:underline">
            الرئيسية
          </Link>
          <img src={Arrow} className="mx-2" />
          <Link to={`/products/type/${product.type}`} className="hover:underline">
            {product.type}
          </Link>
          <img src={Arrow} className="mx-2" />
          <Link
            to={`/products/type/${product.type}/${product.category}`}
            className="hover:underline"
          >
            {product.category}
          </Link>
          <img src={Arrow} className="mx-2" />
          <p className="text-[#1F1F1F]">{product.nameAr}</p>
        </div>
      </div>
      <div className="flex justify-start pt-8 border-b h-80">
        <section className="flex flex-col overflow-auto pr-20 min-w-fit">
          {/*      small Pictures         */}
          {images.map((image) => (
            <div
              key={image}
              className="flex justify-center py-5 mb-3 w-20 h-20 border border-[#F99D1C] border-opacity-50 rounded-[10px] cursor-pointer"
              onClick={changeImage}
            >
              <img src={image} />
            </div>
          ))}
        </section>
        {/*      Big Picture         */}
        <div className="flex w-fit items-end">
          <div className="w-64 h-fit mb-10 mr-36">
            <img src={currentImage} />
          </div>
        </div>
        <div className="flex flex-col text-right w-full text-[24px] pt-10 pr-48">
          <p>
            {product.nameAr}
            {product.volume ? ` | ${product.volume}` : ''}
            {product.amount ? ` | ${product.amount}` : ''}
          </p>
          <p className="text-lightBlue py-3">{product.price}جنيه</p>
          <div className="flex text-[20px] items-center mb-4">
            <img src={Alternative} />
            <p className="mr-2">البديل</p>
          </div>

          {showButton && (
            <button
              className="text-white bg-orange rounded-[10px] w-80 h-14"
              onClick={handleHideButton}
            >
              أضف الى العربة
            </button>
          )}
          {!showButton && (
            <QuantityController
              handleHideComponent={handleShowButton}
              onGetUserID={loggedInUser}
              onGetProductID={params.id}
            />
          )}
        </div>
      </div>
      <div className="text-right pt-8 pr-20">
        <ProductDetails
          onGetDescription={product.description}
          onGetUseCases={product.useCases}
          onGetUsage={product.usage}
          onGetSideEffects={product.sideEffects}
        />
        {/* <p className="text-[28px]">الوصف:</p>
        <p className="text-[24px] text-[#1F1F1F] py-4">{product.description}</p>
        <p className="text-[28px]">دواعي الاستخدام:</p>
        <ol className="text-[24px] text-[#1F1F1F] py-4">
          <li>{product.useCases}</li>
        </ol>
        <p className="text-[28px]">طريقة الاستعمال:</p>
        <p className="text-[24px] text-[#1F1F1F] py-4">{product.usage}</p>
        <p className="text-[28px]">الأعراض الجانبية:</p>
        <p className="text-[24px] text-[#1F1F1F] py-4">{product.sideEffects}</p> */}
      </div>
    </div>
  )
}

export default ProductPage
