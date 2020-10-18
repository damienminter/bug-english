import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import makeRequest from "../naver/location";
import revLocation from "../naver/revLocation";
import makeRequestXhr from "../naver/location copy 2";
// import { Link } from "react-router-dom";

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
import { useDispatch } from "react-redux";
import { addBugAction, selectBugAction } from "../redux/actions";

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
  const classes = useStyles();
  const dispatchBug = useDispatch();

  const initState = {
    bugName: "",
    bugDescription: "",
    bugCompId: "0",
    bugSearch: "",
  };
  const [bugValues, setBugValues] = useState(initState);
  // const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setBugValues({
      ...bugValues,
      [e.target.id]: e.target.value,
    });
  };
  console.log(bugValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBug = {
      id: uuidv4(),
      // timeStamp: new Date(),
      timeStamp: "10.30",
      name: bugValues.bugName,
      img: "url of the image",
      description: bugValues.bugDescription,
      compId: bugValues.bugCompId,
    };
    dispatchBug(addBugAction(newBug));
    dispatchBug(selectBugAction(newBug));
    setBugValues(initState);
  };

  const handleClick = () => {
    // makeRequest();
    // revLocation();
    makeRequestXhr();
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
          <TextField
            id="bugName"
            label="Bug Name"
            variant="outlined"
            required
            value={bugValues.bugName}
            onChange={handleOnChange}
            className={classes.margin}
          />
          <TextField
            id="bugDescription"
            label="Description"
            variant="outlined"
            required
            multiline
            rowsMax={8}
            value={bugValues.bugDescription}
            onChange={handleOnChange}
            className={classes.margin}
          />
          <TextField
            id="bugCompId"
            label="Company Id"
            variant="outlined"
            required
            value={bugValues.bugCompId}
            onChange={handleOnChange}
            className={classes.margin}
          />
          <Button
            className={classes.margin}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Submit
            <BugReportIcon />
          </Button>
          <TextField
            id="bugSearch"
            label="Search Naver"
            variant="outlined"
            required
            value={bugValues.bugSearch}
            onChange={handleOnChange}
            className={classes.margin}
          />

          <Button
            className={classes.margin}
            type="submit"
            variant="outlined"
            color="secondary"
            onClick={handleClick}
          >
            Naver API
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
