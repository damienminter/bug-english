import React from "react";
import ItemBug from "../ItemBug";

// Redux
export default function CompanyListBugs(props) {
  const { bugs } = props;
  return (
    <div className="list-component">
      {/* {bugs && bugs.map((bug) => <ItemBug key={bug.id} bug={bug} />)} */}
    </div>
  );
}
