import React, { useState } from "react";
import {
  Container,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/MoonPhases.css';

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
//     <form className="form">
//        </form>
  return (
    <div >
      <h1 className="mt-5 mb-5 moontitle">Generate Star Chart</h1>
      <Container className=" starBack border">
 
      <Form className="emailTwo" onSubmit={handleAddressSubmit}>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Label><p>Address:</p></Form.Label>
        <Form.Control type="text" placeholder="Enter Address" onChange={handleAddressChange}/>
        <Form.Text className="text-muted"><p>
          We'll never share your address with anyone else.</p>
        </Form.Text>
      </Form.Group>
      <Button className="starButton" variant="danger" size="" type="submit">
        CONVERT
      </Button>
      </Form>
      <form className="form">
        <p className="inputTitle">Longitude:</p>
        <input className="inputs form-control"
          value={longitude}
          name="longitude"
          onChange={handleLongitudeChange}
          type="number"
          placeholder="Longitude"
        />
        <br></br>
        <p className="inputTitle">Latitude:</p>
        <input className="inputs form-control"
          value={latitude}
          name="latitude"
          onChange={handleLatitudeChange}
          type="number"
          placeholder="Latitude"
        />

        <div className="dateSection">
          <label className="dateBox" htmlFor="date"><p>Date:</p></label>
          <input className="dateText"
            type="date"
            id="date"
            name="date"
            onChange={handleDateChange}
            required
          />
          <label htmlFor="dropdown" ><p>Type:</p></label>
          <select id="dropdown" style={{color: 'black'}} value={starType} onChange={handleStarChange}>
          <option value="">-- Select --</option>
          <option value="area">Area</option>
          <option value="constellation">Constellation</option>
          </select>
          <label htmlFor="dropdown" ><p>Constellation:</p></label>
          <select id="dropdown" style={{ color: 'black' }}value={constellation} onChange={handleConstellationChange}>
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
          <button type="button" className="btn btn-secondary postBtn" onClick={getStarCharts}>Generate Image</button>
          </div>
          </form> 
        {load ? (<h1>Loading...</h1>) : (<div></div>)}
        {starImage && <img src={starImage.imageUrl} className="starimg" alt="Star Chart" style={{ width: 800, height: 600 }}/>}
    </Container>
    </div>
  );
  }

export default StarCharts;




