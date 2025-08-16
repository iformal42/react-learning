import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import { useCity } from "../contexts/CityContext";
import { useGeolocation } from "../hooks/GeoLocation";
import useUrlPosition from "../hooks/useUrlPosition";

function Map() {
  const { cities } = useCity();
  const [mapPosition, setMapPosition] = useState([40,0]);
  const {isLoading: isLoadingPosition,getPosition,position:geoLocation} = useGeolocation()
  
  const [lat,lng] = useUrlPosition();
 
  useEffect(() => {
    if(lat && lng) setMapPosition([lat,lng])
  }, [lat,lng]);

 useEffect(() => {
   // Your effect logic here
   if(geoLocation)
    setMapPosition([geoLocation.lat,geoLocation.lng])
  
 }, [geoLocation]);
  return (
    <div className={styles.mapContainer}
    //  onClick={() => navigate("form")}
    >
      <button onClick={getPosition} style={{position:"absolute",zIndex:999,bottom:"5%"}}> {
        isLoadingPosition ? "Loding...": "getPosition"}</button>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span><span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition}/>
        <DetectClick/>

      </MapContainer>
    </div>
  );
}
function ChangeCenter({position}){
  const map = useMap();
  map.setView(position)
  return null
}
function DetectClick(){
  const navigate = useNavigate();
  useMapEvent({
    click: (e)=> {
      console.log('pos',e);
      
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)}
  })
}
export default Map;
