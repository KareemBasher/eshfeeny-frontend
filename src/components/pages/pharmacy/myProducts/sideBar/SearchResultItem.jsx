import React, { useState } from 'react'
/*        API        */
import { checkProduct } from '../../../../../utils/pharmaciesAPI'
import { addProduct } from '../../../../../utils/pharmaciesAPI'
/*        Assets        */
import AddProductVector from '../../../../../assets/pharmacyProducts/AddProduct.svg'
import AddProductVectorDisabled from '../../../../../assets/pharmacyProducts/AddProductDisabled.svg'
import PlusSign from '../../../../../assets/pharmacyProducts/PlusSign.svg'
import MinusSign from '../../../../../assets/pharmacyProducts/MinusSign.svg'
import Confirm from '../../../../../assets/pharmacyProducts/Confirm.svg'
import ErrorIcon from '../../../../../assets/pharmacyProducts/ErrorIcon.svg'

const SearchResultItem = ({ item, loggedInUser, handleAddProduct }) => {
  const [error, setError] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [quantityControllerOpen, setQuantityControllerOpen] = useState(false)
  const [addSuccess, setAddSuccess] = useState(false)

  const handleOnClick = async () => {
    if (!quantityControllerOpen && !addSuccess) {
      const product = await checkProduct(loggedInUser, item._id)
      if (product) {
        setError(true)
      } else {
        setQuantityControllerOpen(true)
        handleAddProduct(item._id)
      }
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const addProductToPharmacy = async () => {
    setError(false)
    const response = await addProduct(loggedInUser, item._id, quantity)
    if (response) {
      setAddSuccess(true)
      setQuantityControllerOpen(false)
    }
  }

  return (
    <div>
      {error && (
        <div className="flex mt-1">
          <img draggable="false" className="w-4 mx-2" src={ErrorIcon} alt="Error" />
          <p className="text-[#eb1d36] text-[12px]">تم إضافة هذا المنتج من قبل</p>
        </div>
      )}
      <li className="w-full flex justify-start items-center pr-7 border-b py-2">
        <div>
          <div className="flex h-[80px]">
            <div className="h-3/4 w-1/4 flex items-center justify-center">
              <img draggable="false" src={item.images} className="h-full" alt="Product" />
            </div>
            <div className="flex flex-col items-start mx-5">
              <p className="text-[12px] text-right">
                {item.nameAr}
                {item.volume ? ` | ${item.volume}` : ''}
                {item.amount ? ` | ${item.amount}` : ''}
              </p>

              <div className="w-full flex items-center justify-between">
                <p className="text-lightBlue py-1 text-[12px]">{item.price} جنيه</p>

                <button
                  onClick={() => handleOnClick()}
                  disabled={quantityControllerOpen && !addSuccess}
                  className="flex items-center justify-center text-[12px] border border-lightBlue rounded-[5px] my-2 px-1 py-px disabled:border-[#e5e5e5] disabled:text-[#949495]"
                >
                  <img
                    draggable="false"
                    className="w-4 ml-1"
                    src={`${
                      quantityControllerOpen
                        ? AddProductVectorDisabled
                        : addSuccess
                        ? Confirm
                        : AddProductVector
                    }`}
                    alt="Add product"
                  />
                  {!addSuccess ? <p>أضف</p> : <p>تم الإضافة </p>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>

      {quantityControllerOpen && (
        <div className="w-full border-b flex items-center justify-evenly">
          <p>أضف الكمية</p>
          <div className="flex items-center justify-center">
            <button onClick={() => increaseQuantity()}>
              <img draggable="false" className="w-4" src={PlusSign} alt="Plus sign" />
            </button>

            <p className="mx-2">{quantity}</p>

            <button onClick={() => decreaseQuantity()}>
              <img draggable="false" className="w-4" src={MinusSign} alt="Minus sign" />
            </button>
          </div>

          <button
            onClick={() => addProductToPharmacy()}
            className="h-[22px] w-[55px] flex items-center justify-center text-[12px] border border-lightBlue rounded-[5px] my-2"
          >
            <img draggable="false" className="w-4 ml-1" src={Confirm} alt="Confirm" />
            <p>تأكيد </p>
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchResultItem
