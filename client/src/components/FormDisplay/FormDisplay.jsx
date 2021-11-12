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
  configList: {
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
    return <p>There are no config settings for this form</p>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  
  return(
    <>
    <ul className={classes.eventList}>  
      {events.map((events) => (
      <>
        {/* <li key={events.formconfig.id}> */}
          <h3>{events.formConfig.title}</h3>
          <p>Event ID: {events.formConfig._id}</p>
          <p>{events.formConfig.date}</p>
        {/* </li> */}
      </>
      ))}
    </ul>
    {/* {events.map((event) => {
      return (
        <ul>
          {event[events].map(({ _id, title, date}) => {
            return (
              <li key={_id}>{title}</li>
            )
          })}
        </ul>
      )
    })} */}
    {/* <ul>  
      {events.map(({ formConfig }) => (
        <li key={formConfig._id}>
          <h2>Event ID: {formConfig._id}</h2>
          <ul>
            {formConfig[events].map(({ title, _id }) => (
              <li key={_id}>
                {title}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul> */}
    {/* <ul className={classes.eventList}>  
      {events.map(({ _id, title }) => (
        <li key={_id}>
          <h2>Event ID: {_id}</h2>
          <ul style={{ listStyle: "none" }}>
            {title.map(({ title, _id }) => (
              <li key={_id}>
                {title}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul> */}
    </>
  );
}

export default EventsDisplay;