import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import BugReportIcon from "@material-ui/icons/BugReport";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addBugAction, selectBugAction } from "../redux/actions";
import NaverSearchContainer from "../naver/NaverSearchContainer";
import ProgressBar from "../firebase/ProgressBar";

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
export default function InputBug() {
  //Photo
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const classes = useStyles();
  const dispatchBug = useDispatch();
  const place = useSelector((state) => state.searchResult);

  const initState = {
    bugImgUrl: "",
    bugDescription: "",
  };
  const [bugValues, setBugValues] = useState(initState);

  const handleChangePhoto = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  const handleOnChange = (e) => {
    setBugValues({
      ...bugValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBug = {
      id: uuidv4(),
      // timeStamp: new Date(),
      timeStamp: "10.30",
      name: place.name,
      img: "url of the image",
      description: bugValues.bugDescription,
      compId: place.id,
    };
    dispatchBug(addBugAction(newBug));
    dispatchBug(selectBugAction(newBug));
    setBugValues(initState);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={"Bug English"}
        subheader="Enter a new Bug"
      />

      <CardContent>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>
            <input type="file" onChange={handleChangePhoto} />
            <span>+</span>
          </label>
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>

          <TextField
            id="bugDescription"
            label="Description"
            variant="outlined"
            required
            multiline
            rows={8}
            value={bugValues.bugDescription}
            onChange={handleOnChange}
            className={classes.margin}
          />

          <NaverSearchContainer />
          <Button
            className={classes.margin}
            type="submit"
            variant="outlined"
            color="secondary"
            // component={Link}
            // to={"/"}
          >
            Submit
            <BugReportIcon />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
