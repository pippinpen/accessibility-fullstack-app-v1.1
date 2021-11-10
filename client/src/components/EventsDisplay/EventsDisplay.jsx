import React, { useEffect, useContext } from "react";
import { EventsContext } from "../../contexts/events.context";
import { makeStyles } from "@material-ui/core/styles";

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
  const { events, loaded, fetchEvents, loading, error } =
    useContext(EventsContext);

  useEffect(() => {
    console.log("in useEffect", events, loaded, loading);
    
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
      <p>{events}</p>
      {/* {events.map(({ _id, items }) => (
        <li key={_id}>
          <h2>Event ID: {_id}</h2>
          <ul style={{ listStyle: "none" }}>
            {items.map(({ title, _id }) => (
              <li key={_id}>
                {title}
              </li>
            ))}
          </ul>
        </li>
      ))} */}

    </ul>
    </>
  );
}

export default EventsDisplay;