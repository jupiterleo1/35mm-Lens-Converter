import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import React, { useState } from 'react';
import Heading  from './components/heading';
import Buttons  from './components/buttons';
import Form  from './components/form';



function Container() {
  return (
    <div className="box">
      <Heading />
      <Form />
    </div>
  );
}





const container = <Container />;

const form = <Form />;

const heading = <Heading />;



ReactDOM.render(container, document.getElementById('root'));
