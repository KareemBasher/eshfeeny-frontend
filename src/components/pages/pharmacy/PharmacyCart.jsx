import React, { useState } from 'react'
/*    components    */
import PageEmpty from '../../common/PageEmpty'
import PharmacyNavigation from '../../common/PharmacyNavigation'
import PharmacyCartContent from './PharmacyCartContent'
/*    Icons    */
import CartLight from '../../../assets/common/CartLight.svg'

const PharmacyCart = ({ loggedInUser }) => {
  const [items, setItems] = useState([])

  return (
    <div>
      <div>
        <PharmacyNavigation />
      </div>

      <div>
        {items.length ? (
          <div>
            <PharmacyCartContent onGetItems={items} OnGetTitle="سلة التسوق" />
          </div>
        ) : (
          <PageEmpty
            onGetTitle="سلة التسوق"
            onGetLogo={CartLight}
            onGetText="عربة التسوق فارغة "
            onGetPath="/pharmacy"
          />
        )}
      </div>
    </div>
  )
}

export default PharmacyCart
