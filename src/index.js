import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserTree from './UserTree'
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));

const AUTH_TOKEN = 'Token 6eca1c4d65c47d438b5beb852674bacb7e38ed1d';

axios.defaults.baseURL = 'http://127.0.0.1:8000'; //'http://127.0.0.1:8000'//
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.post('/voyage/', {

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
