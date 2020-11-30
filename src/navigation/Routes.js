import React from "react";

import { Switch, Route } from "react-router-dom";
import NewBug from "../pages/NewBug/NewBug";
import Home from "../pages/Home/Home";
import Details from "../pages/BugDetails/Details";
import Company from "../pages/Company/Company";
import NoMui from "../pages/NoMui/NoMui";

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
