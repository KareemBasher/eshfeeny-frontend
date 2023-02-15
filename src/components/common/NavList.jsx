import React from 'react'
import NavListItems from './NavListItems'
const NavList = () => {
  return (
    <div className="mx-8">
      <div className="flex flex-row justify-evenly text-[20px] w-full">
        <NavListItems
          onGetPath="/products/type/medicine"
          onGetTitle="الأدوية "
          onGetSubItems={[]}
        />
        <NavListItems
          onGetPath="/products/type/viruses"
          onGetTitle="الحمايه من الفيروسات"
          onGetSubItems={[]}
        />
        <NavListItems
          onGetPath="/products/type/menProducts"
          onGetTitle="منتجات الرجال"
          onGetSubItems={[]}
        />
        <NavListItems
          onGetPath="/products/type/womenProducts"
          onGetTitle="منتجات المرأة"
          onGetSubItems={[]}
        />
        <NavListItems
          onGetPath="/products/type/mothers"
          onGetTitle="الأم و الطفل"
          onGetSubItems={[]}
        />
        <NavListItems
          onGetPath="/products/type/skinCare"
          onGetTitle="العناية بالبشرة و الشعر"
          onGetSubItems={[]}
        />
        <NavListItems
          onGetPath="/products/type/dentalHealth"
          onGetTitle="العناية بالاسنان"
          onGetSubItems={[]}
        />
      </div>
    </div>
  )
}

export default NavList
