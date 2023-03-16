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

const SearchResults = ({ loggedInUser }) => {
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
        <UserNavigation loggedInUser={loggedInUser} />
        {!products.length ? (
          <PageEmpty
            onGetTitle="البديل"
            onGetText="لا يوجد بديل لهذا الدواء "
            onGetLogo={AlternativeLogo}
          />
        ) : (
          <>
            <div className="text-right text-[28px] m-10 mr-20">نتائج البحث</div>
            <ol className="flex flex-wrap justify-start mr-20">
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
          </>
        )}
      </div>
    </>
  )
}

export default SearchResults
