import React from "react";
import { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import "../styles/Horoscopes.css"

function HoroscopeCard(props) {
    const [ zodiacSign, setZodiacSign ] = useState("");

    const getSign = () => {
      setZodiacSign("Leo");
    };
    
    return (
      <button className="horoscope-card">
        <img>{props.img}</img>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      {/* {zodiacSign ? (<h2>Horoscope Text</h2>) : (<div></div>)}   */}
      </button>
    );
  }
  
  export default HoroscopeCard;