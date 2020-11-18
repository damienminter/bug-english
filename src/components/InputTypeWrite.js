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

export default function InputTypeWrite({ input, setInput }) {
  const classes = useStyles();
  //   const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <TextField
        id="bugDescription"
        label="Description"
        variant="outlined"
        required
        multiline
        rows={8}
        value={input}
        onChange={handleOnChange}
        className={classes.margin}
      />
    </div>
  );
}
