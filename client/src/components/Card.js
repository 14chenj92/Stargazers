import React from "react";
import { Card, Button } from 'react-bootstrap';

function HomeCard(props) {
    return (
      <Card className="homeCard mt-4">
        <Card.Body>
        <h2 className="cardTitle mt-3 mb-3">{props.title}<img src={props.icon} className="icon" alt="icon"/></h2>
          <Card.Text className="cardText">
            {props.description}
          </Card.Text>
          <Button className="view mt-3 mb-3 postBtn" href={props.link}>
            {"View"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default HomeCard;