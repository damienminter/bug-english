import React from "react";

import { Switch, Route } from "react-router-dom";
import NewBug from "../pages/NewBug";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Company from "../pages/Company";
import NoMui from "../pages/NoMui";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/add-bug">
          <NewBug />
        </Route>
        <Route path="/no-mui">
          <NoMui />
        </Route>
        <Route path="/bug-details">
          <Details />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
