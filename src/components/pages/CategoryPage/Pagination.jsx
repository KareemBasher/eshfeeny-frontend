import React from 'react'
/*     Icons     */
import Arrow from '../../../assets/common/Arrow.svg'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(pageNumbers)
  return (
    <div>
      <ul className="flex justify-end items-center py-10 pl-7 2xl:pl-[195px]">
        <img
          draggable="false"
          src={Arrow}
          className="ml-1 opacity-70 rotate-180 w-[24px] h-[24px]"
          alt="Arrow"
        />
        {pageNumbers.length > 1 &&
          pageNumbers.map((number) => (
            <li key={number}>
              <div className="flex justify-center items-center text-[#676767B2] text-opacity-70 text-[18px] w-[30px]">
                <button
                  className="flex justify-center items-center w-[21px] h-[21px] rounded-full focus:text-lightBlue focus:bg-[#EFF6FF]"
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </div>
            </li>
          ))}
        <img
          draggable="false"
          src={Arrow}
          className="mr-1 opacity-70 w-[24px] h-[24px]"
          alt="Arrow"
        />
      </ul>
    </div>
  )
}

export default Pagination
