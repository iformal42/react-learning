import React from 'react';
import styles from './CountryList.module.css'
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';
import { useCity } from '../contexts/CityContext';

function  CountryList () {
   const {cities,isLoading} = useCity(); 
 if(isLoading) return <Spinner/>
 if(cities.lenght === 0) return <Message/>

function uniqueCountry(cities) {
  const seen = new Set();
  const countries = [];
  for (const city of cities) {
    if (!seen.has(city.country)) {
      countries.push({ id: city.id, country: city.country, emoji: city.emoji });
      seen.add(city.country);
    }
  }
  console.log('set',seen);
  
  return countries;
}
//  const countries  = cities.reduce((acc,city)=>{
//     if(!acc.map(el=>el.country).includes(city.country))
//         return [...acc,{id:city.id,country:city.country,emoji:city.emoji}];
//     else 
//     return acc;
//  },[])
const countries = uniqueCountry(cities);
  return (
    <ul className={styles.countryList}>
        {
            countries?.map((country)=> (
                <CountryItem key={country.id} country={country}/>
            ))
        }
   
    </ul>
  );
};

export default  CountryList;