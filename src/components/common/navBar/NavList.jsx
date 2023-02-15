import React from 'react'
import NavListItems from '../NavListItems'
const NavList = ({ handleShowOverlay, handleHideOverlay }) => {
  return (
    <div className="mx-8 relative">
      <div className="flex flex-row justify-evenly text-[20px] w-full">
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetPath="/products/type/medicine"
          onGetTitle="الأدوية "
          onGetSubItems={[
            'البرد و السعال',
            'مسكنات',
            'الحروق البسيطة',
            'الحموضة و سوء الهضم',
            'الكحة',
            'المغص',
            'الامساك',
            'تقوية المناعة',
            'صحة المرأة',
            'عناية اللفم',
            'مسكنات الالام الموضعية',
            'مضادات حيوية موضعية',
            'الفيتامينات و المكملات الغذائية'
          ]}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetPath="/products/type/viruses"
          onGetTitle="الحمايه من الفيروسات"
          onGetSubItems={[
            'الحماية من الفيروسات',
            'تقوية المناعة',
            'كمامات و قفازات طبية',
            'مطهرات اليد'
          ]}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetPath="/products/type/menProducts"
          onGetTitle="منتجات الرجال"
          onGetSubItems={['كل منتجات الرجال', 'جل الحلاقة', 'مزيل العرق', 'مستلزمات الحلاقة']}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetPath="/products/type/womenProducts"
          onGetTitle="منتجات المرأة"
          onGetSubItems={['كل منتجات المرأة', 'إزالة الشعر', 'مزيل العرق', 'فوط صحية']}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetPath="/products/type/mothers"
          onGetTitle="الأم و الطفل"
          onGetSubItems={[
            'كل الأم و  الطفل',
            'لبن الاطفال',
            'الخفاضات و الكريمات',
            'العناية بالأم'
          ]}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetPath="/products/type/skinCare"
          onGetTitle="العناية بالبشرة و الشعر"
          onGetSubItems={[
            'كل العناية بالبشرة و الشعر',
            'الحماية من الشمس',
            'العناية باليد و القدم',
            'تفتيح البشرة',
            'غسول الوجه',
            'ماسكات الوجه',
            'مزيل المكياج',
            'بلسم الشعر ',
            'شامبو'
          ]}
        />
        <NavListItems
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetPath="/products/type/dentalHealth"
          onGetTitle="العناية بالاسنان"
          onGetSubItems={['كل العناية بالأسنان', 'العناية بالفم', 'فرشاة الأسنان', 'معجون الأسنان']}
        />
      </div>
    </div>
  )
}

export default NavList
