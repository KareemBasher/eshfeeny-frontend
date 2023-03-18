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
      <ImageSlider />
      <AddContainer />
      <CategoryItems onGetTitle="الكحة" loggedInUser={loggedInUser} />
      <CategoryItems onGetTitle="المغص" loggedInUser={loggedInUser} />
      <CategoryItems onGetTitle="امساك" loggedInUser={loggedInUser} />
    </div>
  )
}

export default Main
