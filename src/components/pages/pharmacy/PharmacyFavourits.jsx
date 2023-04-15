import React, { useState } from 'react'
/*    Components    */
import PharmacyNavigation from '../../common/PharmacyNavigation'
import PageEmpty from '../../common/PageEmpty'
import PharmacyFavouritesContent from './PharmacyFavouritesContent'
/*    Icons    */
import HeartLight from '../../../assets/common/HeartLight.svg'

const PharmacyFavourits = ({ loggedInUser }) => {
  const [items, setItems] = useState([])

  return (
    <div>
      <div>
        <PharmacyNavigation />
      </div>

      <div>
        <div>
          {items.length ? (
            <div>
              <PharmacyFavouritesContent
                onGetItems={items}
                onGetTitle="المنتجات المفضلة"
                loggedInUser={loggedInUser}
              />
            </div>
          ) : (
            <PageEmpty
              onGetLogo={HeartLight}
              onGetText="لا توجد أي منتجات مفضلة لديك"
              onGetTitle="المنتجات المفضلة"
              onGetPath="/pharmacy"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PharmacyFavourits
