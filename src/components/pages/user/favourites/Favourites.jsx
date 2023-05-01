import React, { useEffect, useState } from 'react'
/*    Components    */
import UserNavigation from '../../../common/UserNavigation'
import PageEmpty from '../../../common/PageEmpty'
import FavouritesContent from './FavouritesContent'
/*    Icons    */
import HeartLight from '../../../../assets/common/HeartLight.svg'
import GuestLogo from '../../../../assets/common/AlternativeLogo.svg'
/*     API     */
import * as ProductsAPI from '../../../../utils/productsAPI'

const Favourites = ({ loggedInUser, logout }) => {
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
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
        <div>
          <PageEmpty
            onGetTitle="المنتجات المفضلة"
            onGetLogo={GuestLogo}
            onGetText1="أنت الان في وضع الضيف"
            onGetText2="الرجاء تسجيل الدخول للاستمتاع بالمميزات"
            onGetButtonText="تسجيل الدخول"
            onGetPath="./login/user"
          />
        </div>
      ) : (
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
              onGetTitle="المنتجات المفضلة"
              onGetLogo={HeartLight}
              onGetText1="لا توجد أي منتجات مفضلة لديك"
              onGetButtonText="اذهب للتسوق الان"
              onGetPath="/home"
            />
          )}
        </div>
      )}
    </>
  )
}

export default Favourites
