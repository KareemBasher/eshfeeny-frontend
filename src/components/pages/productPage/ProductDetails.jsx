import React, { useEffect, useState } from 'react'
/*     Icons      */
import Bullet from '../../../assets/common/ListBullet.svg'
/*     API      */
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
      {description && (
        <div className="text-[24px] mb-8">
          <p className="text-[28px]">الوصف :</p>
          <p className="pt-4">{description}</p>
        </div>
      )}
      {useCases && (
        <ul className="text-[24px] mb-12  ">
          <p className="text-[28px] mb-3">دواعي الاستخدام :</p>
          {useCases &&
            useCases.map((useCase) => (
              <div key={`${useCase}1`} className="flex items-start pt-3">
                <img key={`${useCase}2`} src={Bullet} className="ml-4 pt-3" />
                <li key={`${useCase}3`}>{useCase}</li>
              </div>
            ))}
        </ul>
      )}
      {usage && (
        <ul className="text-[24px] mb-12">
          <p className="text-[28px] mb-3">طريقة الاستعمال :</p>
          {usage &&
            usage.map((use) => (
              <div key={`${use}1`} className="flex items-start pt-3">
                <img key={`${use}2`} src={Bullet} className="ml-4 pt-3" />
                <li key={`${use}3`}>{use}</li>
              </div>
            ))}
        </ul>
      )}
      {sideEffects && (
        <ul className="text-[24px] mb-12">
          <p className="text-[28px] mb-3">الاعراض الجانبية :</p>
          {sideEffects &&
            sideEffects.map((sideEffect) => (
              <div key={`${sideEffect}1`} className="flex items-start pt-3">
                <img key={`${sideEffect}2`} src={Bullet} className="ml-4 pt-3" />
                <li key={`${sideEffect}3`}>{sideEffect}</li>
              </div>
            ))}
        </ul>
      )}
    </div>
  )
}

export default ProductDetails
