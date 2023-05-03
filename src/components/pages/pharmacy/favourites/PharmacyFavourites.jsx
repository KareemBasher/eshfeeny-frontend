import React, { useState, useEffect } from 'react'
/*    Components    */
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PageEmpty from '../../../common/PageEmpty'
import PharmacyFavouritesContent from './PharmacyFavouritesContent'
/*    Icons    */
import HeartLight from '../../../../assets/common/HeartLight.svg'

import * as ProductsAPI from '../../../../utils/productsAPI'

const PharmacyFavourits = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([])
  const [favoritesId, setFavouritesId] = useState([])

  useEffect(() => {
    const updateItems = async () => {
      const result = await ProductsAPI.getFavoriteProductsPharmacy(loggedInUser)
      if (result) {
        const IDs = result.map((product) => product._id)
        setFavouritesId(IDs)
      }
      setItems(result ? result : [])
    }
    updateItems()
  }, [])

  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      <div>
        {items.length ? (
          <PharmacyFavouritesContent
            onGetTitle="المنتجات المفضلة"
            onGetItems={items}
            loggedInUser={loggedInUser}
            favorites={favoritesId}
          />
        ) : (
          <PageEmpty
            onGetTitle="المنتجات المفضلة"
            onGetLogo={HeartLight}
            onGetText1="لا توجد أي منتجات مفضلة لديك"
            onGetButtonText="اذهب للتسوق الان"
            onGetPath="/pharmacy"
          />
        )}
      </div>
    </div>
  )
}

export default PharmacyFavourits
