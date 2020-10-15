import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import PrimarySearchAppBar from "./navigation/PrimarySearchAppBar";
import Routes from "./navigation/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <PrimarySearchAppBar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
