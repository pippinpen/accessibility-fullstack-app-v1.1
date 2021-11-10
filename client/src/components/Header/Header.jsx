import React, { useContext } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core/";

import { useAuth0 } from "@auth0/auth0-react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import NavDrawer from "./../NavDrawer/NavDrawer";


import { UIContext } from "./../../contexts/ui.context";
// import './../Header/Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBlockEnd: "10vh",
  },
  toolbar: {
    backgroundColor: "hsl(236, 100%, 19%)",
  },
  menuButton: {
    marginRight: "-50px", // Because it off-centers the title (logically -64px)
  },
  title: {
    flexGrow: 1,
    fontSize: "1rem",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  loginButton: {
    marginLeft: "-75px",
    textTransform: "none",
  },
  logoutButton: {
    marginLeft: "-75px",
    textTransform: "none",
  },
  typography: {
    button: {
    textTransform: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const { toggle } = useContext(UIContext);
  const {
    // user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <div className={classes.root}>
      <NavDrawer />
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open menu"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h1" noWrap>
            AccessAbility
          </Typography>
          {!isAuthenticated ? (
            <Button
              edge="start"
              className={classes.loginButton}
              color="inherit"
              aria-label="log in"
              onClick={() => loginWithRedirect()}
            >Log In
            </Button>
          ) : (
            <Button
              edge="start"
              className={classes.logoutButton}
              color="inherit"
              aria-label="log out"
              onClick={() => logout({ returnTo: window.location.origin })}
            >Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}