import React from 'react'
/*        Components        */
import UserNavigation from '../../common/UserNavigation'
import ImageSlider from './ImageSlider'
import AddContainer from './AddContainer'
import CategoryItems from './CategoryItems'
import Brands from './Brands'

const Main = ({ loggedInUser }) => {
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />

      <div className="mx-36">
        <ImageSlider />
        <AddContainer />

        <CategoryItems onGetTitle="الكحة" loggedInUser={loggedInUser} />
        <CategoryItems onGetTitle="المغص" loggedInUser={loggedInUser} />
        <CategoryItems onGetTitle="امساك" loggedInUser={loggedInUser} />
        <Brands />
      </div>
    </div>
  )
}

export default Main
