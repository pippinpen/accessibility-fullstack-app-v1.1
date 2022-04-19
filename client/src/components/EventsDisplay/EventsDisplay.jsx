import React, { useEffect, useContext } from "react";
import { EventsContext } from "../../contexts/events.context";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons"
import ViewFormButton from "../ViewFormButton.jsx/ViewFormButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
  },
  eventList: {
    listStyle: "none",
    padding: 0,
  },
}));

function EventsDisplay() {
  const classes = useStyles();

  const { events, loaded, fetchEvents, loading, error, deleteEvent } =
    useContext(EventsContext);

  useEffect(() => {
    // console.log("in useEffect", events, loaded, loading);
    
    if (!loading && !loaded) {
      fetchEvents();
    }
  }, [loaded, fetchEvents, events, loading]);

  if (events.length === 0) {
    return <p>You haven't made an event yet!</p>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // let eventID = null;
  // if(!eventID) {
  //   return <p>eventID undefined</p>  ;
  // }
  
  // console.log(events);

  return(
    <>
    <ul className={classes.eventList}>
      {events.map(({ _id, formConfig: { title, date } }) => (
      <li key={_id}>
      <h3>{title}</h3>
      <p>Event ID: {_id}</p>
      <p>{date}</p>
      <div className="eventButtons">
        <IconButton
        aria-label="update"
        component={Link}
        to={`/edit-event/${_id}`}
        >
          <Edit />
        </IconButton>
        <IconButton
        aria-label="delete"
        onClick={() => deleteEvent(_id)}
        >
          <Delete />
        </IconButton>
        <ViewFormButton/>
      </div>
      </li>
      ))}
    </ul>
  </>
  )};

export default EventsDisplay;