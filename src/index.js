import React from 'react';
import { render }from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom"; // for app to be responsive as it only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page
const root = document.getElementById('root');
render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  ,root
);

