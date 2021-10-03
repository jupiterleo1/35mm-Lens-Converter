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
      <form className="forms">
        <input type="radio" id="m43" name="formats" />
        <label for="m43">Micro Four Thirds</label>
        <br />
        <input type="radio" id="apsc" name="formats" />
        <label for="apsc">APS-C</label>
        <br />
        <input type="radio" id="1inch" name="formats" />
        <label for="1 inch">1 inch. Sensor</label>
        <br />
        <br />
        <label for="fname" className="labels">
          Your Lens mm.
        </label>
        <input
          type="number"
          id="fname"
          className="fname"
          name="fname"
          maxlength="5"
        />
        <br />
        <label for="lname" className="labels">
          35 mm equivalent name:
        </label>
        <br />
        <input
          type="number"
          id="lname"
          className="lname"
          name="lname"
          maxlength="5"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

const container = <Container />;

const form = <Form />;

const heading = <Heading />;

ReactDOM.render(container, document.getElementById('root'));
