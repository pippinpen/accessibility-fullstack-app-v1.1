import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import EventOptionsDisplay from '../../components/EventOptionsDisplay/EventOptionsDisplay';
import { useParams } from "react-router-dom";
import { EventsContext } from './../../contexts/events.context';

function ViewEvent() {
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
      <h1>Your Event's Accessibility Options</h1>
      <EventOptionsDisplay event={event}/>
    </>
  );
}

export default ViewEvent;