import React from 'react'
/*       components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import ManufacturerCategoryItems from '../ManufacturerCategoryItems'
import Chart from '../chart/Chart'

const manufacturer = ({ loggedInUser, logout }) => {
  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />

      <div className="mx-32 2xl:mx-52 my-10">
        <Chart />
      </div>

      <ManufacturerCategoryItems
        onGetTitle="الأكثر مبيعا"
        onGetType="null"
        onGetCategory="مسكنات"
        onGetContainer="one"
        loggedInUser={loggedInUser}
      />
      <ManufacturerCategoryItems
        onGetTitle="العروض الأسبوعية"
        onGetType="null"
        onGetCategory="الكحة"
        onGetContainer="two"
        loggedInUser={loggedInUser}
      />
      <ManufacturerCategoryItems
        onGetTitle="قرب لانتهاء الصلاحية"
        onGetType="الأدوية"
        onGetCategory="مسكنات"
        onGetContainer="three"
        loggedInUser={loggedInUser}
      />
    </div>
  )
}

export default manufacturer
