import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const OrganiserButton = () => {
  
  const { loginWithRedirect } = useAuth0();

  const useStyles = makeStyles((theme) => ({
    
    organiserButton: {
      width: "50%",
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
      edge="start"
      className={classes.organiserButton}
      // color="inherit"
      aria-label="log in"
      onClick={() => loginWithRedirect()}
      variant="contained"
      size="large"
      >I am organising an accessible event
    </Button>
  );
};

export default OrganiserButton;
