import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
/*      Components       */
import ProductContainer from '../../common/ProductContainer'
/*       Icons       */
import ArrowOrange from '../../../assets/mainPage/ArrowOrange.svg'
/*       API        */
import { getCategory, getFavoriteProducts } from '../../../utils/productsAPI'
import { useState } from 'react'

const CategoryItems = ({ onGetTitle, loggedInUser }) => {
  const [products, setProducts] = useState([])
  const [favouriteProducts, setFavouriteProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getCategory(onGetTitle))
      setFavouriteProducts(await getFavoriteProducts(loggedInUser))
    }
    getProducts()
  }, [])

  const favoriteProductsIDs = favouriteProducts.map((product) => product._id)

  return (
    <div className="mx-36 mb-10">
      <div className="flex justify-between">
        <p className="text-right text-[26px] pb-3">{onGetTitle}</p>
        <Link
          to={`products/category/${onGetTitle}`}
          className="flex border border-orange py-3 px-5 rounded-[10px]"
        >
          <p className="text-left text-orange text-[22px] whitespace-nowrap">عرض الكل</p>
          <img src={ArrowOrange} className="pr-2" />
        </Link>
      </div>
      <div className=" w-full overflow-x-auto">
        <ol className="flex justify-start">
          {products.map((product) => (
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

export default CategoryItems
