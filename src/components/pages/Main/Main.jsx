import React from 'react'
/*        Components        */
import UserNavigation from '../../common/UserNavigation'
import ImageSlider from './ImageSlider'
import AddContainer from './AddContainer'
import CatigoryItems from './CatigoryItems'

const Main = ({ loggedInUser }) => {
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <ImageSlider />
      <AddContainer />
      <CatigoryItems onGetTitle="الكحة" loggedInUser={loggedInUser} />
      <CatigoryItems onGetTitle="المغص" loggedInUser={loggedInUser} />
      <CatigoryItems onGetTitle="امساك" loggedInUser={loggedInUser} />
    </div>
  )
}

export default Main