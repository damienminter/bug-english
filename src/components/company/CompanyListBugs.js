import React from "react";
import ItemBug from "../ItemBug";
import CompanyBugList from "./CompanyBugList";

// Redux
export default function CompanyListBugs(props) {
  const { compBugs } = props;
  return (
    <div className="list-component">
      {compBugs && compBugs.map((bug) => <ItemBug key={bug.id} bug={bug} />)}
      <CompanyBugList />
    </div>
  );
}
