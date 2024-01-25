import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Upside from "../images/copy.jpeg";
import Homepic from "../images/universee.jpeg";
import GalaxyNasa from "../images/galaxyNasa.jpeg";
import Universe from "../images/universee.jpeg";
import Background from "../images/background2.jpeg";
import NavBar from "../images/navBar.webp";
import Moon from "../images/moon.svg";
import Star from "../images/star.svg";
import HomeCard from "../components/Card";
import "../styles/Homepage.css";
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <div className="celestialCosmicBackGround">
      <Container >
        <h2 className="welcome"> Welcome! </h2>
        <h3 className="explore"> Explore with Us! </h3>
        <p className="hometext">
          {" "}
          Discuss your favorite stars with us...
          Try out our moonphases API...
          <br></br>
          Try out our starcharts API...
        </p>
        <div className="row d-flex homepageCards"> 
        <HomeCard className="cardOne"
          title="Star Talk"
          description="Talk about stars with others!"
          link="/stars"
          icon={Star}
        />
        <HomeCard className="cardOne"
          title="Moon Phases"
          description="Use your location to see moonphases!"
          link="/moonphases"
          icon={Moon}
        />
        <HomeCard className="cardOne"
          title="Star Charts"
          description="Use your location to see constellations!"
          link="/starcharts"
          icon={Star}
        />
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default Homepage;