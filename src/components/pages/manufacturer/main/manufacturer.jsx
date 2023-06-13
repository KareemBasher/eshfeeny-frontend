import React from 'react'
/*       components       */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import ManufacturerCategoryItems from '../ManufacturerCategoryItems'
import Chart from '../chart/Chart'

const manufacturer = ({ loggedInUser, logout }) => {
  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <ManufacturerCategoryItems
        onGetTitle="الأكثر مبيعا"
        onGetType="الحمايه من الفيروسات"
        onGetCategory="تقوية المناعة"
        onGetContainer="one"
        loggedInUser={loggedInUser}
      />
      <ManufacturerCategoryItems
        onGetTitle="العروض الأسبوعية"
        onGetType="الأدوية"
        onGetCategory="الكحة"
        onGetContainer="two"
        loggedInUser={loggedInUser}
      />
      <ManufacturerCategoryItems
        onGetTitle="قرب لانتهاء الصلاحية"
        onGetType="الأدوية"
        onGetCategory="مسكنات"
        onGetContainer="two"
        loggedInUser={loggedInUser}
      />

      <div className="mx-32 2xl:mx-52 my-10">
        <Chart />
      </div>
    </div>
  )
}

export default manufacturer
