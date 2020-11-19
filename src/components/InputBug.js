import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import BugReportIcon from "@material-ui/icons/BugReport";

//Redux
import { useDispatch, useSelector } from "react-redux";
// import { addBugAction, selectBugAction } from "../redux/actions";
import NaverSearchContainer from "../naver/NaverSearchContainer";
import NaverSearchItem from "../naver/NaverSearchItem";
import ProgressBar from "../firebase/ProgressBar";
import useStorage from "../firebase/useStorage";

import InputType from "./InputType";
import InputTypeWrite from "./InputTypeWrite";
import InputTypeImage from "./InputTypeImage";
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
  const [submit, setSubmit] = useState("image"); // api choice - photo/text
  const [preview, setPreview] = useState(null); // photo thubnail
  const [imageUrl, setImageUrl] = useState(null); // address of image
  // const [bugText, setBugText] = useState(""); // description
  // const [error, setError] = useState(null);
  const [file, setFile] = useState(null); // File to upload to storage
  const [place, setPlace] = useState({});
  // const [uploadUrl, setUploadUrl] = useState({});

  const { progress, url, error } = useStorage(file);

  console.log("input");
  console.log(input);

  // Central State
  // const dispatchBug = useDispatch();
  const searchResult = useSelector((state) => state.searchResult);

  // clean up file once file is uploaded
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  // Update the company infomation with store result from naver search
  useEffect(() => {
    setPlace(searchResult);
  }, [searchResult]);

  // Submit bug
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
    console.log(submit);
    // 1. Validate fields are filled in
    // 2. Check if image (if not skip step)
    if (submit === "image" && imageUrl !== null) {
      // 3. Upload the photo to Storage
      const addPhoto = () => {
        console.log(imageUrl);
        setFile(input.typeImage); // This should trigger upload
        console.log("url");
        console.log(url);
        console.log("error");
        console.log(error);
        console.log("progress");
        console.log(progress);
        setSubmit("text");
      };
      addPhoto();
    }
    if (submit === "text") {
      console.log("Submitting Text");

      const newBug = {
        id: uuidv4(),
        // timeStamp: new Date(),
        img: url,
        description: input.typeText,
        name: place.name,
        compId: place.id,
      };
      console.log("New Bug");
      console.log(newBug);
    }
  };

  // xxxxxxxxxxxxxxxxxx************** RETURN xxxxxxxxxxxxxxxxxx************** //

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
        typeWrite={<InputTypeWrite input={input} setInput={setInput} />}
        typeImage={<InputTypeImage input={input} setInput={setInput} />}
        // typeUrl={<InputTypeUrl input={input} setInput={setInput} />}
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
