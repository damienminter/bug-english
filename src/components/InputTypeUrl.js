import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import CardMedia from "@material-ui/core/CardMedia";

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

export default function InputTypeUrl({ input, setInput }) {
  const classes = useStyles();
  const [preview, setPreview] = useState("");
  //   const [error, setError] = useState(null);
  //   proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `https://cors-anywhere.herokuapp.com/https://www.youtube.com/watch?v=PW0tlULei9o`;

  const handleOnChange = (e) => {
    setInput(e.target.value);
    setPreview(url);
  };

  console.log(input);

  return (
    <div>
      <TextField
        id="bugLink"
        label="Paste URL"
        variant="outlined"
        required
        value={input}
        onChange={handleOnChange}
        className={classes.margin}
      />
      <CardMedia
        component="iframe"
        className={classes.media}
        image={preview}
        autoPlay
      />
    </div>
  );
}
