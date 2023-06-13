import React from 'react'
/*       components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import Chart from '../chart/Chart'

const manufacturer = ({ loggedInUser, logout }) => {
  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />

      <div className="mx-32 2xl:mx-52 my-10">
        <Chart />
      </div>
    </div>
  )
}

export default manufacturer
