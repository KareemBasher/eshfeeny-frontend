import React, { useEffect, useState } from 'react'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import PageEmpty from '../../common/PageEmpty'
import FavouritesContent from './FavouritesContent'
/*    Icons    */
import HeartLight from '../../../assets/common/HeartLight.svg'
/*     API     */
import * as ProductsAPI from '../../../utils/productsAPI'
import * as UsersAPI from '../../../utils/usersAPI'

const Favourites = ({ loggedInUser }) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const updateItems = async () => {
      const result = await ProductsAPI.getFavoriteProducts(loggedInUser)
      setItems(result ? result : [])
    }
    updateItems()
  }, [])

  const removeFromFavourites = (ID, productID) => {
    UsersAPI.removeFromFavorites(ID, productID)
    setItems(items.filter((product) => product._id !== productID))
  }
  return (
    <>
      <UserNavigation />
      <div>
        {items.length ? (
          <FavouritesContent
            onGetTitle="المنتجات المفضلة"
            onGetItems={items}
            onRemoveFavourite={removeFromFavourites}
            loggedInUser={loggedInUser}
          />
        ) : (
          <PageEmpty
            onGetLogo={HeartLight}
            onGetText="لا توجد أي منتجات مفضلة لديك"
            onGetTitle="المنتجات المفضلة"
          />
        )}
      </div>
    </>
  )
}

export default Favourites
