import React from 'react'
/*        Components        */
import UserNavigation from '../../common/UserNavigation'
import ImageSlider from './ImageSlider'
import AddContainer from './AddContainer'
import CategoryItems from './CategoryItems'
import Brands from './Brands'

const Main = ({ loggedInUser, logout }) => {
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />

      <div className="2xl:mx-28">
        <ImageSlider />
        <AddContainer />

        <CategoryItems
          onGetTitle="احتياجات الصيف"
          onGetType="العناية بالبشرة و الشعر"
          onGetCategory="get type"
          onGetContainer="one"
          loggedInUser={loggedInUser}
        />
        <CategoryItems
          onGetTitle="لصحة أفضل"
          onGetType="الأدوية"
          onGetCategory="الفيتامينات و المكملات الغذائية"
          onGetContainer="two"
          loggedInUser={loggedInUser}
        />
        <CategoryItems
          onGetTitle="بديل للسكر"
          onGetType="الأدوية"
          onGetCategory="بديل للسكر"
          onGetContainer="three"
          loggedInUser={loggedInUser}
        />
        <Brands />
      </div>
    </div>
  )
}

export default Main
