import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(pageNumbers)
  return (
    <div>
      <ul className="flex justify-center">
        {pageNumbers.length > 1 &&
          pageNumbers.map((number) => (
            <li key={number} className="text-red-600 px-3">
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Pagination
