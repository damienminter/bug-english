import React from "react";
import DetailBug from "../components/DetailBug";
import { useSelector } from "react-redux";
import "../App.css";

export default function Details() {
  const bug = useSelector((state) => state.bug);
  return (
    <div className="details-component">
      <DetailBug bug={bug} />
    </div>
  );
}
