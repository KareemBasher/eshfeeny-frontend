import SideBarItems from './SideBarItems'

const SideBar = ({ onGetActiveType, onGetActiveCategory, onGetType, setCurrentPage }) => {
  const data = [
    {
      type: 'medicine',
      title: 'الأدوية',
      category: [
        'كل الأدوية',
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
      category: ['كل الحمايه من الفيروسات', 'تقوية المناعة', 'كمامات و قفازات طبية', 'مطهرات اليد']
    },
    {
      type: 'menProducts',
      title: 'منتجات الرجال',
      category: ['كل منتجات الرجال', 'جل الحلاقة', 'مزيل العرق للرجال', 'مستلزمات الحلاقة']
    },
    {
      type: 'womenProducts',
      title: 'منتجات المرأة',
      category: ['كل منتجات المرأة', 'إزالة الشعر', 'مزيل العرق للسيدات', 'فوط صحية']
    },
    {
      type: 'mothers',
      title: 'الأم و الطفل',
      category: ['كل الأم و الطفل', 'لبن الاطفال', 'الخفاضات و الكريمات', 'العناية بالأم']
    },
    {
      type: 'skinCare',
      title: 'العناية بالبشرة و الشعر',
      category: [
        'كل العناية بالبشرة و الشعر',
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
      category: ['كل العناية بالاسنان', 'العناية بالفم', 'فرشاة الأسنان', 'معجون الأسنان']
    }
  ]

  return (
    <div className="flex flex-col h-auto min-w-[262px] border py-6 rounded-[10px] my-8 text-right whitespace-nowrap">
      <p className="text-[22px] pr-2">الأقسام</p>
      <div>
        {data.map(({ title, category }) => {
          return (
            <div key={title}>
              <SideBarItems
                onGetTitle={title}
                onGetCategory={category}
                onGetActiveType={onGetActiveType}
                onGetActiveCategory={onGetActiveCategory}
                onGetType={onGetType}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
