import React, { useEffect, useState } from 'react'
/*     Components     */
import UserNavigation from '../../common/UserNavigation'
import SideBar from '../../common/sideBar/SideBar'
/*     API     */
import { getCategory } from '../../../utils/productsAPI'
import { useParams } from 'react-router-dom'

const CategoreyPage = ({ loggedInUser }) => {
  const { category } = useParams()

  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getCategory(category))
    }
    getProducts()
  }, [category])
console.log(products);
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <div className="mr-32 2xl:mr-52">
        <SideBar />
      </div>
    </div>
  )
}

export default CategoreyPage
