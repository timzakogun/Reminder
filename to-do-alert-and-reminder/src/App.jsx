import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import LandingPage from "./assets/Component/LandingPage"
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
      
        <Route path="/Landingpage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
