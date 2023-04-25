import React from 'react'
import NavListItems from '../NavListItems'

const NavList = ({ handleShowOverlay, handleHideOverlay }) => {
  return (
    <div className="2xl:mx-8 relative">
      <div className="flex mx-28 2xl:mx-36 justify-evenly text-[20px]">
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetTitle="الأدوية"
          onGetSubItems={[
            'البرد و السعال',
            'مسكنات',
            'الحروق البسيطة',
            'الحموضة وسوء الهضم',
            'الكحة',
            'المغص',
            'امساك',
            'تقوية المناعة',
            'صحة المرأة',
            'عناية الفم',
            'مسكنات الالام الموضعية',
            'مضادات حيوية موضعية',
            'الفيتامينات و المكملات الغذائية'
          ]}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetTitle="الحمايه من الفيروسات"
          onGetSubItems={['تقوية المناعة', 'كمامات و قفازات طبية', 'مطهرات اليد']}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetTitle="منتجات الرجال"
          onGetSubItems={['جل الحلاقة', 'مزيل العرق للرجال', 'مستلزمات الحلاقة']}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetTitle="منتجات المرأة"
          onGetSubItems={['إزالة الشعر', 'مزيل العرق للسيدات', 'فوط صحية']}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetTitle="الأم و الطفل"
          onGetSubItems={['لبن الاطفال', 'الحفاظات و الكريمات', 'العناية بالأم']}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetTitle="العناية بالبشرة و الشعر"
          onGetSubItems={[
            'الحماية من الشمس',
            'العناية باليد و القدم',
            'تفتيح البشرة',
            'غسول الوجه',
            'ماسكات الوجه',
            'مزيل المكياج',
            'بلسم الشعر',
            'شامبو'
          ]}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetTitle="العناية بالاسنان"
          onGetSubItems={['العناية بالفم', 'فرشاة الأسنان', 'معجون الأسنان']}
        />
      </div>
    </div>
  )
}

export default NavList
