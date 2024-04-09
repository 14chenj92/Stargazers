import { React, useState, useEffect } from "react";
import HoroscopeCard from "../components/HoroscopeCard";

import "../styles/Horoscopes.css";

const Horoscopes = () => {
  const [zodiacSign, setZodiacSign] = useState("");
  const [dailyHoroscope, setDailyHoroscope] = useState([]);
  const [dateHoroscope, setDateHoroscope] = useState([]);

  useEffect((value) => {
    getHoroscope();
    setZodiacSign(value)
  }, []); 

  const url = `https://horoscope-astrology.p.rapidapi.com/horoscope?day=month&sunsign=leo`;
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
	console.log(result.horoscope);
  setDateHoroscope(result.date);
  setDailyHoroscope(result.horoscope);
} catch (error) {
	console.error(error);
}
}


  return (
    <>
    <div className="horoscope-section mt-5 mb-5">
      <h2>Select Your Horoscope</h2>
      <div className="horoscope-select">
        <HoroscopeCard title="Capricorn" description="Dec 22 - Jan 19" getSign={getHoroscope} value="leo"/>
        <HoroscopeCard title="Aquarius" description="Jan 20 - Feb 18"/>
        <HoroscopeCard title="Pisces" description="Feb 19 - March 20"/>
        <HoroscopeCard title="Aries" description="March 21 - April 19"/>
        <HoroscopeCard title="Taurus" description="April 20 - May 20"/>
        <HoroscopeCard title="Gemini" description="May 21 - June 20"/>
        <HoroscopeCard title="Cancer" description="June 21 - July 22"/>
        <HoroscopeCard title="Leo" description="July 23 - Aug 22"/>
        <HoroscopeCard title="Virgo" description="Aug 23 - Sept 22"/>
        <HoroscopeCard title="Libra" description="Sept 23 - Oct 22"/>
        <HoroscopeCard title="Scorpio" description="Oct 23 - Nov 21"/>
        <HoroscopeCard title="Sagittarius" description="Nov 22 - Dec 21"/>
      </div>
      <div className="horoscope-results">
        <h3>Horoscope Results</h3>
        <span>Date: {dateHoroscope}</span>
        <span>Horoscope:{dailyHoroscope}</span>
      </div>
    </div>
</>)}

export default Horoscopes;
