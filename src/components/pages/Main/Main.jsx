import React from 'react'
import UserNavigation from '../../common/UserNavigation'
import ImageSlider from './ImageSlider'

const Main = ({ loggedInUser }) => {
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <ImageSlider />
    </div>
  )
}

export default Main
