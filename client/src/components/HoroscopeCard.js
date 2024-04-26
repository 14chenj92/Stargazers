import React from "react";
import { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import "../styles/Horoscopes.css"

function HoroscopeCard(props) { 
    return (
      <>
      <Card className="zodiac-card mt-4 mb-4">
        <Card.Body>
        <img className="zodiac-icon" src={ props.icon } alt="zodiac-icon"></img>
        <h3 className="zodiac-title mt-2 mb-2">{props.title}</h3>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button className="btn mt-2" href={props.link}
          onClick={props.onClick}>
            {"View"}
          </Button>
        </Card.Body>
      </Card>
      {/* {zodiacSign ? (<h2>Horoscope Text</h2>) : (<div></div>)}   */}
      </>
    );
  }
  
  export default HoroscopeCard;