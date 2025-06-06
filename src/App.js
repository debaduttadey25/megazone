import React from "react";
import "./App.css";
import LandingPage from "./components/landigpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
   
      <Router>
        <Routes>
          
          <Route path="/" element={<LandingPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
