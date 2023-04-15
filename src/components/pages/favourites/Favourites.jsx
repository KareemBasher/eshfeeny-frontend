import React, { useEffect, useState } from 'react'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import PageEmpty from '../../common/PageEmpty'
import FavouritesContent from './FavouritesContent'
/*    Icons    */
import HeartLight from '../../../assets/common/HeartLight.svg'
/*     API     */
import * as ProductsAPI from '../../../utils/productsAPI'

const Favourites = ({ loggedInUser }) => {
  const [items, setItems] = useState([])
  const [favoriteProductsIDs, setFavouriteProductsIDs] = useState([])

  useEffect(() => {
    const updateItems = async () => {
      const result = await ProductsAPI.getFavoriteProducts(loggedInUser)
      if (result) {
        const IDs = result.map((product) => product._id)
        setFavouriteProductsIDs(IDs)
      }
      setItems(result ? result : [])
    }
    updateItems()
  }, [])

  return (
    <>
      <UserNavigation loggedInUser={loggedInUser} />
      <div>
        {items.length ? (
          <FavouritesContent
            onGetTitle="المنتجات المفضلة"
            onGetItems={items}
            loggedInUser={loggedInUser}
            favorites={favoriteProductsIDs}
          />
        ) : (
          <PageEmpty
            onGetLogo={HeartLight}
            onGetText="لا توجد أي منتجات مفضلة لديك"
            onGetTitle="المنتجات المفضلة"
            onGetPath="./home"
          />
        )}
      </div>
    </>
  )
}

export default Favourites
