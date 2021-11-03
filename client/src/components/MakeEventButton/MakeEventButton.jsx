import React from 'react';
import { useHistory } from "react-router-dom";

const MakeEventButton = () => {
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/make-event`; 
    history.push(path);
  }
  return <button onClick={routeChange}>Make Event</button>;
};

export default MakeEventButton;
