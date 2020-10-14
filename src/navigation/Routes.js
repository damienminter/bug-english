import React from "react";

import { Switch, Route } from "react-router-dom";
import NewBug from "../pages/NewBug";
import Home from "../pages/Home";
import Details from "../pages/Details";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/add-bug">
          <NewBug />
        </Route>
        <Route path="/bug-details">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
