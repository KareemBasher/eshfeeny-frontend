import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
/*    Icons    */
import Arrow from '../../../assets/common/Arrow.svg'

const SideBarItems = ({
  onGetTitle,
  onGetActiveType,
  onGetActiveCategory,
  onGetCategory,
  onGetType,
  setCurrentPage
}) => {
  const [showItems, setShowItems] = useState(false)

  const showItemsHandler = () => {
    setShowItems(!showItems)
  }

  // Shows Active Type ex: الأدوية
  useEffect(() => {
    const activeType = (type) => {
      if (type === onGetTitle) {
        setShowItems(true)
      }
    }
    activeType(onGetActiveType)
  }, [onGetActiveType])

  return (
    <div className="h-fit">
      <div
        onClick={showItemsHandler}
        className={`flex items-center h-12 pr-1  hover:text-blue ${
          showItems ? 'text-blue text-[20px]' : 'text-black'
        }`}
      >
        <img
          className={`transition-all ${showItems && '-rotate-90 ml-1 mt-1'}`}
          src={Arrow}
          draggable="false"
          alt="Arrow"
        />
        <button>{onGetTitle}</button>
      </div>
      {showItems && (
        <div>
          <ol className="w-full text-[16px]">
            {onGetCategory.map((category) =>
              category === (onGetActiveCategory || `كل ${onGetActiveType}`) ? (
                // Active Category
                <li
                  key={category}
                  className={
                    'flex justify-start items-center px-5 py-2 bg-[#EFF6FF] border border-y-0 border-l-0 border-r-[2px] border-r-lightBlue'
                  }
                >
                  <Link
                    to={
                      category.includes('كل')
                        ? onGetType === 'pharmacy'
                          ? `/pharmacyProducts/type/${onGetTitle}`
                          : `/products/type/${onGetTitle}`
                        : onGetType === 'pharmacy'
                        ? `/pharmacyProducts/type/${onGetTitle}/category/${category}`
                        : `/products/type/${onGetTitle}/category/${category}`
                    }
                    className="hover:text-blue pr-3"
                  >
                    {category}
                  </Link>
                </li>
              ) : (
                <li key={category} className={'flex justify-start items-center px-5 py-2'}>
                  <Link
                    to={
                      category.includes('كل')
                        ? onGetType === 'pharmacy'
                          ? `/pharmacyProducts/type/${onGetTitle}`
                          : `/products/type/${onGetTitle}`
                        : onGetType === 'pharmacy'
                        ? `/pharmacyProducts/type/${onGetTitle}/category/${category}`
                        : `/products/type/${onGetTitle}/category/${category}`
                    }
                    onClick={() => setCurrentPage(1)}
                    className="hover:text-blue pr-3"
                  >
                    {category}
                  </Link>
                </li>
              )
            )}
          </ol>
        </div>
      )}
    </div>
  )
}

export default SideBarItems
