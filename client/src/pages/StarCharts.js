import React, { useState } from "react";
import {
  Container,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/StarCharts.css';

function StarCharts() {
  const [starImage, setStarImage] = useState(null);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [starType, setStarType] = useState('');
  const [constellation, setConstellation] = useState('');
  const [load, setLoad] = useState(false);
  const url = "https://api.astronomyapi.com/api/v2/studio/star-chart";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "Basic MTQ2YzU0ZjAtNTkyOS00ZjM1LWExOWUtNWNmZDljMTViOTM5OjhkNjQ4YWM1ZjVjNGRhMWRhZmE2MzEwYjNjYmE1OTMxNjg3Y2M2NmY5NzM0YWE1MDYxNzg1ZmUyNmM4YmZmOGM2ZjkzZTcxM2VkMTQwYmYwNjA1NzcxOGVmNmQwNmVkNWU3MDczZmJmZWRmYmZiZjA4ZDNhZjVkNjM2NGUzZTY5N2JlYmFkMGU1ZjA5OTI0YzY3ZjBlYmFiNWJjN2FlMmNlZmUyMTBhMmIyZTdiMDE3MTY2YmQ1NzRmZjFjMGZmZjhhZDI0NGJkY2NlNzlhNDdhM2IyZTM2NDFkMTg0ZDk5",
    },
    body: JSON.stringify({
      style: "navy",
      observer: {
        date: date,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      view: {
          type: starType,
          parameters: {
              constellation: constellation, // 3 letter constellation id
              position: {
                equatorial: {
                    rightAscension: 14.83,
                    declination: -15.23
                }
            },
            zoom: 5 //optional
          }
      }
  }),
  };
  
  const getStarCharts = async (event) => {

      try {
        setLoad(true)
        const response = await fetch(url, options)
        setLoad(false)
        const result = await response.json();
        setStarImage(result.data)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    const handleAddressSubmit = async (event) => {
    event.preventDefault();
    try{

      const response = await fetch('/api/location', {
        method: 'POST',
        body: JSON.stringify({
          address: address
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      
      if (data.length > 0) {
        const dataWeWant = data [0];
        setLongitude(dataWeWant.longitude);
        setLatitude(dataWeWant.latitude);
      }
    } catch (error) {
      console.log.error(error);
      }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    console.log(address)
  };


    const handleLatitudeChange = (event) => {
      setLatitude(event.target.value);
    };
  
    const handleLongitudeChange = (event) => {
      setLongitude(event.target.value);
    };

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };

    const handleStarChange = (event) => {
      setStarType(event.target.value);
    };

    const handleConstellationChange = (event) => {
      setConstellation(event.target.value);
      console.log(constellation)
    };

  return (
    <div className="starchart-section">
      <h2 className="mt-5 mb-5">Generate Star Chart</h2>
      <Container className=" starbox">
      <div className="starbox-left">
      <p className="mb-4">Enter your Location.</p>
        <Form onSubmit={handleAddressSubmit}>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>
              <p>City:</p>
            </Form.Label>
            <div className="city-box mb-4">
            <Form.Control className="inputs"
              type="text"
              placeholder="Enter City"
              onChange={handleAddressChange}
            />
            <Button className="moonButton btn-secondary" type="submit">
              Convert
            </Button>
            </div>
            <p className="mb-5">We'll never share your location with anyone else.</p>
          </Form.Group>
        </Form>
      <form className="form">
        <p className="mt-4 mb-4">Longitude:</p>
        <input className="inputs form-control"
          value={longitude}
          name="longitude"
          onChange={handleLongitudeChange}
          type="number"
          placeholder="Longitude"
        />
        <br></br>
        <p className="mt-4 mb-4">Latitude:</p>
        <input className="inputs form-control"
          value={latitude}
          name="latitude"
          onChange={handleLatitudeChange}
          type="number"
          placeholder="Latitude"
        />

        <div className="dateSection">
          <label className="dateBox" htmlFor="date"><p>Date:&nbsp;&nbsp;</p></label>
          <input className="dateText mb-4"
            type="date"
            id="date"
            name="date"
            onChange={handleDateChange}
            required
          />
          <div className="star-options mb-2">
          <label htmlFor="dropdown" ><p>Type:&nbsp;&nbsp;</p></label>
          <select id="con-dropdown" className="dropdown" style={{color: 'black'}} value={starType} onChange={handleStarChange}>
          <option value="">-- Select --</option>
          <option value="area">Area</option>
          <option value="constellation">Constellation</option>
          </select>
          </div>
          <div className="star-options mb-2">
          <label htmlFor="dropdown" ><p>Constellation:&nbsp;&nbsp;</p></label>
          <select id="star-dropdown"className="dropdown" style={{ color: 'black' }} value={constellation} onChange={handleConstellationChange}>
          <option value="">-- Select --</option>
          <option value="and">Andromeda</option><option value="ant">Antlia</option>
          <option value="aps">Apus</option>
          <option value="aqr">Aquarius</option>
          <option value="aql">Aquila</option>
          <option value="ara">Ara</option>
          <option value="ari">Aries</option>
          <option value="aur">Auriga</option>
          <option value="cae">Caelum</option>
          <option value="ori">Orion</option>
          </select>
          </div>
          <button type="button" className="btn btn-secondary postBtn" onClick={getStarCharts}>Generate Image</button>
          </div>
          </form>
          </div>
          <div className="starbox-right">
        <h2 className="mb-5">Star Chart</h2>
        {load ? (<h2>Loading...</h2>) : (<div></div>)}
        {starImage && <img src={starImage.imageUrl} className="starimg" alt="Star Chart" style={{ width: 750, height: 600 }}/>}
        </div>
    </Container>
    </div>
  );
  }

export default StarCharts;




