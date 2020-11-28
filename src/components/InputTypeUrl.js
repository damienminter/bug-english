import React, { useState } from "react";
import ReactPlayer from "react-player";

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
  const [error, setError] = useState(null);
  //   proxy = "https://cors-anywhere.herokuapp.com/";
  // const url = `https://www.youtube.com/watch?v=PW0tlULei9o`;

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
    // setSubmit("text");

    setPreview(e.target.value);
    setError(null);
  };

  const previewInit = () => {
    if (input.typeUrl !== "") return input.typeUrl;
  };

  const [preview, setPreview] = useState(previewInit); // Temp location of the selected file

  return (
    <div>
      <TextField
        id="typeUrl"
        label="Paste URL"
        variant="outlined"
        required
        value={input.url}
        onChange={handleOnChange}
        className={classes.margin}
      />
      {error && <p>{error}</p>}
      <ReactPlayer
        controls
        url={input.typeUrl}
        onError={() => setError("Not recognised")}
      />
    </div>
  );
}
