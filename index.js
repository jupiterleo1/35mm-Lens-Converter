import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Converter() {
  return (
    <div className="box">
      <h1 className="title">Lens Converter</h1>
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

const converter = <Converter />;

ReactDOM.render(converter, document.getElementById('root'));
