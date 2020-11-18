import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

export default function InputTypeImage({ input, setInput }) {
  const classes = useStyles();
  //   const [input, setInput] = useState("");
  const [preview, setPreview] = useState(null); // Temp location of the selected file
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  // Add Photo to UI
  const handleChangePhoto = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setPreview(URL.createObjectURL(selected));
      setInput(preview);

      setError("");
    } else {
      setPreview(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  // const handleOnChange = (e) => {
  //   setInput(e.target.value);
  //   setPreview(url);
  // };

  return (
    <div>
      <label>
        <input type="file" onChange={handleChangePhoto} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {preview && (
          <img src={preview} alt={preview.name} className="main-image"></img>
        )}
      </div>
      {preview && <div>{preview.name}</div>}
    </div>
  );
}
