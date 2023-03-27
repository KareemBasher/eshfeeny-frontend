import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
/*    Icons    */
import Arrow from '../../../assets/common/Arrow.svg'

const SideBarItems = ({ onGetTitle, onGetActiveType, onGetActiveCategory, onGetCategory }) => {
  const [showItems, setShowItems] = useState(false)
  const [activeCategory, setActiveCategory] = useState(false)

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

  // Shows Active Category ex: مسكنات
  useEffect(() => {
    const activeCategory = (category) => {
      onGetCategory.forEach((element) => {
        if (element === category) {
          setActiveCategory(true)
        }
      })
    }
    activeCategory(onGetActiveCategory)
  }, [onGetActiveCategory])

  return (
    <div className="h-fit">
      <div
        onClick={showItemsHandler}
        className={`flex items-center h-12 pr-1  hover:text-blue hover:underline ${
          showItems ? 'text-blue text-[20px]' : 'text-black'
        }`}
      >
        <img src={Arrow} draggable="false" alt="Arrow" />
        <button>{onGetTitle}</button>
      </div>
      {showItems && (
        <div>
          <ol className="w-full text-[16px]">
            {onGetCategory.map((category) =>
              category === onGetActiveCategory ? (
                // Active Category
                <li
                  key={category}
                  className={
                    'flex justify-start items-center px-5 py-2  bg-[#EFF6FF] border border-y-0 border-l-0 border-r-[2px] border-r-lightBlue'
                  }
                >
                  <Link
                    to={`/products/type/${onGetTitle}/category/${category}`}
                    className="hover:text-blue hover:underline pr-3"
                  >
                    {category}
                  </Link>
                </li>
              ) : (
                <li key={category} className={'flex justify-start items-center px-5 py-2'}>
                  <Link
                    to={`/products/type/${onGetTitle}/category/${category}`}
                    className="hover:text-blue hover:underline pr-3"
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
