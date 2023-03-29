import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
/*     Components     */
import UserNavigation from '../common/UserNavigation'
import SideBar from '../common/sideBar/SideBar'
import ProductContainer from '../common/ProductContainer'
/*     Icons     */
import Arrow from '../../assets/common/Arrow.svg'
/*     API     */
import { getCategory, getFavoriteProducts } from '../../utils/productsAPI'

const CategoryPage = ({ loggedInUser }) => {
  const { category, type } = useParams()

  const [products, setProducts] = useState([getCategory(category)])
  const [favoriteProductsIDs, setFavoriteProductsIDs] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getCategory(category))
      const favourites = await getFavoriteProducts(loggedInUser)
      setFavoriteProductsIDs(favourites.map((product) => product._id))
    }
    getProducts()
  }, [category])

  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <div className="flex justify-start mr-32 2xl:mr-52 mt-8 text-blue">
        <Link to="/home" className="hover:underline">
          الرئيسية
        </Link>
        <img draggable="false" src={Arrow} className="mx-2" alt="Arrow" />
        <Link to={`/products/type/${type}`} className="hover:underline">
          {type}
        </Link>
        <img draggable="false" src={Arrow} className="mx-2" alt="Arrow" />
        <p className="text-[#1F1F1F]">{category}</p>
      </div>
      <div className="flex mr-32 2xl:mr-52">
        <SideBar onGetActiveType={type} onGetActiveCategory={category} />
        <div className="mr-4">
          <div className="text-right text-[28px] mt-10 mb-3 mr-8">{category}</div>
          {products.length > 1 && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
