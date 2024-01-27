import React from "react";
import { Card, Button } from 'react-bootstrap';

function HomeCard(props) {
    return (
      <Card className="homeCard mt-4">
        <Card.Body>
        <img className="homepage-icon" src={ props.icon } alt="star-icon"></img>
        <h2 className="mt-4 mb-4">{props.title}</h2>
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
  
  export default HomeCard;