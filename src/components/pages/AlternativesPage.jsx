import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
/*    Components    */
import UserNavigation from '../common/UserNavigation'
import PageEmpty from '../common/PageEmpty'
import ProductContainer from '../common/ProductContainer'
/*       API       */
import { getAlternatives, getProduct } from '../../utils/productsAPI'
import { getUser } from '../../utils/usersAPI'
/*       Icons       */
import Arrow from '../../assets/common/Arrow.svg'
import AlternativeLogo from '../../assets/common/AlternativeLogo.svg'

const AlternativesPage = ({ loggedInUser }) => {
  const params = useParams()
  const [product, setProduct] = useState({})
  const [alternative, setAlternative] = useState([])
  const [favoriteProductsIDs, setFavouriteProductsIDs] = useState([])

  useEffect(() => {
    const getAlternative = async () => {
      const result = await getProduct(params.id)
      if (result) setProduct(result)
      setAlternative(await getAlternatives(params.id))
    }

    const getFavoriteProducts = async () => {
      const result = await getUser(loggedInUser)
      setFavouriteProductsIDs(result.favorites ? result.favorites : [])
    }

    getAlternative()
    getFavoriteProducts()
  }, [])

  return (
    <>
      <div>
        <UserNavigation loggedInUser={loggedInUser} />
        <div className="pt-8 mr-32 2xl:mr-52 text-[16px] text-lightBlue">
          <div className="flex justify-start">
            <Link to="/home" className="hover:underline">
              الرئيسية
            </Link>
            <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
            <Link to={`/products/type/${product.type}`} className="hover:underline">
              {product.type}
            </Link>
            <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
            <Link
              to={`/products/type/${product.type}/category/${product.category}`}
              className="hover:underline"
            >
              {product.category}
            </Link>
            <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
            <Link to={`/product/${product._id}`} className="hover:underline">
              {product.nameAr}
            </Link>
            <img src={Arrow} draggable="false" className="mx-2" alt="Arrow" />
            <p className="text-[#1F1F1F]">البديل</p>
          </div>
        </div>
      </div>

      <div>
        {!alternative.length ? (
          <PageEmpty
            onGetTitle="البديل"
            onGetText="لا يوجد بديل لهذا الدواء "
            onGetLogo={AlternativeLogo}
          />
        ) : (
          <div className="mr-32 2xl:mr-52">
            <div className="text-right text-[28px] my-10">
              <p>البديل</p>
            </div>

            <div>
              <ol className="flex flex-wrap justify-start">
                {alternative.map((product) => (
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
        )}
      </div>
    </>
  )
}

export default AlternativesPage
