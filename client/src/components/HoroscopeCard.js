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
      <>
      <Card className="homeCard mt-4">
        <Card.Body>
        <img className="homepage-icon" src={ props.icon } alt="zodiac-icon"></img>
        <h3 className="zodiac-title mt-4 mb-4">{props.title}</h3>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button className="btn mt-4" href={props.link}
          onClick={props.getSign}>
            {"View"}
          </Button>
        </Card.Body>
      </Card>
      {/* {zodiacSign ? (<h2>Horoscope Text</h2>) : (<div></div>)}   */}
      </>
    );
  }
  
  export default HoroscopeCard;