import React from 'react';
import React, { useState } from 'react';

function Buttons() {
  const [mm, setCrop] = useState(25);

  function increment(e) {
    e.preventDefault();
    setCrop(mm + 1);
    document.getElementById('fname').value = mm;
  }

  function decrement(e) {
    e.preventDefault();
    setCrop(mm - 1);
    document.getElementById('fname').value = mm;
  }

  return (
    <>
      <div className="btn-up-down">
        <input
          type="number"
          id="fname"
          className="fname btn"
          name="fname"
          maxLength="5"
          min="0"
          disabled
        />
        <button className="btn btn-up-color" onClick={increment}>
          +
        </button>
        <button className="btn btn-down-color" onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}

export default Buttons;
