import React from "react";
import { Link } from "react-router-dom";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import BugReportIcon from "@material-ui/icons/BugReport";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Redux
import { useDispatch } from "react-redux";
import { selectCompanyAction } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CompanyLogo({ compId }) {
  const classes = useStyles();
  const dispatchCompany = useDispatch();

  const handleSelectCompany = (compId) => {
    console.log("COMPANY LOGO - COMP ID");
    console.log(compId);
    dispatchCompany(selectCompanyAction(compId));
  };

  return (
    <Avatar
      aria-label="companylogo"
      className={classes.avatar}
      onClick={handleSelectCompany.bind(null, compId)}
      component={Link}
      to={"/company"}
    >
      <BugReportIcon />
    </Avatar>
  );
}
