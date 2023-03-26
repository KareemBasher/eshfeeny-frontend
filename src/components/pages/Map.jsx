import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const gcpKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: gcpKey
  })

  if (!isLoaded) return 'Loading...'
  30.591012255008604, 32.267342084616594
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-1/2 w-1/2">
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
  )
}

export default Map
