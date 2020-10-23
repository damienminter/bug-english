import React, { useState } from "react";
import useNaver from "../naver/useNaver";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

// Component
export default function NaverSearch() {
  const classes = useStyles();

  const [search, setSearch] = useState("");

  useNaver(search);

  // was looking to use the change to fire the api
  const handleNaverSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <TextField
      id="bugSearch"
      label="Naver Search"
      variant="outlined"
      required
      value={search}
      onChange={handleNaverSearchChange}
      className={classes.margin}
    />
  );
}
