import SideBarItems from './SideBarItems'

const SideBar = ({ onGetActiveType, onGetActiveCategory }) => {
  const data = [
    {
      type: 'medicine',
      title: 'الأدوية',
      category: [
        'البرد و السعال',
        'مسكنات',
        'الحروق البسيطة',
        'الحموضة و سوء الهضم',
        'الكحة',
        'المغص',
        'امساك',
        'صحة المرأة',
        'عناية اللفم',
        'مسكنات الالام الموضعية',
        'مضادات حيوية موضعية',
        'الفيتامينات و المكملات الغذائية'
      ]
    },
    {
      type: 'viruses',
      title: 'الحمايه من الفيروسات',
      category: ['كل الحماية من الفيروسات', 'تقوية المناعة', 'كمامات و قفازات طبية', 'مطهرات اليد']
    },
    {
      type: 'menProducts',
      title: 'منتجات الرجال',
      category: ['كل منتجات الرجال', 'جل الحلاقة', 'مزيل العرق', 'مستلزمات الحلاقة']
    },
    {
      type: 'womenProducts',
      title: 'منتجات المرأة',
      category: ['كل منتجات المرأة', 'إزالة الشعر', 'مزيل العرق', 'فوط صحية']
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
        'بلسم الشعر ',
        'شامبو'
      ]
    },
    {
      type: 'dentalHealth',
      title: 'العناية بالاسنان',
      category: ['كل العناية بالأسنان', 'العناية بالفم', 'فرشاة الأسنان', 'معجون الأسنان']
    }
  ]
  return (
    <div className="flex flex-col w-[250px] h-full border rounded-[10px] my-10 text-right whitespace-nowrap">
      <p className="text-[22px] pt-5 pr-2">الأقسام</p>
      <div className="list-books-content">
        {data.map(({ title, category }) => {
          return (
            <div key={title}>
              <SideBarItems
                onGetTitle={title}
                onGetCategory={category}
                onGetActiveType={onGetActiveType}
                onGetActiveCategory={onGetActiveCategory}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
