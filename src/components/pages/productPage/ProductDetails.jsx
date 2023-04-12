import React, { useEffect, useState } from 'react'
/*     Components      */
import DetailsData from './DetailsData'

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
      {description && (
        <div className="text-[24px] mb-8">
          <p className="text-[25px]">الوصف:</p>
          <p className="pt-4 text-[20px]">{description}</p>
        </div>
      )}
      {useCases && <DetailsData Title="دواعي الاستخدام:" Data={useCases} />}
      {usage && <DetailsData Title="طريقة الاستعمال:" Data={usage} />}
      {sideEffects && <DetailsData Title="الاعراض الجانبية:" Data={sideEffects} />}
    </div>
  )
}

export default ProductDetails
