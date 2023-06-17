import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/*     Components     */
import ManufacturerNavigation from '../../common/ManufacturerNavigation'
import PageEmpty from '../../common/PageEmpty'
import ManufacturerProductContainer from './ManufacturerProductContainer'
/*        API        */
import { getMany } from '../../../utils/productsAPI'
/*       Icons       */
import AlternativeLogo from '../../../assets/common/AlternativeLogo.svg'

const ManufacturerSearchResults = ({ loggedInUser, empty, logout }) => {
  const params = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getMany(params.searchResults))
    }

    if (params.searchResults) getProducts()
  }, [params])

  return (
    <>
      <div>
        <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
        {empty ? (
          <PageEmpty
            onGetTitle="نتائج البحث"
            onGetLogo={AlternativeLogo}
            onGetText1="لم يتم العثور على المنتج"
            onGetButtonText="الرجوع الى الرئيسية"
            onGetPath="/manufacturer"
          />
        ) : (
          <div className="mr-32 2xl:mr-52">
            <div className="text-right text-[28px] my-10">نتائج البحث</div>
            <ol className="flex flex-wrap justify-start -mr-2">
              {products?.map((product) => (
                <li key={product._id}>
                  <ManufacturerProductContainer onGetProduct={product} />
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </>
  )
}

export default ManufacturerSearchResults
