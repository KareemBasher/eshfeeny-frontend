import { useState } from 'react'
import { Link } from 'react-router-dom'
/*    Icons    */
import Arrow from '../../../assets/common/Arrow.svg'

const SideBarItems = ({ onGetTitle, category }) => {
  const [showItems, setShowItems] = useState(false)

  const showItemsHandler = () => {
    setShowItems(!showItems)
  }

  return (
    <div className="h-fit">
      <div
        onClick={showItemsHandler}
        className={`flex items-center h-12 hover:text-blue hover:underline ${
          showItems ? 'text-blue text-[20px]' : 'text-black'
        }`}
      >
        <div className="flex">
          <img src={Arrow} draggable="false" alt="Arrow" />
          <button>{onGetTitle}</button>
        </div>
      </div>
      {showItems && (
        <div>
          <ol className="w-full pr-3 text-[16px]">
            {category.map((category) => (
              <li key={category} className="flex justify-start items-center px-5 py-2">
                <Link
                  to={`/products/type/${onGetTitle}/category/${category}`}
                  className="hover:text-blue hover:underline"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

export default SideBarItems
