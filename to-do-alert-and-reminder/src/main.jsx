import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'jquery'
import 'popper.js'

import { Route, Routes } from "react-router-dom";
import LandingPage from "./assets/Component/LandingPage"
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ContextProvider> */}
        <App />
      {/* </ContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
)
