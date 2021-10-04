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
  const [mm, setCrop] = useState(0);
  
function increment(e){
  e.preventDefault()
  setCrop(mm+1)
document.getElementById("fname").value =  mm;
console.log(mm)
}

function decrement(e){
  e.preventDefault()
  setCrop(mm-1)
  document.getElementById("fname").value =  mm;
  console.log(mm)
}

function Buttons(){
return <div className="btn-up-down">
<button className="btn" onClick={increment}>+</button>
<button className="btn" onClick={decrement}>-</button>
</div>
}

  return (
    <>
     
      <form className="forms" action="#">
        <ul className="formats">
          <li>
            <label htmlFor="m43" className="choices">
              Micro Four Thirds
            </label>
            <input type="radio" id="m43" name="formats" cropfactor="2" className="choices" onFocus={calculate}/> 
          </li>
          <li>
            <label className="choices" htmlFor="apsc">
              APS-C mm
            </label>
            <input type="radio" id="apsc" name="formats" className="choices" cropfactor="1.5"
            onFocus={calculate}  />
          </li>
          <li>
            <label className="choices" htmlFor="oneinch">
              1 inch. Sensor
            </label>
            <input
              type="radio"
              id="oneinch"
              name="formats"
              className="choices"
              cropfactor="2.7" 
              onFocus={calculate}
            />
          </li>
        </ul>

        <div className="labels">
          <label htmlFor="fname" className="your-lens-label">
            Your Lens mm.
          </label>
          <input
            type="number"
            id="fname"
            className="fname"
            name="fname"
            maxLength="5"
            min="0"
            // onClick={useState}
          />
          <Buttons />
          

          <label htmlFor="lname" className="thirty-five-label">
            35 mm equivalent
          </label>

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
            onClick={calculate}
          />
        </div>
      </form>
    </>
  );
}

const container = <Container />;

const form = <Form />;

const heading = <Heading />;

const calculateM43 = () => {
  let input = document.getElementById('fname').value;
  let input2 = document.getElementById('fname');
  input2.setAttribute('checked', '');
  let m43 = input * 2;
  let thirtyFiveConverted = document.getElementById('lname');
  thirtyFiveConverted.setAttribute('value', `${m43}`);
};

const calculateApsc = (mm) => {
  let input = document.getElementById('fname').value;
  let input2 = document.getElementById('fname');
  input2.setAttribute('checked', '');
  let apsc = input * 1.5;
  let thirtyFiveConverted = document.getElementById('lname');
  thirtyFiveConverted.setAttribute('value', `${apsc}`);
};

const calculate1inch = (mm) => {
  let input = document.getElementById('fname').value;
  let oneInch = input * 2.7;
  let thirtyFiveConverted = document.getElementById('lname');
  thirtyFiveConverted.setAttribute('value', `${oneInch}`);
};

const calculate = (e) => {
  e.preventDefault();
  let input = document.getElementById('fname').value;
  let format;
  


  if (document.getElementById('m43').checked) {
    let m43 = document.getElementById('m43');

    
    document.getElementById('m43').setAttribute('checked', '')
    format = m43.getAttribute("cropfactor")
    // format = 2;
    console.log(format);
  } else if (document.getElementById('apsc').checked) {
    let apsc = document.getElementById('apsc');

    
    document.getElementById('apsc').setAttribute('checked', '');
    format = apsc.getAttribute("cropfactor");
    console.log(format);
  } 
  
  else if (document.getElementById('oneinch').checked) {
    let oneInch = document.getElementById('oneinch');
    
    document.getElementById('oneinch').setAttribute('checked', '');
    format = oneInch.getAttribute("cropfactor");
    console.log(format);
  } else {
    console.log('Nothing Selected');
  }

  let output = input * format;

  let thirtyFiveConverted = document.getElementById('lname');
  thirtyFiveConverted.setAttribute('value', `${output}`);
};

// const chooseFormat = (e) => {
//   e.preventDefault();
//   if(document.getElementById("m43").checked){
//   calculateM43();
// }
// else if (
//   document.getElementById("apsc").checked){
// calculateApsc();
// }
// else if(
// document.getElementById("oneinch").checked){
// calculate1inch();
// }
// else {
// console.log("Not working");
// }
// }

ReactDOM.render(container, document.getElementById('root'));
