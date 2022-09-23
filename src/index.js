import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import contactReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer:contactReducer },composeWithDevTools())
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />  
  </Provider>
);
