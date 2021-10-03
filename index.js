import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Container() {
  return (
    <div className="box">
      <Heading />
      <Form />
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h1 className="title">35mm Lens Converter</h1>
    </div>
  );
}

function Form() {
  return (
    <>
      <form className="forms" action="#">
        <input type="radio" id="m43" name="formats" />
        <label htmlFor="m43">Micro Four Thirds</label>
        <br />
        <input type="radio" id="apsc" name="formats" />
        <label htmlFor="apsc">APS-C</label>
        <br />
        <input type="radio" id="1inch" name="formats" />
        <label htmlFor="1 inch">1 inch. Sensor</label>
        <br />
        <br />
        <div className="labels">
          <label htmlFor="fname">Your Lens mm.</label>
          <input
            type="number"
            id="fname"
            className="fname"
            name="fname"
            maxlength="5"
          />

          <label htmlFor="lname">35 mm equivalent name:</label>
          <br />
          <input
            type="number"
            id="lname"
            className="lname"
            name="lname"
            maxlength="5"
          />
        </div>
        <br />
        <input
          type="submit"
          className="submit-btn"
          value="Convert"
          onSubmit="calculateM43"
        />
      </form>
    </>
  );
}

const container = <Container />;

const form = <Form />;

const heading = <Heading />;

const calculateM43 = (mm) =>{
  let m43 = mm * 2;
  console.log(m43);
}

const calculateApsc = (mm) =>{
  let aspc = mm * 1.5;
  return apsc
}

const calculate1inch = (mm) =>{
  return mm * 2.7;
}





ReactDOM.render(container, document.getElementById('root'));
