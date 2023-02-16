import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
/*    Components    */
import UserNavigation from '../common/UserNavigation'
/*       API       */
import * as ProductsAPI from '../../utils/productsAPI' //getProduct

const ProductPage = () => {
  const params = useParams()
  const productID = useState(params.id)
  return (
    <div>
      <UserNavigation />
    </div>
  )
}

export default ProductPage
