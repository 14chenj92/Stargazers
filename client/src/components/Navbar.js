import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, } from 'react-bootstrap';
import SignUpForm from '../pages/Signup';
import LoginForm from '../pages/Login';
import '../styles/Nav.css';
import starIcon from "../images/staricon.svg"

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="nav" variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand className="navtitle"as={Link} to='/'>
          <img className="star-icon"src={ starIcon } alt="star-icon"></img>
          Stargazers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
            <Nav className='ml-auto d-flex'>
            <Nav.Link className="navlinks" as={Link} to='/'>
            <img className="star-icon"src={ starIcon } alt="star-icon"></img>
                Home
              </Nav.Link>
              <Nav.Link className="navlinks" as={Link} to='/stars'>
              <img className="star-icon"src={ starIcon } alt="star-icon"></img>
                Star Talk
              </Nav.Link>
              <Nav.Link className="navlinks" as={Link} to='/moonphases'>
              <img className="star-icon"src={ starIcon } alt="star-icon"></img>
                Moon Phases
              </Nav.Link>
              <Nav.Link className="navlinks" as={Link} to='/starcharts'>
              <img className="star-icon"src={ starIcon } alt="star-icon"></img>
                Star Charts
              </Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link className="navlinks" as={Link} to='/me'>
                  <img className="star-icon"src={ starIcon } alt="star-icon"></img>
                  {Auth.getProfile().data.username}'s Profile
                  </Nav.Link>
                  <Nav.Link className="navlinks" onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                <Nav.Link className="navlinks" onClick={() => setShowModal(true)}><img className="star-icon"src={ starIcon } alt="star-icon"></img>
                Login/Signup</Nav.Link>
                </>
              )}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal 
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header className="modal-box">
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link className="modal-button" eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="modal-button" eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-box">
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};


export default AppNavbar;
