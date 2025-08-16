import React from "react";
import styles from "./CityItem.module.css";
import { formatDate } from "./City";
import { Link } from "react-router-dom";
import { useCity } from "../contexts/CityContext";
function CityItem({ city }) {
  const { currentCity,deleteCity } = useCity();
  const { cityName, emoji, date, id, position } = city;
  const formatedDate = formatDate(date);

  function handleDelete(e){
    e.preventDefault();
    deleteCity(id);

  }
  
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          id === currentCity.id && styles.cityItemActive
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{cityName}</span>
        <span className={styles.date}>{formatedDate}</span>
        <button className={styles.deleteBtn} onClick={handleDelete}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
