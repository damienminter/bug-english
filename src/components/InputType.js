import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import LinkIcon from "@material-ui/icons/Link";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CreateIcon from "@material-ui/icons/Create";

import InputTypeWrite from "./InputTypeWrite";
import InputTypeImage from "./InputTypeImage";
import InputTypeUrl from "./InputTypeUrl";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InputTab() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("input");
  console.log(input);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab icon={<CreateIcon />} aria-label="photo" {...a11yProps(0)} />
          <Tab
            icon={<PhotoCameraIcon />}
            aria-label="photo"
            {...a11yProps(1)}
          />
          <Tab icon={<LinkIcon />} aria-label="link" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <InputTypeWrite input={input} setInput={setInput} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InputTypeImage input={input} setInput={setInput} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InputTypeUrl input={input} setInput={setInput} />
      </TabPanel>
    </div>
  );
}
