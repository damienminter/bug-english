import React from "react";
import NaverSearch from "./NaverSearch";
import NaverSearchItem from "./NaverSearchItem";
import NaverSearchList from "./NaverSearchList";

import { useSelector } from "react-redux";

export default function NaverSearchContainer() {
  const place = useSelector((state) => state.searchResult);

  return (
    <div>
      {place && <NaverSearchItem place={place} />}
      <NaverSearch />
      <NaverSearchList />
    </div>
  );
}
