import { React, useState, useEffect } from "react";
import HoroscopeCard from "../components/HoroscopeCard";

import "../styles/Horoscopes.css";

const Horoscopes = () => {
  const [zodiacSign, setZodiacSign] = useState("");
  const [dailyHoroscope, setDailyHoroscope] = useState([]);
  const [dateHoroscope, setDateHoroscope] = useState([]);

  const url = `https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=capricorn`;
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '396d65978cmsh536e29951248595p199c25jsn69e49935a220',
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
	}
};

const getHoroscope = async () => {
try {
	const response = await fetch(url, options);
	const result = await response.json(); 
	console.log(result.date);
  setDateHoroscope(result.date);
  setDailyHoroscope(result.horoscope);
} catch (error) {
	console.error(error);
}
}

useEffect(() => {
    getHoroscope();
}, []); 


  return (
    <>
    {zodiacSign ? null : (
    <div className="horoscope-section mt-5 mb-5">
      <h2>Select Your Horoscope</h2>
      <div className="horoscope-select">
        <HoroscopeCard title="Capricorn" description="December 22 - January 19" getSign={getHoroscope}/>
        <HoroscopeCard title="Aquarius" description="January 20 - February 18"/>
        <HoroscopeCard title="Pisces" description="February 19 - March 20"/>
        <HoroscopeCard title="Aries" description="March 21 - April 19"/>
        <HoroscopeCard title="Taurus" description="April 20 - May 20"/>
        <HoroscopeCard title="Gemini" description="May 21 - June 20"/>
        <HoroscopeCard title="Cancer" description="June 21 - July 22"/>
        <HoroscopeCard title="Leo" description="July 23 - August 22"/>
        <HoroscopeCard title="Virgo" description="August 23 - September 22"/>
        <HoroscopeCard title="Libra" description="September 23 - October 22"/>
        <HoroscopeCard title="Scorpio" description="October 23 - November 21"/>
        <HoroscopeCard title="Sagittarius" description="November 22 - December 21"/>
      </div>
      <div>
        Date: {dateHoroscope}
        Horoscope:{dailyHoroscope}
      </div>
    </div>
  )
}</>)};

export default Horoscopes;
