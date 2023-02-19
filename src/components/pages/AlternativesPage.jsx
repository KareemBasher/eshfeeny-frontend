import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
/*    Components    */
import UserNavigation from '../common/UserNavigation'
import PageEmpty from '../common/PageEmpty'
/*       API       */
import * as ProductsAPI from '../../utils/productsAPI'
/*       Icons       */
import Arrow from '../../assets/common/Arrow.svg'
import ProductContainer from '../common/ProductContainer'
import AlternativeLogo from '../../assets/common/AlternativeLogo.svg'

const AlternativesPage = ({ loggedInUser }) => {
  const params = useParams()
  const [alternative, setAlternative] = useState([])

  useEffect(() => {
    const getAlternative = async () => {
      setAlternative(await ProductsAPI.getAlternatives(params.activeIngredient))
    }
    getAlternative()
  }, [])
  // const removeFromFavourites = (ID, productID) => {
  //   UsersAPI.removeFromFavorites(ID, productID)
  //   setItems(items.filter((product) => product._id !== productID))
  // }
  console.log(alternative.length)
  return (
    <>
      <div>
        <UserNavigation />
        <div className="pt-8 pr-20 text-[16px] text-lightBlue">
          <div className="flex justify-start">
            <Link to="/products" className="hover:underline">
              الرئيسية
            </Link>
            <img src={Arrow} className="mx-2" />
            <Link to={`/products/type/${params.type}`} className="hover:underline">
              {params.type}
            </Link>
            <img src={Arrow} className="mx-2" />
            <Link to={`/products/category/${params.category}`} className="hover:underline">
              {params.category}
            </Link>
            <img src={Arrow} className="mx-2" />
            <Link to={`/products/name/${params.name}`} className="hover:underline">
              {params.name}
            </Link>
            <img src={Arrow} className="mx-2" />
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
                <ProductContainer onGetProduct={product} loggedInUser={loggedInUser} />
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  )
}

export default AlternativesPage
