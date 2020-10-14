import React from "react";
import DetailBug from "../components/DetailBug";
import { useSelector } from "react-redux";

export default function Details() {
  const bug = useSelector((state) => state.bug);
  return (
    <div>
      <DetailBug bug={bug} />
    </div>
  );
}
