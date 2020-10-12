import React from "react";

import Grid from "@material-ui/core/Grid";
import ItemBug from "./ItemBug";

export default function ListBug(props) {
  const { bugs } = props;

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {bugs && bugs.map((bug) => <ItemBug key={bug.id} bug={bug} />)}
      </Grid>
    </>
  );
}
