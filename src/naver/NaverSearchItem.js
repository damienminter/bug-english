import React from "react";

export default function NaverSearchItem(props) {
  const { place } = props;
  return (
    <div>
      <div>{place.name}</div>
      <div>{place.display}</div>
      <div>{place.homepage}</div>
      <div>{place.telDisplay}</div>
      <div>{place.bizhourInfo}</div>
    </div>
  );
}
