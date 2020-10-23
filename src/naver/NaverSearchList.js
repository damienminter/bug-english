import React from "react";
import { useSelector } from "react-redux";

// Redux
import { useDispatch } from "react-redux";
import { selectNaverAction } from "../redux/actions";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

export default function NaverSearchList() {
  const searchResults = useSelector((state) => state.searchResults);
  const dispatchPlace = useDispatch();

  const classes = useStyles();

  const handleSelectCompany = (result) => {
    dispatchPlace(selectNaverAction(result));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {searchResults.map((result) => (
            <TableRow
              key={result.id}
              onClick={handleSelectCompany.bind(null, result)}
            >
              <TableCell component="th" scope="row">
                {result.name}
              </TableCell>
              <TableCell align="right">{result.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
