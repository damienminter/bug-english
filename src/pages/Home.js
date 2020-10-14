import React from "react";
import ListBug from "../components/ListBug";
import { useSelector } from "react-redux";

export default function Home() {
  const bugs = useSelector((state) => state.bugs);
  return (
    <div>
      <ListBug bugs={bugs} />
    </div>
  );
}
