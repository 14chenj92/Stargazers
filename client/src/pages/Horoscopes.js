import { React, useState, useEffect, useRef } from "react";
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
  const resultsRef = useRef(null);
  // const today = new Date();

  useEffect((value) => {
    getHoroscope();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zodiacSign]); 

const getHoroscope = async () => {
  const url = `https://horoscope19.p.rapidapi.com/get-horoscope/weekly?sign=${zodiacSign}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '396d65978cmsh536e29951248595p199c25jsn69e49935a220',
      'X-RapidAPI-Host': 'horoscope19.p.rapidapi.com'
    }
  };
//   const url = `https://horoscope-astrology.p.rapidapi.com/horoscope?day=month&sunsign=${zodiacSign}`;
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '396d65978cmsh536e29951248595p199c25jsn69e49935a220',
// 		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
// 	}
// }


  try {
	  const response = await fetch(url, options);
	  const result = await response.json(); 
	  console.log(result.data.horoscope_data);
    setDateHoroscope(result.data.week); // today.toLocaleDateString()
    setDailyHoroscope(result.data.horoscope_data);
    if (zodiacSign !== "") {
    resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  } catch (error) {
	console.error(error);
  }
}

const handleZodiacSignSelect = (sign) => {
  setZodiacSign(sign);
};


  return (
    <>
    <div className="horoscope-section mt-5 mb-5">
      <h2>Select Your Horoscope</h2>
      <div className="horoscope-select">
        <HoroscopeCard title="Capricorn" description="Dec 22 - Jan 20" icon={Capricorn} onClick={() => handleZodiacSignSelect("capricorn")}/>
        <HoroscopeCard title="Aquarius" description="Jan 21 - Feb 19" icon={Aquarius} onClick={() => handleZodiacSignSelect("aquarius")}/>
        <HoroscopeCard title="Pisces" description="Feb 20 - March 20" icon={Pisces} onClick={() => handleZodiacSignSelect("pisces")}/>
        <HoroscopeCard title="Aries" description="March 21 - April 20" icon={Aries} onClick={() => handleZodiacSignSelect("aries")}/>
        <HoroscopeCard title="Taurus" description="April 21 - May 21" icon={Taurus} onClick={() => handleZodiacSignSelect("taurus")}/>
        <HoroscopeCard title="Gemini" description="May 22 - June 21" icon={Gemini} onClick={() => handleZodiacSignSelect("gemini")}/>
        <HoroscopeCard title="Cancer" description="June 22 - July 22" icon={Cancer} onClick={() => handleZodiacSignSelect("cancer")}/>
        <HoroscopeCard title="Leo" description="July 23 - Aug 21" icon={Leo} onClick={() => handleZodiacSignSelect("leo")}/>
        <HoroscopeCard title="Virgo" description="Aug 22 - Sept 23" icon={Virgo} onClick={() => handleZodiacSignSelect("virgo")}/>
        <HoroscopeCard title="Libra" description="Sept 24 - Oct 23" icon={Libra} onClick={() => handleZodiacSignSelect("libra")}/>
        <HoroscopeCard title="Scorpio" description="Oct 24 - Nov 22" icon={Scorpio} onClick={() => handleZodiacSignSelect("scorpio")}/>
        <HoroscopeCard title="Sagittarius" description="Nov 23 - Dec 22" icon={Sagittarius} onClick={() => handleZodiacSignSelect("sagittarius")}/>
      </div>
      <div className="horoscope-results" ref={resultsRef}>
        <h3>Horoscope Results</h3>
        <span>Date: </span>
        {dateHoroscope}
        <span>Horoscope: </span>
        {dailyHoroscope}
      </div>
    </div>
</>)}

export default Horoscopes;
