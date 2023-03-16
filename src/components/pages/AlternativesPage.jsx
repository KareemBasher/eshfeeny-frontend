import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
/*    Components    */
import UserNavigation from '../common/UserNavigation'
import PageEmpty from '../common/PageEmpty'
import ProductContainer from '../common/ProductContainer'
/*       API       */
import { getAlternatives } from '../../utils/productsAPI'
import { getUser } from '../../utils/usersAPI'
/*       Icons       */
import Arrow from '../../assets/common/Arrow.svg'
import AlternativeLogo from '../../assets/common/AlternativeLogo.svg'

const AlternativesPage = ({ loggedInUser }) => {
  const params = useParams()
  const [alternative, setAlternative] = useState([])
  const [favoriteProductsIDs, setFavouriteProductsIDs] = useState([])

  useEffect(() => {
    const getAlternative = async () => {
      setAlternative(await getAlternatives(params.activeIngredient))
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
        <div className="pt-8 pr-20 text-[16px] text-lightBlue">
          <div className="flex justify-start">
            <Link to="/products" className="hover:underline">
              الرئيسية
            </Link>
            <img src={Arrow} className="mx-2" alt="Arrow" />
            <Link to={`/products/type/${params.type}`} className="hover:underline">
              {params.type}
            </Link>
            <img src={Arrow} className="mx-2" alt="Arrow" />
            <Link to={`/products/category/${params.category}`} className="hover:underline">
              {params.category}
            </Link>
            <img src={Arrow} className="mx-2" alt="Arrow" />
            <Link to={`/products/name/${params.name}`} className="hover:underline">
              {params.name}
            </Link>
            <img src={Arrow} className="mx-2" alt="Arrow" />
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
          <ol className="flex flex-wrap justify-start mr-20">
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
        )}
      </div>
    </>
  )
}

export default AlternativesPage
