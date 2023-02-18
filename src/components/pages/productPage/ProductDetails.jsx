import React, { useEffect, useState } from 'react'
import * as ProductsAPI from '../../../utils/productsAPI'

const ProductDetails = ({ onGetDescription, onGetUseCases, onGetUsage, onGetSideEffects }) => {
  const [description, setDescription] = useState('')
  const [useCases, setUseCases] = useState('')
  const [usage, setUsage] = useState('')
  const [sideEffects, setSideEffects] = useState('')

  useEffect(() => {
    setDescription(onGetDescription)
    setUseCases(onGetUseCases)
    setUsage(onGetUsage)
    setSideEffects(onGetSideEffects)
  }, [onGetDescription, onGetUseCases, onGetUsage, onGetSideEffects])

  return (
    <div>
      <ol>{useCases && useCases.map((useCase) => <li key={useCase}>{useCase}</li>)}</ol>
    </div>
  )
}

export default ProductDetails
