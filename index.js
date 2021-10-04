import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Heading from './components/heading';
import Form from './components/form';
import Footer from './components/footer';

function Container() {
  return (
    <div className="box">
      <Heading />
      <Form />
      <Footer />
    </div>
  );
}

const container = <Container />;

ReactDOM.render(container, document.getElementById('root'));
