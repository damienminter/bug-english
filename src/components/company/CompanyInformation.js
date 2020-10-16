import React from "react";

export default function CompanyInformation(props) {
  const { comp } = props;
  return (
    <React.Fragment>
      <div className="company-information-component">
        <h1>{comp.name}</h1>
        <h2>{comp.id}</h2>
        <h2>{comp.logo}</h2>
        <h2>{comp.website}</h2>
        <h2>{comp.email}</h2>
      </div>
    </React.Fragment>
  );
}
