import React from "react";
// import CompanyListBug from "../components/company/CompanyListBugs";

import { useSelector } from "react-redux";
import CompanyInformation from "../components/company/CompanyInformation";

export default function Company() {
  // const { compId } = props;
  console.log("COMPANY PAGE");
  // console.log(compId);
  const comp = useSelector((state) => state.company);
  console.log(comp);
  return (
    <div>
      <h1>THIS IS THE COMPANY PAGE</h1>
      <h1>{}</h1>
      {/* <CompanyInformation comps={compId} />
      <CompanyListBug /> */}
    </div>
  );
}
