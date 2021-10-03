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
          <h1 className="title">Lens Converter</h1>
    </div>
  );
}


function Form() {
  return (
    <div className="forms">
      <form>
        <label for="fname">Your Lens mm.</label>
        <br />
        <input type="number" id="fname" name="fname" size="6" maxlength="6" />
        <br />
        <label for="lname">35 mm equivqlent name:</label>
        <br />
        <input type="number" id="lname" name="lname" size="6" maxlength="6" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const container = <Container />;

const form = <Form />;

const heading = <Heading />;

ReactDOM.render( container , document.getElementById('root'));
