import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
  // Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const AttendeeButton = () => {
  
  // const { loginWithRedirect } = useAuth0();

  const useStyles = makeStyles((theme) => ({
    
    attendeeButton: {
    width: "300px",
    textTransform: "none",
    color: "#000",
    backgroundColor: "hsl(133, 100%, 77%)",
    "&:hover": {
        backgroundColor: "#ffff",
        },
    borderRadius: "25px",
    paddingInline: "20px",
    },
    typography: {
      button: {
      textTransform: "none",
      },
    },
  })
  );

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/find-event`; 
    history.push(path);
  }

const classes = useStyles();

  return (
    <Button
      edge="start"
      className={classes.attendeeButton}
      // color="inherit"
      aria-label="fill out an event form"
      onClick={routeChange}
      variant="contained"
      size="large"
      >I am attending an accessible event
    </Button>
  );
};

export default AttendeeButton;
