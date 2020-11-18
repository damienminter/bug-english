import React, { useState, useEffect } from "react";
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
import NaverSearchItem from "../naver/NaverSearchItem";
import ProgressBar from "../firebase/ProgressBar";
import useStorage from "../firebase/useStorage";

import InputType from "./InputType";

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

// TO DO
// 1 Option to upload a photo or add description
// - Set state for choice API
// - Set state for thubnail pic
// - Set state for description
// 2 Search for company information
// 3 Select Company - set local state to company id / name

// ON SUBMIT
// 4 Upload photo = set state URL
// - Set state for progress bar (errors percentage)
// - Set state for choice API
// 5 Upload new bug to Firestore - Set global state to newbug
// 6 Reset local compoent value

export default function InputBug() {
  // Material UI
  const classes = useStyles();

  // Component state
  const [submit, setSubmit] = useState(null); // api choice - photo/text
  const [preview, setPreview] = useState(null); // photo thubnail
  const [imageUrl, setImageUrl] = useState(null); // address of image
  const [bugText, setBugText] = useState(""); // description
  // const [error, setError] = useState(null);
  const [file, setFile] = useState(null); // File to upload to storage
  const [place, setPlace] = useState({});
  const [uploadUrl, setUploadUrl] = useState({});

  const { progress, url, error } = useStorage(file);

  // Central State
  // const dispatchBug = useDispatch();
  const searchResult = useSelector((state) => state.searchResult);

  // Validation
  const types = ["image/png", "image/jpeg"];

  // Add Photo to UI
  const handleChangePhoto = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      // setImageUrl(selected);
      console.log(imageUrl);
      setPreview(URL.createObjectURL(selected));

      setSubmit("photo");
      setBugText("");
      // setError("");
    } else {
      setPreview(null);
      // setError("Please select an image file (png or jpg)");
    }
  };

  // Add Text to UI
  const handleOnChange = (e) => {
    setBugText({
      ...bugText,
      [e.target.id]: e.target.value,
    });
    setSubmit("text");
  };

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
    // 1. Validate fields are filled in
    // 2. Check if image (if not skip step)
    if (submit === "photo" && imageUrl !== null) {
      // 3. Upload the photo to Storage
      const addPhoto = () => {
        console.log(imageUrl);
        setFile(preview); // This should trigger upload
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
        description: bugText,
        name: place.name,
        compId: place.id,
      };
      console.log("New Bug");
      console.log(newBug);
    }
    // 1. Post BUG to FireStore
    // 3. Add URL to bug object
    // 4.
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
      <InputType />
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
            {preview && (
              <img
                src={preview}
                alt={preview.name}
                className="main-image"
              ></img>
            )}
            {preview && <div>{preview.name}</div>}
            {!preview && (
              <TextField
                id="bugDescription"
                label="Description"
                variant="outlined"
                required
                multiline
                rows={8}
                value={bugText}
                onChange={handleOnChange}
                className={classes.margin}
              />
            )}
          </div>
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
