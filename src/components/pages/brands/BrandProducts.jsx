import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import ProductContainer from '../../common/ProductContainer'
/*       Icons       */
import Arrow from '../../../assets/common/Arrow.svg'
/*       API        */
import { getBrand, getFavoriteProducts } from '../../../utils/productsAPI'

const BrandProducts = ({ loggedInUser, logout }) => {
  const { brand } = useParams()

  const [products, setProducts] = useState([])
  const [favouriteProducts, setFavouriteProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getBrand(brand))
      setFavouriteProducts(await getFavoriteProducts(loggedInUser))
    }
    getProducts()
  }, [brand])

  const favoriteProductsIDs = favouriteProducts.map((product) => product._id)

  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="pt-8 mr-32 2xl:mr-52 text-[16px] text-blue">
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
      <div className="mr-32 2xl:mr-52">
        <div className="text-right text-[28px] my-10">الماركات</div>
        <ol className="flex flex-wrap justify-start -mr-2">
          {products?.map((product) => (
            <li key={product._id}>
              <ProductContainer
                onGetProduct={product}
                loggedInUser={loggedInUser}
                favorites={favoriteProductsIDs}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BrandProducts
