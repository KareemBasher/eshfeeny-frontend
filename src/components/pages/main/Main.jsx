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

        <CategoryItems onGetTitle="الكحة" onGetType="الأدوية" loggedInUser={loggedInUser} />
        <CategoryItems onGetTitle="المغص" onGetType="الأدوية" loggedInUser={loggedInUser} />
        <CategoryItems onGetTitle="امساك" onGetType="الأدوية" loggedInUser={loggedInUser} />
        <Brands />
      </div>
    </div>
  )
}

export default Main
