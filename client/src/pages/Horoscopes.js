import { React, useState, useEffect } from "react";
import HoroscopeCard from "../components/HoroscopeCard";
import Aquarius from "../images/horoscope/aquarius.png";
import Aries from "../images/horoscope/aries.png";
import Cancer from "../images/horoscope/cancer.png";
import Capricorn from "../images/horoscope/capricorn.png";
import Gemini from "../images/horoscope/gemini.png";
import Leo from "../images/horoscope/leo.png";
import Libra from "../images/horoscope/libra.png";
import Pisces from "../images/horoscope/pisces.png";
import Sagittarius from "../images/horoscope/sagittarius.png";
import Scorpio from "../images/horoscope/scorpio.png";
import Taurus from "../images/horoscope/taurus.png";
import Virgo from "../images/horoscope/virgo.png";


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
        <HoroscopeCard title="Capricorn" description="December 23 - January 20" icon={Capricorn} getSign={getHoroscope}/>
        <HoroscopeCard title="Aquarius" description="January 21 - February 19" icon={Aquarius}/>
        <HoroscopeCard title="Pisces" description="February 20 - March 20" icon={Pisces}/>
        <HoroscopeCard title="Aries" description="March 21 - April 20" icon={Aries}/>
        <HoroscopeCard title="Taurus" description="April 21 - May 21" icon={Taurus}/>
        <HoroscopeCard title="Gemini" description="May 22 - June 21" icon={Gemini}/>
        <HoroscopeCard title="Cancer" description="June 22 - July 22" icon={Cancer}/>
        <HoroscopeCard title="Leo" description="July 23 - August 21" icon={Leo}/>
        <HoroscopeCard title="Virgo" description="August 22 - September 23" icon={Virgo}/>
        <HoroscopeCard title="Libra" description="September 24 - October 23" icon={Libra}/>
        <HoroscopeCard title="Scorpio" description="October 24 - November 22" icon={Scorpio}/>
        <HoroscopeCard title="Sagittarius" description="November 23 - December 22" icon={Sagittarius}/>
      </div>
      <div>
        Date: {dateHoroscope}
        Horoscope:{dailyHoroscope}
      </div>
    </div>
  )
}</>)};

export default Horoscopes;
