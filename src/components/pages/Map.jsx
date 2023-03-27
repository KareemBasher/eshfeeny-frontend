import React from 'react'
import { useParams } from 'react-router-dom'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
/*        Assets         */
import LocationPageEmpty from '../../assets/common/LocationPageEmpty.svg'
/*    Components    */
import PageEmpty from '../common/PageEmpty'
import UserNavigation from '../common/UserNavigation'

const Map = ({ loggedInUser }) => {
  const { id } = useParams()
  const gcpKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: gcpKey
  })

  if (!isLoaded || !id)
    return (
      <>
        <UserNavigation loggedInUser={loggedInUser} />
        <PageEmpty
          onGetTitle={'اقرب صيدلية'}
          onGetText="لم يتم العثور علي منتجاتك"
          onGetLogo={LocationPageEmpty}
        />
      </>
    )
  30.591012255008604, 32.267342084616594
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <div className="text-right text-[28px] my-10 mr-32 2xl:mr-52">
        <h1>أقرب صيدلية</h1>
      </div>
      <div className="h-[70vh] flex justify-center items-center">
        <div className="h-[90%] w-3/4 border shadow-sm hover:shadow-2xl transition-all duration-300">
          <GoogleMap
            options={{
              styles: [
                { elementType: 'labels', featureType: 'poi', stylers: [{ visibility: 'off' }] }
              ]
            }}
            zoom={18}
            center={{ lat: 30.591012255008604, lng: 32.267342084616594 }}
            mapContainerStyle={{ height: '100%' }}
          >
            <Marker position={{ lat: 30.591012255008604, lng: 32.267342084616594 }} />
          </GoogleMap>
        </div>
      </div>
    </div>
  )
}

export default Map
