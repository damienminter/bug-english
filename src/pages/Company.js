import React, { useState } from "react";
import CompanyListBug from "../components/company/CompanyListBugs";

import { useSelector } from "react-redux";
import CompanyInformation from "../components/company/CompanyInformation";

export default function Company() {
  const comp = useSelector((state) => state.company);
  const compBugs = useSelector((state) => state.filterBugs);
  const currentBug = useSelector((state) => state.bug);

  if (comp === null || comp === undefined) {
    return (
      <>
        <h2>There is no company assigned</h2>
        need to keep state of the bug we clicked on so that we can perform an
        action on how to handle
      </>
    );
  } else
    return (
      <>
        {Object.keys(comp).length > 0 && (
          <div>
            <CompanyInformation comp={comp} />
            <CompanyListBug compBugs={compBugs} />
          </div>
        )}
        {Object.keys(comp).length === 0 && (
          <div>
            <h2>Link back to Home page</h2>
          </div>
        )}
      </>
    );
}
