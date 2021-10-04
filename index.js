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
        <input type="radio" id="oneinch" name="formats" />
        <label htmlFor="oneinch">1 inch. Sensor</label>
        <br />
        <br />
        <div className="labels">
          <label htmlFor="fname">Your Lens mm.</label>
          <input
            type="number"
            id="fname"
            className="fname"
            name="fname"
            maxLength="5"
            onClick={chooseFormat}
          />

          <label htmlFor="lname">35 mm equivalent name:</label>
          <br />
          <input
            type="number"
            id="lname"
            className="lname"
            name="lname"
            maxLength="5"
            
          />
        </div>
        <br />
        <input
          type="submit"
          className="submit-btn"
          value="Convert"
          // onSubmit={}
        />
      </form>
    </>
  );
}

const container = <Container />;

const form = <Form />;

const heading = <Heading />;

const calculateM43 = () =>{
  let input = document.getElementById("fname").value;
  let m43 = input * 2;
  let thirtyFiveConverted = document.getElementById("lname");
  thirtyFiveConverted.setAttribute("value", `${m43}`);

}

const calculateApsc = (mm) => { 
  let input = document.getElementById("fname").value;
  let apsc = input * 1.5;
  let thirtyFiveConverted = document.getElementById("lname");
  thirtyFiveConverted.setAttribute("value", `${apsc}`);
}

const calculate1inch = (mm) => {
  let input = document.getElementById("fname").value;
  let oneInch = input * 2.7;
  let thirtyFiveConverted = document.getElementById("lname");
  thirtyFiveConverted.setAttribute("value", `${oneInch}`);
}

const chooseFormat = () => {
if(document.getElementById("m43").type === "radio" && document.getElementById("m43").htmlFor === "m43"){
  calculateM43();
}
else if (
  document.getElementById("apsc").type === "radio" && document.getElementById("apsc").htmlFor === "apsc"){
  calculateApsc();
}
else if( 
document.getElementById("oneinch").type === "radio" && document.getElementById("oneinch").htmlFor === "oneinch"){
calculate1inch();
}
else {
console.log("Not working");
}


ReactDOM.render(container, document.getElementById('root'));

}