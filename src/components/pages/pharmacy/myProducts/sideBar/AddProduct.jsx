import React, { useEffect, useState } from 'react'
import AddProductVector from '../../../../../assets/pharmacyProducts/AddProduct.svg'
import ClearSearch from '../../../../../assets/pharmacyProducts/ClearSearch.svg'
import { search } from '../../../../../utils/productsAPI'
import SearchResultItem from './SearchResultItem'

const AddProduct = ({ loggedInUser }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleOnClick = () => {
    setSearchOpen(true)
  }

  const clearSearch = () => {
    setSearchOpen(false)
    setInputValue('')
    setSearchResults([])
  }

  const handleAddProduct = (itemID) => {
    const newItems = searchResults.filter((product) => product._id === itemID)
    setSearchResults(newItems)
  }

  useEffect(() => {
    const handleSearch = async () => {
      if (inputValue.length > 0) {
        const response = await search(inputValue)
        if (response) {
          setSearchResults(response)
        }
      }
    }

    handleSearch()
  }, [inputValue])

  return (
    <div className="relative">
      {searchOpen ? (
        <div className="h-[50px] w-full rounded-[10px] border-[1px] border-[#E4E4E4] my-5 flex items-center justify-center">
          <input
            className="w-full px-3 rounded-[10px] outline-none placeholder:text-[14px] placeholder:bg-searchIcon placeholder:box-border placeholder:bg-no-repeat placeholder:bg-right placeholder:pr-7"
            placeholder="أدخل أسم المنتج الذى تريد إضافته"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          {inputValue.length > 0 && (
            <button onClick={() => clearSearch()}>
              <img draggable="false" className="ml-2" src={ClearSearch} alt="Clear search" />
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => handleOnClick()}
          className="h-[55px] w-[250px] flex items-center justify-center my-5 py-1 border rounded-[10px] border-lightBlue"
        >
          <img className="h-3/4 ml-3" draggable="false" src={AddProductVector} alt="Add product" />
          <p className="text-[20px]">أضف منتج جديد</p>
        </button>
      )}

      <div className="absolute top-full left-0">
        {searchResults.length > 0 && (
          <div id="scrollbar" className="border max-h-[500px] overflow-auto mb-5 rounded-[10px]">
            {searchResults.map((item) => (
              <SearchResultItem
                key={item._id}
                item={item}
                loggedInUser={loggedInUser}
                handleAddProduct={handleAddProduct}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AddProduct
