import { React, useState } from "react";
import HoroscopeCard from "../components/HoroscopeCard";

import "../styles/Horoscopes.css";

const Horoscopes = () => {
  const [zodiacSign, setZodiacSign] = useState("");

  const getSign = (sign) => {
    setZodiacSign(sign);
  };

  return (
    <>
    {zodiacSign ? null : (
    <div className="horoscope-section mt-5 mb-5">
      <h2>Select Your Horoscope</h2>
      <div className="horoscope-select">
        <HoroscopeCard title="Capricorn" description="December 22 - January 19" zodiacSign={zodiacSign} getSign={getSign}/>
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
    </div>
  )
}</>)};

export default Horoscopes;
