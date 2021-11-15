import React from 'react';
import { useHistory } from "react-router-dom";

const FindEventButton = ( {eventID} ) => {
  const history = useHistory();
  const routeChange = (eventID) =>{ 
    let path = `/view-form/:${eventID}`; 
    history.push(path);
  }
  return <button onClick={() => {routeChange(eventID)}}>Find Event</button>;
};

export default FindEventButton;
