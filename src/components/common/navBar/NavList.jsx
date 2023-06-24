import React from 'react'
import NavListItems from './NavListItems'

const NavList = ({ handleShowOverlay, handleHideOverlay, onGetType, setCurrentPage }) => {
  const data = [
    {
      type: 'medicine',
      title: 'الأدوية',
      category: [
        'البرد و السعال',
        'مسكنات',
        'الحروق البسيطة',
        'الحموضة وسوء الهضم',
        'الكحة',
        'المغص',
        'امساك',
        'صحة المرأة',
        'عناية الفم',
        'مسكنات الالام الموضعية',
        'مضادات حيوية موضعية',
        'الفيتامينات و المكملات الغذائية',
        'بديل للسكر'
      ]
    },
    {
      type: 'viruses',
      title: 'الحمايه من الفيروسات',
      category: ['تقوية المناعة', 'كمامات و قفازات طبية', 'مطهرات اليد']
    },
    {
      type: 'menProducts',
      title: 'منتجات الرجال',
      category: ['جل الحلاقة', 'مزيل العرق للرجال', 'مستلزمات الحلاقة']
    },
    {
      type: 'womenProducts',
      title: 'منتجات المرأة',
      category: ['إزالة الشعر', 'مزيل العرق للسيدات', 'فوط صحية']
    },
    {
      type: 'mothers',
      title: 'الأم و الطفل',
      category: ['لبن الاطفال', 'الحفاضات و الكريمات', 'العناية بالأم']
    },
    {
      type: 'skinCare',
      title: 'العناية بالبشرة و الشعر',
      category: [
        'الحماية من الشمس',
        'العناية باليد و القدم',
        'تفتيح البشرة',
        'غسول الوجه',
        'ماسكات الوجه',
        'مزيل المكياج',
        'بلسم الشعر',
        'شامبو'
      ]
    },
    {
      type: 'dentalHealth',
      title: 'العناية بالاسنان',
      category: ['العناية بالفم', 'فرشاة الأسنان', 'معجون الأسنان']
    }
  ]

  return (
    <div className="2xl:mx-8 relative">
      <div className="flex mx-28 2xl:mx-36 justify-evenly text-[20px]">
        {data.map(({ title, category }) => {
          return (
            <div key={title}>
              <NavListItems
                onGetType={onGetType}
                handleShowOverlay={handleShowOverlay}
                handleHideOverlay={handleHideOverlay}
                onGetTitle={title}
                onGetSubItems={category}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NavList
