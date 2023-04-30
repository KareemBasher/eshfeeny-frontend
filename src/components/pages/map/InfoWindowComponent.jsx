import React from 'react'
import InfoWindowPharmacy from '../../../assets/map/InfoWindowPharmacy.svg'
import InfoWindowLocation from '../../../assets/map/InfoWindowLocation.svg'
import InfoWindowPhone from '../../../assets/map/InfoWindowPhone.svg'
import InfoWindowDistance from '../../../assets/map/InfoWindowDistance.svg'

const InfoWindowComponent = ({ selected, calculateDistance, userCoords }) => {
  return (
    <div className="mr-5 font-cairo">
      <div className="flex items-center justify-center">
        <img className="w-4 mx-2" draggable="false" src={InfoWindowPharmacy} alt="Pharmacy Name" />
        <p>صيدلية {selected.name}</p>
      </div>

      {selected.address && (
        <div className="flex items-center justify-center">
          <img
            className="w-4 mx-2"
            draggable="false"
            src={InfoWindowLocation}
            alt="Pharmacy Name"
          />
          <p>العنوان: {selected.address}</p>
        </div>
      )}

      {selected.phoneNumber && (
        <div className="flex items-center justify-center">
          <img className="w-5 mx-2" draggable="false" src={InfoWindowPhone} alt="Pharmacy Name" />
          <p>الهاتف: {selected.phoneNumber}</p>
        </div>
      )}

      {userCoords && (
        <div className="flex items-center justify-center">
          <img
            className="w-6 mx-2"
            draggable="false"
            src={InfoWindowDistance}
            alt="Pharmacy Name"
          />
          <p>
            المسافة:
            {' ' + calculateDistance(userCoords, selected.geoLocation) + ' '}
          </p>
        </div>
      )}
    </div>
  )
}

export default InfoWindowComponent
