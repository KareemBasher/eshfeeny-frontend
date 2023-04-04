import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
/*        Assets         */
import LocationPageEmpty from '../../assets/common/LocationPageEmpty.svg'
import UserLocation from '../../assets/common/UserLocation.svg'
/*    Components    */
import PageEmpty from '../common/PageEmpty'
import UserNavigation from '../common/UserNavigation'
/*    API    */
import { getAvailable } from '../../utils/pharmaciesAPI'
import { getCartProducts } from '../../utils/productsAPI'

const Map = ({ loggedInUser }) => {
  const [pharmacies, setPharmacies] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  const pharmacyMarker =
    'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_outline_v4-2-medium.png,assets/icons/poi/tactile/pinlet_v4-2-medium.png,assets/icons/poi/quantum/pinlet/pharmacy_pinlet_v3-2-medium.png&highlight=ea4335,ee675c,ffffff?scale=1'

  useEffect(() => {
    const getData = async () => {
      const cart = await getCartProducts(loggedInUser)
      const ids = cart.cart.map((item) => item.product._id)
      setCartProducts(ids)
      setPharmacies(await getAvailable(ids))
    }

    getData()
  }, [])

  const gcpKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: gcpKey
  })

  if (!isLoaded || !cartProducts)
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
      <div className="h-[70vh] flex justify-center">
        <div className="w-[80%] border-2 rounded-[10px] shadow-sm hover:shadow-xl transition-all duration-300">
          <GoogleMap
            options={{
              styles: [
                { elementType: 'labels', featureType: 'poi', stylers: [{ visibility: 'off' }] }
              ]
            }}
            zoom={18}
            center={{ lat: 30.591012255008604, lng: 32.267342084616594 }}
            mapContainerStyle={{ height: '100%', borderRadius: '10px' }}
          >
            <Marker
              icon={UserLocation}
              title="موقعك"
              position={{ lat: 30.591105239159777, lng: 32.26764605875071 }}
            />

            {pharmacies.map((pharmacy) => (
              <Marker
                key={pharmacy._id}
                position={{ lat: pharmacy.geoLocation.lat, lng: pharmacy.geoLocation.lng }}
                icon={pharmacyMarker}
                title={pharmacy.name}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  )
}

export default Map
