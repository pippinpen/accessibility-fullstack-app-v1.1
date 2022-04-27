import React, { useEffect, useContext } from "react";
import { EventsContext } from "../../contexts/events.context";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { DeleteForever, Edit } from "@material-ui/icons"
import ViewFormButton from "../ViewFormButton.jsx/ViewFormButton";
import { Link } from "react-router-dom";
import dateFormat from "./../../utils/dateFormat"; 

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

  return(
    <>
    <ul className={classes.eventList}>
      {events.map(({ _id, formConfig: { title, date } }) => (
      <li key={_id}>
      <h3>{title}</h3>
      <p>{dateFormat(date)}</p>
      <p>ID for attendees: {_id}</p>
      <div className="eventButtons">
        <IconButton
        aria-label="update"
        component={Link}
        to={`/edit-event/${_id}`}
        >
          <Edit
          fontSize="large"
          />
        </IconButton>
        <IconButton
        aria-label="delete"
        onClick={() => deleteEvent(_id)}
        >
          <DeleteForever
          fontSize="large"
          />
        </IconButton>
        <ViewFormButton _id={_id} />
      </div>
      </li>
      ))}
    </ul>
  </>
  )};

export default EventsDisplay;