import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import BugReportIcon from "@material-ui/icons/BugReport";

//Redux
import { useSelector } from "react-redux";
import NaverSearchContainer from "../../naver/NaverSearchContainer";
import NaverSearchItem from "../../naver/NaverSearchItem";
import ProgressBar from "../../firebase/ProgressBar";
import useStorage from "../../firebase/useStorage";

import InputType from "./InputType";
import InputTypeWrite from "./InputTypeWrite";
import InputTypeImage from "./InputTypeImage";
import usePostBug from "../../bugs/usePostBug";
import InputTypeUrl from "./InputTypeUrl";

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

// xxxxxxxxxxxxxxxxxx************** MAIN FUNCTION xxxxxxxxxxxxxxxxxx************** //

export default function InputBug() {
  // Material UI
  const classes = useStyles();

  // Component state
  const bugInit = {
    typeText: "",
    typeImage: "",
    typeUrl: "",
  };

  const [input, setInput] = useState(bugInit);
  const [file, setFile] = useState(null); // File to upload to storage
  const [place, setPlace] = useState({});
  const [bug, setBug] = useState(null);

  const [value, setValue] = useState(0); // Input Type selector

  const { progress, url, error } = useStorage(file);
  const { msg } = usePostBug(bug);

  // TEMP TEMP TEMP TEMP TEMP
  if (error || msg) console.log(msg || error);

  const newBug = {
    type: value,
    media: null,
    compName: place.name,
    compId: place.id,
    author: "Damien Minter",
  };

  // Central State
  // const dispatchBug = useDispatch();
  const searchResult = useSelector((state) => state.searchResult);

  // Update the company infomation with store result from naver search
  useEffect(() => {
    setPlace(searchResult);
  }, [searchResult]);

  // Submit bug
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === 1 && input.typeImage !== "") {
      const addPhoto = () => {
        setFile(input.typeImage);
      };
      addPhoto();
    }
    if (value === 0) {
      setBug({ ...newBug, media: input.typeText });
    }
    if (value === 2) {
      setBug({ ...newBug, media: input.typeUrl });
    }
  };

  // clean up file once file is uploaded
  useEffect(() => {
    if (url) {
      setFile(null);
      setBug({ ...newBug, media: url });
    }
  }, [url]);

  console.log(input);

  // xxxxxxxxxxxxxxxxxx************** RETURN JSX xxxxxxxxxxxxxxxxxx************** //

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
      <InputType
        // setSubmit={setSubmit}
        value={value}
        setValue={setValue}
        typeWrite={<InputTypeWrite input={input} setInput={setInput} />}
        typeImage={<InputTypeImage input={input} setInput={setInput} />}
        typeUrl={<InputTypeUrl input={input} setInput={setInput} />}
      />
      <CardContent>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {place && <NaverSearchItem place={place} />}
          <NaverSearchContainer />
          {file && <ProgressBar progress={progress} />}
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
