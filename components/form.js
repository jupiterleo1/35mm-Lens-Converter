import React from 'react';
import Buttons from '../components/buttons';

function Form() {
  const calculate = (e) => {
    e.preventDefault();
    

    let format;
    let input = document.getElementById('fname').value;

    let m43 = document.getElementById('m43');
    let apsc = document.getElementById('apsc');
    let oneInch = document.getElementById('oneinch');
    let thirtyFiveConverted = document.getElementById('lname');

    let roundedOutput;
    
    if (document.getElementById('m43').checked) {
      m43.setAttribute('checked', '');
      format = m43.getAttribute('cropfactor');
    } else if (document.getElementById('apsc').checked) {
      apsc.setAttribute('checked', '');
      format = apsc.getAttribute('cropfactor');
    } else if (document.getElementById('oneinch').checked) {      
      document.getElementById('oneinch').setAttribute('checked', '');
      format = oneInch.getAttribute('cropfactor');
    } else {
      console.log('Nothing Selected');
    }

    let output = input * format;

    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
  }

roundedOutput = round(output, 1);

    thirtyFiveConverted.setAttribute('value', `${roundedOutput}mm`);
  };

  function showCalculator(){
    let calculator = document.getElementById("calculator");
    let calculateButton = document.getElementById("submit-button")

    calculator.classList.remove("hide");
    calculateButton.classList.remove("hide");
  }

  return (
    <>
      <form className="forms" action="#">
        <ul className="formats">
          <li>
            
            <input
              type="radio"
              id="m43"
              name="formats"
              cropfactor="2"
              className="choices"
              onClick={showCalculator}
            />
            <label htmlFor="m43" className="choices">
            Micro 4/3 :
            <a className="links" href="https://www.bhphotovideo.com/c/products/Mirrorless-Camera-Lenses/ci/17912/N/4196380428?filters=fct_lens-format-coverage_3332%3Afour-thirds" target=" blank">Lenses</a>
            </label>
          </li>
          <li>
            
            <input
              type="radio"
              id="apsc"
              name="formats"
              className="choices"
              cropfactor="1.5"
              onClick={showCalculator}
            />
            <label className="choices" htmlFor="apsc">
            APS-C :          
            <a className="links" href="https://www.bhphotovideo.com/c/products/Mirrorless-Camera-Lenses/ci/17912/N/4196380428?filters=fct_lens-format-coverage_3332%3Aaps-c-lenses" target=" blank">Lenses</a>
              
            </label>
          </li>
          <li>
            
            <input
              type="radio"
              id="oneinch"
              name="formats"
              className="choices"
              cropfactor="2.7"
              onClick={showCalculator}
            />
            <label className="choices" htmlFor="oneinch">
            1 inch : 
            <a className="links" href="https://www.bhphotovideo.com/c/products/Mirrorless-Camera-Lenses/ci/17912/N/4196380428?filters=fct_lens-format-coverage_3332%3A1in" target=" blank">Lenses</a>
              
            </label>
          </li>
        </ul>

        <div id="calculator" className="labels hide">
          <label htmlFor="fname" className="your-lens-label ">
            2. Enter your Lens mm.
          </label>

          <Buttons />

          <label htmlFor="lname" className="thirty-five-label ">
            35 mm equivalent
          </label>

          <input
            type="text"
            id="lname"
            className="lname"
            name="lname"
            maxLength="5"
            disabled
          />
        </div>
        <br />
        <div id="submit-button" className="submit-container hide">
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

export default Form;
