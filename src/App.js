import React from "react";
import "./App.css";
import ListBug from "./components/ListBug";

import Container from "@material-ui/core/Container";
import InputBug from "./components/InputBug";

import { useSelector } from "react-redux";

function App() {
  const bugs = useSelector((state) => state.bugs);
  // const bug = useSelector((state) => state.bugs);

  return (
    <div className="App">
      <Container>
        <InputBug />
      </Container>

      <div className="App-body">
        <ListBug bugs={bugs} />
      </div>
    </div>
  );
}

export default App;
