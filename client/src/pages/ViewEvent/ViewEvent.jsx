import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import FormDisplay from '../../components/FormDisplay/FormDisplay';
import { useParams } from "react-router-dom";
import { EventsContext } from './../../contexts/events.context';

function ViewForm() {
  let { id } = useParams();
  const { events, loaded, fetchEvents } = useContext(EventsContext);

  const event = events.find((event) => event._id === id);

useEffect(() => {
  if(!loaded){
    fetchEvents();
  }
}, [loaded, fetchEvents, events]);
  return (
    <>
      <Header />
      <h1>View Event</h1>
      <FormDisplay event={event}/>
    </>
  );
}

export default ViewForm;