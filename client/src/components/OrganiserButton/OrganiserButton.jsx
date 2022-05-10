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
