import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../styles/MoonPhases.css";

function MoonPhases() {
  const [moonImage, setMoonImage] = useState(null);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [load, setLoad] = useState(false);
  const url = "https://api.astronomyapi.com/api/v2/studio/moon-phase";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic MTQ2YzU0ZjAtNTkyOS00ZjM1LWExOWUtNWNmZDljMTViOTM5OjhkNjQ4YWM1ZjVjNGRhMWRhZmE2MzEwYjNjYmE1OTMxNjg3Y2M2NmY5NzM0YWE1MDYxNzg1ZmUyNmM4YmZmOGM2ZjkzZTcxM2VkMTQwYmYwNjA1NzcxOGVmNmQwNmVkNWU3MDczZmJmZWRmYmZiZjA4ZDNhZjVkNjM2NGUzZTY5N2JlYmFkMGU1ZjA5OTI0YzY3ZjBlYmFiNWJjN2FlMmNlZmUyMTBhMmIyZTdiMDE3MTY2YmQ1NzRmZjFjMGZmZjhhZDI0NGJkY2NlNzlhNDdhM2IyZTM2NDFkMTg0ZDk5",
    },
    body: JSON.stringify({
      format: "png",
      observer: {
        date: date,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      style: {
        backgroundColor: "red",
        backgroundStyle: "stars",
        headingColor: "white",
        moonStyle: "default",
        textColor: "white",
      },
      view: {
        type: "portrait-simple",
      },
    }),
  };

  const getMoonPhases = async (event) => {
    try {
      setLoad(true);
      const response = await fetch(url, options);
      setLoad(false);
      const result = await response.json();
      setMoonImage(result.data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddressSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/location", {
        method: "POST",
        body: JSON.stringify({
          address: address,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.length > 0) {
        const dataWeWant = data[0];
        setLongitude(dataWeWant.longitude);
        setLatitude(dataWeWant.latitude);
      }
    } catch (error) {
      console.log.error(error);
    }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    console.log(address);
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
    console.log(latitude);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
    console.log(longitude);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  return (
    <div className="moonphase-section">
      <h1 className="mt-5 mb-5 moontitle">Generate Moon Phase</h1>
      <Container className="moonbox">
        <Form className="emailOne" onSubmit={handleAddressSubmit}>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>
              <p>Address:</p>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              onChange={handleAddressChange}
            />{" "}
            <Button className="moonButton" size="" type="submit">
              Convert
            </Button>
            <Form.Text>
              <p>
                We'll never share your address with anyone else.
              </p>
            </Form.Text>
          </Form.Group>
        </Form>
        <form className="form">
          <p className="inputTitle">Longitude:</p>
          <input
            className="inputs form-control"
            value={longitude}
            name="longitude"
            onChange={handleLongitudeChange}
            type="number"
            placeholder="Longitude"
          />
          <br></br>
          <p className="inputTitle">Latitude:</p>
          <input
            className="inputs form-control"
            value={latitude}
            name="latitude"
            onChange={handleLatitudeChange}
            type="number"
            placeholder="Latitude"
          />
          <label className="dateBox" htmlFor="date">
            <p>Date:&nbsp;</p>
          </label>
          <input
            className="dateText"
            type="date"
            id="date"
            name="date"
            onChange={handleDateChange}
            required
          />
          <button
            type="button"
            className="btn btn-secondary postBtn"
            onClick={getMoonPhases}
          >
            Generate Image
          </button>
        </form>
        {load ? <h1>Loading...</h1> : <div></div>}
        {moonImage && (
          <img src={moonImage.imageUrl} className="moonimg" alt="moon phase" />
        )}
      </Container>
    </div>
  );
}

export default MoonPhases;
