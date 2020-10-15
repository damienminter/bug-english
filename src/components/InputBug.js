import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import BugReportIcon from "@material-ui/icons/BugReport";

//Redux
import { useDispatch } from "react-redux";
import { addBugAction } from "../redux/actions";

// Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
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
  };
  const [bugValues, setBugValues] = useState(initState);

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
      timeStamp: new Date(),
      name: bugValues.bugName,
      img: "url of the image",
      description: bugValues.bugDescription,
    };
    dispatchBug(addBugAction(newBug));
    setBugValues(initState);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {"Me"}
          </Avatar>
        }
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
            value={bugValues.bugName}
            onChange={handleOnChange}
          />
          <TextField
            id="bugDescription"
            label="Description"
            variant="outlined"
            value={bugValues.bugDescription}
            onChange={handleOnChange}
          />
          <Button type="submit" variant="outlined" color="secondary">
            Submit
            <BugReportIcon />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
