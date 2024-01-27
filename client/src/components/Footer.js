import React from "react";
import Github from "../images/github.svg";
import LinkedIn from "../images/linkedin.svg";
import Stack from "../images/stack.svg";
import "../styles/Footer.css";
import { Container, Button } from "react-bootstrap";

function Footer() {
  return (
    <Container className="footer-container">
      <div className="donate-field">
        <h2>Donate to Us!</h2>
        <div className="button-area">
          <Button className="homeBtn">Donate</Button>
        </div>
      </div>

      <div className="contact-field">
        <h2>Contact Us</h2>
        <span>Phone: 415-123-4567</span>
        <span>Email: Stargazers@gmail.com</span>
        <span>Location: TBD</span>
      </div>

      <div className="media-links">
        <h2>Media Links</h2>
        <ul className="footer-icons">
          <a
            className="footericon"
            target="blank"
            href="https://github.com/maxr-e/star-grazers"
          >
            <img src={Github} className="icons" alt="github" />
          </a>

          <a
            className="footericon"
            target="blank"
            href="https://www.linkedin.com/"
          >
            <img src={LinkedIn} className="icons" alt="linkedin" />
          </a>

          <a
            className="footericon"
            target="blank"
            href="https://stackoverflow.com"
          >
            <img src={Stack} className="icons" alt="stack" />
          </a>
        </ul>
      </div>
    </Container>
  );
}

export default Footer;
