import React from 'react'
/*    Components    */
import UserNavigation from '../../common/UserNavigation'
import ImageSlider from './ImageSlider'
import AddContainer from './AddContainer'

const Main = ({ loggedInUser }) => {
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <ImageSlider />
      <AddContainer />
    </div>
  )
}

export default Main
