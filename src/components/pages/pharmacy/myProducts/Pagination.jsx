import React from 'react'
/*     Icons     */
import Arrow from '../../../../assets/common/Arrow.svg'

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      {pageNumbers.length > 1 && (
        <ul className="flex justify-end items-center py-10 pl-7 2xl:pl-0">
          {/*   Right Arrow   */}
          <img
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            draggable="false"
            src={Arrow}
            className="ml-1 opacity-70 rotate-180 w-[24px] h-[24px] cursor-pointer"
            alt="Arrow"
          />
          {pageNumbers.map((number) => (
            <li key={number}>
              <div className="flex justify-center items-center text-[#676767B2] text-opacity-70 text-[18px] w-[30px]">
                <button
                  className={
                    currentPage === number
                      ? `flex justify-center items-center w-[21px] h-[21px] rounded-full text-lightBlue bg-[#EFF6FF]`
                      : `flex justify-center items-center w-[21px] h-[21px] rounded-full`
                  }
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </div>
            </li>
          ))}
          {/*   Left Arrow   */}
          <img
            onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
            draggable="false"
            src={Arrow}
            className="mr-1 opacity-70 w-[24px] h-[24px] cursor-pointer"
            alt="Arrow"
          />
        </ul>
      )}
    </div>
  )
}

export default Pagination
