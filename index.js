import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import React, { useState } from 'react'; 

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
       
          <ul className="formats">
            <li>
            <label htmlFor="m43" className="choices">Micro Four Thirds</label>
            <input type="radio" id="m43" name="formats" className="choices" checked onFocus={chooseFormat} />
       </li>
            <li>       <label className="choices" htmlFor="apsc">APS-C</label> <input type="radio" id="apsc" name="formats" className="choices"  onFocus={chooseFormat} />
 </li>
            <li><label className="choices" htmlFor="oneinch">1 inch. Sensor</label><input type="radio" id="oneinch" name="formats" className="choices" onFocus={chooseFormat}/>
        </li>
            </ul>
    
        
        <div className="labels">
          <label htmlFor="fname" className="your-lens-label">Your Lens mm.</label>
          <input
            type="number"
            id="fname"
            className="fname"
            name="fname"
            maxLength="5"
            // onClick={chooseFormat}
          />

          <label htmlFor="lname" className="thirty-five-label">35 mm equivalent</label>
        
          <input
            type="number"
            id="lname"
            className="lname"
            name="lname"
            maxLength="5"
            disabled 
            
          />
        </div>
        <br />
        <div className="submit-container">
        <input
          type="submit"
          className="submit-btn"
          value="Convert"
          onClick={chooseFormat}
        />
        </div>
      </form>
      
    </>
  );
}

const container = <Container />;

const form = <Form />;

const heading = <Heading />;

const calculateM43 = () =>{
  let input = document.getElementById("fname").value;
  let input2 = document.getElementById("fname");
  input2.setAttribute("checked","");
  let m43 = input * 2;
  let thirtyFiveConverted = document.getElementById("lname");
  thirtyFiveConverted.setAttribute("value", `${m43}`);

}

const calculateApsc = (mm) => { 
  let input = document.getElementById("fname").value;
  let input2 = document.getElementById("fname");
  input2.setAttribute("checked","");
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

const calculate = () =>{
  let input = document.getElementById("fname").value;
  let input2 = document.getElementById("fname");
  input2.setAttribute("checked","");
  let m43 = input * 2;
  let thirtyFiveConverted = document.getElementById("lname");
  thirtyFiveConverted.setAttribute("value", `${m43}`);

}

const chooseFormat = (e) => {
  e.preventDefault();
  if(document.getElementById("m43").checked){
  calculateM43();
}
else if (
  document.getElementById("apsc").checked){
calculateApsc();
}
else if( 
document.getElementById("oneinch").checked){
calculate1inch();
}
else {
console.log("Not working");
}
}

ReactDOM.render(container, document.getElementById('root'));

