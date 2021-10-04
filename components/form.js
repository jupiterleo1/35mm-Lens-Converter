import React from 'react';
import Buttons from './components/buttons';

const calculate = (e) => {
  e.preventDefault();
  let input = document.getElementById('fname').value;
  let format;

  if (document.getElementById('m43').checked) {
    let m43 = document.getElementById('m43');

    document.getElementById('m43').setAttribute('checked', '');
    format = m43.getAttribute('cropfactor');
    // format = 2;
    console.log(format);
  } else if (document.getElementById('apsc').checked) {
    let apsc = document.getElementById('apsc');

    document.getElementById('apsc').setAttribute('checked', '');
    format = apsc.getAttribute('cropfactor');
    console.log(format);
  } else if (document.getElementById('oneinch').checked) {
    let oneInch = document.getElementById('oneinch');

    document.getElementById('oneinch').setAttribute('checked', '');
    format = oneInch.getAttribute('cropfactor');
    console.log(format);
  } else {
    console.log('Nothing Selected');
  }

  let output = input * format;

  let thirtyFiveConverted = document.getElementById('lname');
  thirtyFiveConverted.setAttribute('value', `${output}`);
};

function Form() {
  return (
    <>
      <form className="forms" action="#">
        <ul className="formats">
          <li>
            <label htmlFor="m43" className="choices">
              Micro Four Thirds: 2X Crop
            </label>
            <input
              type="radio"
              id="m43"
              name="formats"
              cropfactor="2"
              className="choices"
              onFocus={calculate}
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
              onFocus={calculate}
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
              onFocus={calculate}
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

export default Form;
