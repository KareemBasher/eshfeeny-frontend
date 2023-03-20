import React from 'react'
/*        Components        */
import UserNavigation from '../../common/UserNavigation'
import ImageSlider from './ImageSlider'
import AddContainer from './AddContainer'
import CategoryItems from './CategoryItems'

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
      </div>
    </div>
  )
}

export default Main
