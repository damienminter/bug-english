import React, { useEffect, useState } from "react";

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
  const [preview, setPreview] = useState(input.typeImage); // Temp location of the selected file
  const [error, setError] = useState(null);

  // Validation
  const types = ["image/png", "image/jpeg"];

  // Add Photo to UI
  const handleChangePhoto = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setPreview(URL.createObjectURL(selected));
      setError("");
    } else {
      setPreview(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  useEffect(() => {
    setInput({ ...input, typeImage: preview });
  }, [preview]);

  return (
    <div>
      <input type="file" onChange={handleChangePhoto} />
      <div className="output">
        {preview && (
          <img src={preview} alt={preview.name} className="main-image"></img>
        )}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
