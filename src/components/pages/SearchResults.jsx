import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/*     Components     */
import UserNavigation from '../common/UserNavigation'
import PageEmpty from '../common/PageEmpty'
import ProductContainer from '../common/ProductContainer'
/*        API        */
import { getMany, getFavoriteProducts } from '../../utils/productsAPI'
/*       Icons       */
import AlternativeLogo from '../../assets/common/AlternativeLogo.svg'

const SearchResults = ({ loggedInUser, empty, logout }) => {
  const params = useParams()

  const [products, setProducts] = useState([])
  const [favouriteProducts, setFavouriteProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getMany(params.searchResults))
      setFavouriteProducts(await getFavoriteProducts(loggedInUser))
    }
    getProducts()
  }, [params])

  const favoriteProductsIDs = favouriteProducts.map((product) => product._id)

  return (
    <>
      <div>
        <UserNavigation loggedInUser={loggedInUser} logout={logout} />
        {empty ? (
          <PageEmpty
            onGetTitle="نتائج البحث"
            onGetText="لم يتم العثور على المنتج"
            onGetLogo={AlternativeLogo}
          />
        ) : (
          <div className="mr-32 2xl:mr-52">
            <div className="text-right text-[28px] my-10">نتائج البحث</div>
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
        )}
      </div>
    </>
  )
}

export default SearchResults
