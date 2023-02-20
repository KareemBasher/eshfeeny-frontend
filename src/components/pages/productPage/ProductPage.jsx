import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import QuantityController from '../../pages/productPage/QuantityControllerProductDetails'
import ProductDetails from './ProductDetails'
/*       Icons       */
import Arrow from '../../../assets/common/Arrow.svg'
import Alternative from '../../../assets/common/Alternative.svg'
import HeartEmpty from '../../../assets/productPage/HeartEmpty.svg'
import HeartFill from '../../../assets/productPage/HeartFill.svg'
/*       API       */
import * as ProductsAPI from '../../../utils/productsAPI'
import * as UsersAPI from '../../../utils/usersAPI'

// import Image from '../../../../../medicine.png'
// import Image2 from '../../../../../fusi.png'
// import Image3 from '../../../../../fusidine.png'

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

  const handleButton = () => {
    setShowButton(!showButton)
  }

  const params = useParams()
  const [product, setProduct] = useState([])
  const [favouriteProducts, setFavouriteProducts] = useState([])
  const [showFavouriteButton, setShowFavouriteButton] = useState('true')

  useEffect(() => {
    const getProduct = async () => {
      setProduct(await ProductsAPI.getProduct(params.id))
      setFavouriteProducts(await ProductsAPI.getFavoriteProducts(loggedInUser))
    }
    getProduct()
  }, [showFavouriteButton, params])

  const favouriteProductsNames = favouriteProducts.map((product) => product.nameAr)

  const handleRemove = async (userID, productID) => {
    setShowFavouriteButton(!showFavouriteButton)
    await UsersAPI.removeFromFavorites(userID, productID)
  }

  const handleAdd = async (userID, productID) => {
    setShowFavouriteButton(!showFavouriteButton)
    await UsersAPI.addToFavorites(userID, productID)
  }

  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
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
          <Link to={`/products/category/${product.category}`} className="hover:underline">
            {product.category}
          </Link>
          <img src={Arrow} className="mx-2" />
          <p className="text-[#1F1F1F]">{product.nameAr}</p>
        </div>
      </div>
      <div className="flex justify-start pt-8 border-b h-80">
        <section className="flex flex-col overflow-auto pr-20">
          {/*      small Pictures     */}
          {images.map((image) => (
            <div
              key={image}
              className="flex justify-center items-center mb-3 w-20 border border-[#F99D1C] border-opacity-50 rounded-[10px] cursor-pointer"
              onClick={changeImage}
            >
              <img src={image} className="h-20 py-5" />
            </div>
          ))}
        </section>
        {/*      Big Picture         */}
        <div className="flex w-1/2 items-end">
          <div className="w-64 h-fit mb-10 mr-36">
            <img src={currentImage} />
          </div>
        </div>
        {/*     Left Section        */}
        <div className="flex flex-col text-right text-[24px]">
          <p>
            {product.nameAr}
            {product.volume ? ` | ${product.volume}` : ''}
            {product.amount ? ` | ${product.amount}` : ''}
          </p>
          <p className="text-lightBlue py-3">{product.price} جنيه</p>
          {/*     Favourites Heart     */}
          <div className="flex">
            <div className="flex text-[20px]">
              {favouriteProductsNames.includes(
                product.nameAr
              ) /*     Remove from Favourites     */ && (
                <div className="flex">
                  <button className="flex" onClick={() => handleRemove(loggedInUser, params.id)}>
                    <img src={HeartFill} />
                  </button>
                  <p className="mx-2 pt-1">المفضلة</p>
                </div>
              )}
              {!favouriteProductsNames.includes(product.nameAr) /*     Add To Favourites     */ && (
                <div className="flex">
                  <button className="flex" onClick={() => handleAdd(loggedInUser, params.id)}>
                    <img src={HeartEmpty} />
                  </button>
                  <p className="mx-2 pt-1">المفضلة</p>
                </div>
              )}
            </div>
            <Link
              to={`/products/alternatives/${product.type}/${product.category}/${product.nameAr}/${product.activeIngredient}`}
              className="flex text-[20px] items-center mb-4"
            >
              <img src={Alternative} />
              <p className="mr-2">البديل</p>
            </Link>
          </div>
          {showButton && (
            <button
              className="text-white bg-orange rounded-[10px] w-80 h-14"
              onClick={handleButton}
            >
              أضف الى العربة
            </button>
          )}
          {!showButton && (
            <QuantityController
              handleHideComponent={handleButton}
              onGetUserID={loggedInUser}
              onGetProductID={params.id}
            />
          )}
        </div>
      </div>
      <div className="text-right text-[#1F1F1F] pt-8 pr-20">
        <ProductDetails
          onGetDescription={product.description}
          onGetUseCases={product.useCases}
          onGetUsage={product.usage}
          onGetSideEffects={product.sideEffects}
        />
      </div>
    </div>
  )
}

export default ProductPage
