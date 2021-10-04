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

    thirtyFiveConverted.setAttribute('value', `${output}mm`);
  };

  return (
    <>
      <form className="forms" action="#">
        <ul className="formats">
          <li>
            <label htmlFor="m43" className="choices">
              Micro 4/3: 2X Crop
            </label>
            <input
              type="radio"
              id="m43"
              name="formats"
              cropfactor="2"
              className="choices"
              // onFocus={calculate}
            />
          </li>
          <li>
            <label className="choices" htmlFor="apsc">
              APS-C: 1.5x Crop
            </label>
            <input
              type="radio"
              id="apsc"
              name="formats"
              className="choices"
              cropfactor="1.5"
              // onFocus={calculate}
            />
          </li>
          <li>
            <label className="choices" htmlFor="oneinch">
              1 inch: 2.7x Crop
            </label>
            <input
              type="radio"
              id="oneinch"
              name="formats"
              className="choices"
              cropfactor="2.7"
              // onFocus={calculate}
            />
          </li>
        </ul>

        <div className="labels">
          <label htmlFor="fname" className="your-lens-label underline">
            2. Enter your Lens mm.
          </label>

          <Buttons />

          <label htmlFor="lname" className="thirty-five-label underline">
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

export default Form;
