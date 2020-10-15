import React from "react";

import ItemBug from "./ItemBug";
import "../App.css";

export default function ListBug(props) {
  const { bugs } = props;

  return (
    <div className="list-component">
      {bugs && bugs.map((bug) => <ItemBug key={bug.id} bug={bug} />)}
    </div>
  );
}
