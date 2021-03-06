import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { UIContext } from "../../contexts/ui.context";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const NavDrawer = () => {
  const classes = useStyles();

  const { isOpen, toggle } = useContext(UIContext);

  const handleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    toggle();
  };

  const { isAuthenticated } = useAuth0();

  let menuItems = [{ text: "Home", to: "/" }];

  if (isAuthenticated){
    menuItems = [
      ...menuItems,
      { text: "Dashboard", to: "/dashboard" },
      { text: "Make Event", to: "/make-event" },
      { text: "About App", to: "/about" },
      { text: "Learning Resources", to: "/resources" },
      { text: "Accessibility Statement", to: "/accessibility-statement" },
      { text: "Privacy Policy", to: "/privacy-policy" },
      { text: "Terms of Service", to: "/terms-of-service" },
    ];
  } else {
    menuItems = [
      ...menuItems,
      { text: "About App", to: "/about" },
      { text: "Learning Resources", to: "/resources" },
      { text: "Accessibility Statement", to: "/accessibility-statement" },
      { text: "Privacy Policy", to: "/privacy-policy" },
      { text: "Terms of Service", to: "/terms-of-service" },
    ];
  }


  return (
    <Drawer anchor="left" open={isOpen} onClose={handleDrawer()}>
      <div
        className={classes.list}
        role="presentation"
        onClick={handleDrawer()}
        onKeyDown={handleDrawer()}
      >
        <List>
          {menuItems.map(({ text, to }) => (
            <ListItem button component={NavLink} to={to} key={text}>
              <ListItemText>{text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavDrawer;
