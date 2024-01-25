import React from 'react';
import Github from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import Stack from '../images/stack.svg'
import '../styles/Footer.css';
import { Container, Col, Button } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="actuallyAFoot">
        <h1 className="contact d-flex justify-content-center">Contact Us </h1>
        <div className="footer d-flex justify-content-center">
        <div className="socialMedia">
        <ul className="elementor-icon-list-items">
        <a className="footericon " target="blank" href="https://github.com/maxr-e/star-grazers">
        <img src= {Github} className="icons"alt="github"/></a>
        

        <a className="footericon" target="blank" href="https://www.linkedin.com/">
        <img src= {LinkedIn} className="icons" alt="linkedin"/></a>  
        
        <a className="footericon" target="blank" href="https://stackoverflow.com">
        <img src= {Stack} className="icons" alt="stack"/></a> 
        </ul>
        </div> 
        </div> 
        <div className="donateField">Donate to Us!
        <Button className="donateButton postBtn" variant="outline-dark" size="lg">
        DONATE
      </Button></div>
        </Container>
        
  );
  }

  export default Footer;