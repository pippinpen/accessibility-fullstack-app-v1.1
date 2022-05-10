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
import i from './../../assets/Desktop_white_cropped_200.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBlockEnd: "10vh",
  },
  toolbar: {
    backgroundColor: "hsl(166, 100%, 23%)",
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
    color: "#000",
    backgroundColor: "hsl(133, 100%, 77%)",
    "&:hover": {
        backgroundColor: "#ffff",
        },
    borderRadius: "25px",
    paddingInline: "20px",
  },
  logoutButton: {
    marginLeft: "-75px",
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
            Access<img src={i} alt="A checked box that looks like the letter 'i'" width={20}/>bility
          </Typography>
          {!isAuthenticated ? (
            <Button
              edge="start"
              className={classes.loginButton}
              color="inherit"
              aria-label="log in"
              onClick={() => loginWithRedirect()}
            >Sign up for free / Log in
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