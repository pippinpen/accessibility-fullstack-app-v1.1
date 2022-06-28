import React, { useContext } from "react";
import {
  IconButton,
} from "@material-ui/core/";
import { useAuth0 } from "@auth0/auth0-react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import NavDrawer from "./../NavDrawer/NavDrawer";
import { UIContext } from "./../../contexts/ui.context";
import './../Header/Header.css';
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import SiteLogo from "../SiteLogo/SiteLogo";
// import HeaderOptions from "../HeaderOptions/HeaderOptions";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: "#fff",
  },
}));

export default function Header() {
  const classes = useStyles();
  const { toggle } = useContext(UIContext);
  const {
    isAuthenticated,
  } = useAuth0();

  return (
    <div className="headerContainer">
      <NavDrawer />
      <div className="headerDisplay">
        <div className="menuContainer">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open menu"
            onClick={toggle}
          >
            <MenuIcon
            fontSize="large"
            />
          </IconButton>
          {/* <HeaderOptions/> */}
          </div>
          <div className="logoContainer">
            <SiteLogo/>
          </div>
          <div className="buttonContainer">{!isAuthenticated ?
          <LoginButton/>
          :
          <LogoutButton/>
          }
          </div>
      </div>
    </div>
  );
}