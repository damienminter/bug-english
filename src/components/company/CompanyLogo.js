import React from "react";
import { Link } from "react-router-dom";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import BugReportIcon from "@material-ui/icons/BugReport";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Redux
import { useDispatch } from "react-redux";
import { selectCompanyAction, filterBugsAction } from "../../redux/actions";
// import useNaverItem from "../../naver/useNaverItem";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CompanyLogo({ compId }) {
  console.log("COMPANY LOGO FIRED");
  console.log(compId);
  const classes = useStyles();
  const dispatchCompany = useDispatch();
  const dispatchFilterBugs = useDispatch();
  // useNaverItem(compId);

  const handleSelectCompany = (compId) => {
    dispatchCompany(selectCompanyAction(compId));
    dispatchFilterBugs(filterBugsAction(compId));
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
