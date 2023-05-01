import React from 'react'
/*      Components     */
import BrandsPictures from '../user/main/BrandsPictures'
/*       Images        */
import LaRoche from '../../../assets/brands/LA ROCHE POSAY.png'
import Beesline from '../../../assets/brands/Beesline.png'
import Bobana from '../../../assets/brands/bobana.png'
import CloseUp from '../../../assets/brands/Close_up.png'
import Eva from '../../../assets/brands/eva.png'
import LorealParis from '../../../assets/brands/LOreal Paris.png'
import Listering from '../../../assets/brands/Listerine.png'
import Nivea from '../../../assets/brands/Nivea.png'
import Purederm from '../../../assets/brands/Purederm.png'
import Signal from '../../../assets/brands/Signal.png'
import Tresemme from '../../../assets/brands/Tresemme.png'
import Vaseline from '../../../assets/brands/Vaseline.png'
import CleanClear from '../../../assets/brands/CleanClear.png'
import Dove from '../../../assets/brands/Dove.png'
import Garnier from '../../../assets/brands/Garnier.png'
import HerbalEssences from '../../../assets/brands/HerbalEssences.png'
import Pampers from '../../../assets/brands/Pampers.png'
import Neutrogena from '../../../assets/brands/Neutrogena.png'
import OralB from '../../../assets/brands/Oral-B.png'
import Sensodyne from '../../../assets/brands/Sensodyne.png'
import Vitadose from '../../../assets/brands/Vitadose.png'

const BrandsList = () => {
  const brands = [
    { name: 'LA ROCHE POSAY', image: LaRoche },
    { name: 'Beesline', image: Beesline },
    { name: 'Bobana', image: Bobana },
    { name: 'Close Up', image: CloseUp },
    { name: 'Eva', image: Eva },
    { name: "L'Oréal Paris", image: LorealParis },
    { name: 'Listerine', image: Listering },
    { name: 'Nivea', image: Nivea },
    { name: 'Purederm', image: Purederm },
    { name: 'Signal', image: Signal },
    { name: 'Tresemme', image: Tresemme },
    { name: 'Vaseline', image: Vaseline },
    { name: 'Clean Clear', image: CleanClear },
    { name: 'Dove', image: Dove },
    { name: 'Garnier', image: Garnier },
    { name: 'Herbal Essences', image: HerbalEssences },
    { name: 'Pampers', image: Pampers },
    { name: 'Neutrogena', image: Neutrogena },
    { name: 'Oral-B', image: OralB },
    { name: 'Sensodyne', image: Sensodyne },
    { name: 'VITADOSE', image: Vitadose }
  ]
  return (
    <div className="mr-32 2xl:mr-52">
      <div className="my-10">
        <ol className="flex flex-wrap">
          {brands.map(({ name, image }) => (
            <li key={name}>
              <BrandsPictures onGetPath={name} onGetImage={image} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BrandsList
