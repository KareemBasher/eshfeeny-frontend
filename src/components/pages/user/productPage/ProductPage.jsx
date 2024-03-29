import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
/*    Components    */
import UserNavigation from '../../../common/UserNavigation'
import QuantityController from './QuantityControllerProductDetails'
import ProductDetails from './ProductDetails'
/*       Icons       */
import Arrow from '../../../../assets/common/Arrow.svg'
import Alternative from '../../../../assets/common/Alternative.svg'
import HeartEmpty from '../../../../assets/productPage/HeartEmpty.svg'
import HeartFill from '../../../../assets/productPage/HeartFill.svg'
/*       API       */
import { getProduct, getFavoriteProducts } from '../../../../utils/productsAPI'
import * as UsersAPI from '../../../../utils/usersAPI'

const ProductPage = ({ loggedInUser, logout }) => {
  const [showButton, setShowButton] = useState(true)

  const handleButton = () => {
    setShowButton(!showButton)
  }

  const params = useParams()
  const [product, setProduct] = useState([])
  const [favouriteProducts, setFavouriteProducts] = useState([])
  const [showFavouriteButton, setShowFavouriteButton] = useState('true')
  const [currentImage, setCurrentImage] = useState('')

  useEffect(() => {
    const getDetails = async () => {
      setProduct(await getProduct(params.id))
      setFavouriteProducts(await getFavoriteProducts(loggedInUser))
    }
    getDetails()
    setShowButton(true)
  }, [showFavouriteButton, params])

  useEffect(() => {
    setCurrentImage(product.images)
  }, [product.images])

  const changeImage = (e) => {
    if (e.target.src) {
      setCurrentImage(e.target.src)
    } else {
      setCurrentImage(e.target.firstChild.src)
    }
  }

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
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="pt-8 text-[16px] text-blue">
        <div className="flex justify-start mr-32 2xl:mr-52">
          <Link to="/home" className="hover:underline">
            الرئيسية
          </Link>
          <img draggable="false" src={Arrow} className="mx-2" alt="Arrow" />
          <Link to={`/products/type/${product.type}`} className="hover:underline">
            {product.type}
          </Link>
          <img draggable="false" src={Arrow} className="mx-2" alt="Arrow" />
          <Link
            to={`/products/type/${product.type}/category/${product.category}`}
            className="hover:underline"
          >
            {product.category}
          </Link>
          <img draggable="false" src={Arrow} className="mx-2" alt="Arrow" />
          <p className="text-[#1F1F1F]">{product.nameAr}</p>
        </div>
      </div>
      <div className="flex justify-start pt-8 border-b h-80">
        <section className="flex flex-col overflow-auto mr-32 2xl:mr-52">
          {/*      small Pictures     */}
          {product.images &&
            product.images.map((image) => (
              <div
                key={image}
                className="flex justify-center items-center mb-3 h-[70px] w-[70px] border border-[#F99D1C] border-opacity-50 rounded-[10px] cursor-pointer"
                onClick={changeImage}
              >
                <img draggable="false" src={image} className="h-20 py-5" alt="ProductAltImage" />
              </div>
            ))}
        </section>
        {/*      Big Picture         */}
        <div className="flex w-2/5 items-end">
          <div className="w-64 h-fit mb-10 mr-36">
            <img
              draggable="false"
              src={currentImage}
              className="max-h-[15rem]"
              alt="ProductMainImage"
            />
          </div>
        </div>
        {/*     Favourite and Alternative buttons     */}
        <div className="flex flex-col">
          {/*     Favourites Heart     */}
          <div className="flex mb-5 group relative">
            <span className="absolute bg-[#e7e7e7] px-[10px] py-[5px] left-[130%] rounded-[10px] opacity-0 group-hover:opacity-100 transition ease-in delay-500 duration-200">
              المفضلة
            </span>
            {/*     Remove from Favourites     */}
            {favouriteProductsNames.includes(product.nameAr) && (
              <div
                className="flex justify-center items-center w-[38px] h-[38px] shadow-md rounded-full bg-[#F7F7F7]"
                onClick={() => handleRemove(loggedInUser, params.id)}
              >
                <button className="flex">
                  <img draggable="false" src={HeartFill} alt="HeartIcon" />
                </button>
              </div>
            )}
            {/*     Add To Favourites     */}
            {!favouriteProductsNames.includes(product.nameAr) && (
              <div
                className="flex justify-center items-center w-[38px] h-[38px] shadow-md rounded-full bg-[#F7F7F7]"
                onClick={() => handleAdd(loggedInUser, params.id)}
              >
                <button className="flex">
                  <img draggable="false" src={HeartEmpty} alt="HeartIcon" />
                </button>
              </div>
            )}
          </div>
          {/*     Alternative     */}
          <Link
            to={`/alternatives/${product._id}/`}
            className="flex justify-center items-center w-[38px] h-[38px] shadow-md rounded-full bg-[#F7F7F7] group relative"
          >
            <span className="absolute bg-[#e7e7e7] px-[10px] py-[5px] left-[130%] rounded-[10px] opacity-0 group-hover:opacity-100 transition ease-in delay-500 duration-200">
              البديل
            </span>
            <img draggable="false" src={Alternative} alt="AltProduct" />
          </Link>
        </div>
        {/*     Left Section        */}
        <div className="flex flex-col text-right text-[24px] pr-5">
          <p>
            {product.nameAr}
            {product.volume ? ` | ${product.volume}` : ''}
            {product.amount ? ` | ${product.amount}` : ''}
          </p>
          <p className="text-lightBlue py-3 pb-5">{product.price} جنيه</p>
          {showButton && (
            <button
              disabled={loggedInUser === '6439bd5e1c12d023717e2be5'}
              className="text-white bg-orange rounded-[10px] w-[400px] h-[56px] disabled:bg-[#e5e5e5] disabled:text-[#939393]"
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
      <div className="text-right text-[#1F1F1F] pt-8 mr-32 2xl:mr-52">
        <ProductDetails
          onGetDescription={product.description}
          onGetUseCases={product.useCases}
          onGetUsage={product.usage}
          onGetSideEffects={product.sideEffects}
          onGetWarning={product.warning}
        />
      </div>
    </div>
  )
}

export default ProductPage
