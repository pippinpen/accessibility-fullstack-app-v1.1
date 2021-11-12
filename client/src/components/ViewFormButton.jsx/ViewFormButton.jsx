import React from 'react';
import { useHistory } from "react-router-dom";

const ViewFormButton = ( {eventID} ) => {
  const history = useHistory();
  const routeChange = (eventID) =>{ 
    let path = `/find-event/:${eventID}`; 
    history.push(path);
  }
  return <button onClick={() => {routeChange(eventID)}}>View Form</button>;
};

export default ViewFormButton;
