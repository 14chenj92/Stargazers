import React from "react";
import { Card, Button } from 'react-bootstrap';
import "../styles/Horoscopes.css"

function HoroscopeCard(props) {
    return (
      <Card className="homeCard mt-4">
        <Card.Body>
        <img className="homepage-icon" src={ props.icon } alt="zodiac-icon"></img>
        <h3 className="zodiac-title mt-4 mb-4">{props.title}</h3>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button className="btn mt-4 mb-4" href={props.link}>
            {"View"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default HoroscopeCard;