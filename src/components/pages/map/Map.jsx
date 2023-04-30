import React, { useEffect, useState, useCallback, useRef } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
/*        Assets         */
import LocationPageEmpty from '../../../assets/common/LocationPageEmpty.svg'
import UserLocation from '../../../assets/map/UserLocation.svg'
import GuestLogo from '../../../assets/common/AlternativeLogo.svg'
import MapPin from '../../../assets/map/MapPin.svg'
/*    Components    */
import PageEmpty from '../../common/PageEmpty'
import UserNavigation from '../../common/UserNavigation'
import mapStyle from './mapStyle'
import InfoWindowComponent from './InfoWindowComponent'
/*    API    */
import { getAvailable } from '../../../utils/pharmaciesAPI'
import { getCartProducts } from '../../../utils/productsAPI'

const Map = ({ loggedInUser, logout }) => {
  const [pharmacies, setPharmacies] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [selected, setSelected] = useState(null)
  const [userCoords, setUserCoords] = useState()

  const onMapClick = useCallback((e) => {
    setUserCoords({ lat: e.latLng.lat(), lng: e.latLng.lng() })
  }, [])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  useEffect(() => {
    const getData = async () => {
      const cart = await getCartProducts(loggedInUser)
      const ids = cart.cart.map((item) => item.product._id)
      setCartProducts(ids)
      setPharmacies(await getAvailable(ids))
    }

    const getUserLocation = async () => {
      if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000
        }

        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserCoords({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          },
          (error) => {
            console.log(error)
          },
          options
        )
      }
    }

    getData()
    getUserLocation()
  }, [])

  const deg2rad = (deg) => {
    return (deg * Math.PI) / 180
  }

  const calculateDistance = (user, pharmacy) => {
    const R = 6371
    const dLat = deg2rad(pharmacy.lat - user.lat)
    const dLon = deg2rad(pharmacy.lng - user.lng)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(user.lat)) *
        Math.cos(deg2rad(pharmacy.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c // Distance in km

    if (d >= 1) return Math.round(d) + ' كم'
    else return Math.round(d * 1000) + ' متر'
  }

  const gcpKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: gcpKey
  })

  if (!isLoaded || !cartProducts) {
    return (
      <>
        <UserNavigation loggedInUser={loggedInUser} logout={logout} />
        <PageEmpty
          onGetTitle={'اقرب صيدلية'}
          onGetText1="لم يتم العثور علي منتجاتك"
          onGetButtonText="اذهب للتسوق الان"
          onGetLogo={LocationPageEmpty}
          onGetPath="./home"
        />
      </>
    )
  }

  return (
    <div className="pb-20 2xl:pb-0">
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
        <div>
          <PageEmpty
            onGetTitle="أقرب صيدلية"
            onGetLogo={GuestLogo}
            onGetText1="أنت الان في وضع الضيف"
            onGetText2="الرجاء تسجيل الدخول للاستمتاع بالمميزات"
            onGetButtonText="تسجل الدخول"
            onGetPath="./login/user"
          />
        </div>
      ) : (
        <>
          <div className="text-right text-[28px] my-10 mr-32 2xl:mr-52">
            <h1>أقرب صيدلية</h1>
          </div>
          <div className="h-[70vh] flex justify-center">
            <div className="w-[80%] border-2 rounded-[10px] shadow-sm hover:shadow-xl transition-all duration-300">
              {/* <Search /> */}
              <GoogleMap
                options={{
                  styles: mapStyle,
                  disableDefaultUI: true,
                  zoomControl: true,
                  mapTypeControl: true,
                  scaleControl: true
                }}
                zoom={userCoords ? 15 : 9}
                center={userCoords ? userCoords : { lat: 30.031461, lng: 31.290479 }}
                mapContainerStyle={{ height: '100%', borderRadius: '10px' }}
                onClick={(e) => onMapClick(e)}
                onLoad={onMapLoad}
              >
                {userCoords && (
                  <Marker
                    icon={{
                      url: UserLocation,
                      scaledSize: new window.google.maps.Size(100, 100),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(50, 30)
                    }}
                    title="موقعك"
                    position={userCoords}
                  />
                )}

                {pharmacies.map((pharmacy) => (
                  <Marker
                    key={pharmacy._id}
                    position={{ lat: pharmacy.geoLocation.lat, lng: pharmacy.geoLocation.lng }}
                    icon={{
                      url: MapPin,
                      scaledSize: new window.google.maps.Size(50, 50),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(25, 50)
                    }}
                    title={pharmacy.name}
                    onClick={() => {
                      setSelected(pharmacy)
                    }}
                  />
                ))}

                {selected && (
                  <InfoWindow
                    options={{
                      pixelOffset: new window.google.maps.Size(0, -55)
                    }}
                    onCloseClick={() => {
                      setSelected(null)
                    }}
                    position={{
                      lat: selected.geoLocation.lat,
                      lng: selected.geoLocation.lng
                    }}
                  >
                    <InfoWindowComponent
                      selected={selected}
                      calculateDistance={calculateDistance}
                      userCoords={userCoords}
                    />
                  </InfoWindow>
                )}
              </GoogleMap>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Map
