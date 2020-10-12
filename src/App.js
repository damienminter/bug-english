import React from "react";
import "./App.css";
import ListBug from "./components/ListBug";

import { useSelector } from "react-redux";

function App() {
  const bugs = useSelector((state) => state.bugs);
  // const bug = useSelector((state) => state.bugs);

  return (
    <div className="App">
      <div className="App-body">
        <ListBug bugs={bugs} />
      </div>
    </div>
  );
}

export default App;
