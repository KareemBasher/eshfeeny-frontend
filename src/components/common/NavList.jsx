import React from 'react'
import { Link } from 'react-router-dom'
const NavList = () => {
  return (
    <div>
          <div className="flex flex-row justify-evenly text-[20px] w-full  ">
        <Link>الأدوية</Link>
        <Link> الحمايه من الفيروسات</Link>
        <Link>منتجات المرأه</Link>
        <Link>الأم و الطفل</Link>
        <Link>العناية بالبشرة و الشعر</Link>
        <Link>العناية بالاسنان</Link>
        <Link>منتجات الرجال</Link>
      </div>
    </div>
  )
}

export default NavList
