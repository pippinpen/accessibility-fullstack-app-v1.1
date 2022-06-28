import React, { useEffect, useContext } from "react";
import { EventsContext } from "../../contexts/events.context";
import { IconButton } from "@material-ui/core";
import { DeleteForever, Edit } from "@material-ui/icons"
import { Link } from "react-router-dom";
import dateFormat from "./../../utils/dateFormat"; 
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import './EventsDisplay.css';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   formRow: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     display: "flex",
//     justifyContent: "center",
//   },
//   eventList: {
//     listStyle: "none",
//     padding: 20,
//     paddingBlockEnd: 20,
//     textAlign: "center",
//   },
// }));

function EventsDisplay() {
  // const classes = useStyles();
  const history = useHistory();
  const routeChange = (_id) =>{ 
    let path = `/view-event/${_id}`; 
    history.push(path);
  }

  const { events, loaded, fetchEvents, loading, error, deleteEvent } =
    useContext(EventsContext);

  useEffect(() => {
    
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
    <h2 className="eventDisplayTitle">Your Events</h2>
    <ul className="eventList"
    >
      {events.map(({ _id, formConfig: { title, date } }) => (
      <li key={_id} className="eventItems">
      <h3>{title}</h3>
      <p>{dateFormat(date)}</p>
      <p onClick={() => navigator.clipboard.writeText(_id)}>Copy code for attendees: <span tabIndex="0" className="copyLink">{_id}</span></p>
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
        <Button secondaryButton="true" text="View Event" onClick={() => {routeChange(_id)}}/>
      </div>
      </li>
      ))}
    </ul>
  </>
  )};

export default EventsDisplay;