import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import PrimarySearchAppBar from "./navigation/PrimarySearchAppBar";
import Routes from "./navigation/Routes";

function App() {
  // const bug = useSelector((state) => state.bugs);

  return (
    <Router>
      <div className="App">
        <PrimarySearchAppBar />
        <Routes />
        {/* <Container>
          <InputBug />
        </Container>
        <div className="App-body">
          <ListBug bugs={bugs} />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
