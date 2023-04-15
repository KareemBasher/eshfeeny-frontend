import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
/*     Components     */
import UserNavigation from '../../common/UserNavigation'
import SideBar from '../../common/sideBar/SideBar'
import ProductContainer from '../../common/ProductContainer'
import Pagination from './Pagination'
/*     Icons     */
import Arrow from '../../../assets/common/Arrow.svg'
/*     API     */
import { getCategory, getType, getFavoriteProducts } from '../../../utils/productsAPI'

const CategoryPage = ({ loggedInUser, logout }) => {
  const { category, type } = useParams()

  let result = 12
  if (innerWidth === 1920) {
    result = 15
  }

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(result)
  const [favoriteProductsIDs, setFavoriteProductsIDs] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      if (category) {
        setProducts(await getCategory(category))
      } else {
        setProducts(await getType(type))
      }
      const favourites = await getFavoriteProducts(loggedInUser)
      setFavoriteProductsIDs(favourites.map((product) => product._id))
    }
    getProducts()
  }, [category, type])

  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProducts = products.slice(firstProductIndex, lastProductIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="flex justify-start mr-32 2xl:mr-52 mt-8">
        <Link to="/home" className="hover:underline text-blue">
          الرئيسية
        </Link>
        <img draggable="false" src={Arrow} className="mx-2" alt="Arrow" />
        {category ? (
          <>
            <Link to={`/products/type/${type}`} className="hover:underline text-blue">
              {type}
            </Link>
            <img draggable="false" src={Arrow} className="mx-2" alt="Arrow" />
            <p className="text-[#1F1F1F]">{category}</p>
          </>
        ) : (
          <p>{type}</p>
        )}
      </div>
      <div className="flex mr-32 2xl:mr-52">
        <SideBar onGetActiveType={type} onGetActiveCategory={category} />
        <div className="w-full mr-4">
          {category ? (
            <div className="text-right text-[28px] mt-10 mb-3 mr-8">{category}</div>
          ) : (
            <div className="text-right text-[28px] mt-10 mb-3 mr-8">كل {type}</div>
          )}
          {products.length > 1 && (
            <>
              <ol className="flex flex-wrap justify-start -mr-2">
                {currentProducts?.map((product) => (
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
          <Pagination
            totalProducts={products?.length}
            productsPerPage={productsPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
