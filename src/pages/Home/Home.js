import React from "react";
import ListBug from "./ListBug";
import useFireStore from "../../apis/firebase/useFirestore";

// import { useSelector } from "react-redux";

export default function Home() {
  // const bugs = useSelector((state) => state.bugs);
  const { docs } = useFireStore("BUGENGLISH_BUGS");
  console.log(docs);
  const bugs = docs;

  return (
    <div>
      <ListBug bugs={bugs} />
    </div>
  );
}
