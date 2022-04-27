import React from 'react';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const ViewFormButton = ( {_id} ) => {

  const useStyles = makeStyles((theme) => ({
    
    viewFormButton: {
      backgroundColor: "hsl(51, 98%, 53%)",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#e7c502",
        },
      },
    typography: {
      button: {
      textTransform: "none",
      },
    },
  })
  );
const classes = useStyles();

  return (
    <Button
    aria-label="view form"
    component={Link}
    to={`/view-event/${_id}`}
    variant="contained"
    className={classes.viewFormButton}
    >
    View event
    </Button>
  );
};

export default ViewFormButton;
