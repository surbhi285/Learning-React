import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloComponent from './HelloComponent';
import reportWebVitals from './reportWebVitals';
import IncrementDecrement from './IncrementDecrementCounter/IncrementDecrement';
import App from './App';
import ByeComponent from './ByeComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloComponent name={"Surbhi"} standard={"10"}/> */}
    {/* <ByeComponent />
    <IncrementDecrement /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
