/* eslint-disable react/react-in-jsx-scope */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import useUrlPosition from "../hooks/useUrlPosition";
import Message from "./Message";
import { useGeolocation } from "../hooks/GeoLocation";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCity } from "../contexts/CityContext";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const [isGeoLoading, setIsGeoLoading] = useState(true);
  const {createCity,isLoading} = useCity();
  const navigate = useNavigate();
  // const{isLoading:geoLoding,error:isError} = useGeolocation()

  // // const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if(!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji:convertToEmoji(country.slice(0,2)),
      date,
      notes,
      position:{lat,lng}
    }
   await createCity(newCity);
   navigate('/app/cites')
       
    
  }

  async function fetchData() {
    try {
      setIsGeoLoading(true);
      const res = await fetch(`${URL}?latitude=${lat}&longitude=${lng}`);
      const data = await res.json();
      const city = data.city || data.locality || "";
      setCityName(city);
      setCountry(data.countryName);
    } catch (error) {
      console.error(error);
    }
    setIsGeoLoading(false);
  }
 useEffect(() => {

    // Your effect logic here
    fetchData();
  }, [lat, lng]);

  
   if(isGeoLoading) return <Spinner/>;
  if(!(lat && lng))
  return <Message message="No locations"/>

  return (
    <form className={`${styles.form} ${isLoading && styles.loading}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>
      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker id="datepicker" selected={date} onChange={(date) => setDate(date)} />
        {/* <DatePicker onChange={(d) => }  /> */}
      </div>
      0
      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>
      <div className={styles.buttons}>
        <button>Add</button>
        <BackButton/>
      </div>
    </form>
  );
}

export default Form;
