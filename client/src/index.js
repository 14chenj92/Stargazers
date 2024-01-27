import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import StarsBackground from './components/StarsBackground';

ReactDOM.render(
  <React.StrictMode>
    <StarsBackground/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

