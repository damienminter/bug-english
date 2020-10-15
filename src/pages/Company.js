import React from "react";
// import CompanyListBug from "../components/company/CompanyListBugs";

import { useSelector } from "react-redux";
import CompanyInformation from "../components/company/CompanyInformation";

export default function Company() {
  const comp = useSelector((state) => state.company);
  console.log("COMPANY PAGE");
  console.log(comp);
  console.log(typeof comp);
  return (
    <div>
      <h1>THIS IS THE COMPANY PAGE</h1>

      {comp && (
        <div>
          <CompanyInformation comp={comp} />
        </div>
      )}
      {Object.keys(comp).length === 0 && <h2>Do you know this company?</h2>}
      {/* <CompanyListBug /> */}
    </div>
  );
}
