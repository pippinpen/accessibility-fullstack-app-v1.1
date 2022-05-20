import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import EventOptionsDisplay from '../../components/EventOptionsDisplay/EventOptionsDisplay';
import { useParams } from "react-router-dom";
import { EventsContext } from './../../contexts/events.context';
import EventResponseDisplay from '../../components/EventResponsesDisplay/EventResponsesDisplay';

function ViewEvent() {

  let { id } = useParams();
  const { events, loaded, fetchEvents } = useContext(EventsContext);

useEffect(() => {
  if(!loaded){
    fetchEvents();
  }
}, [loaded, fetchEvents, events]);

  const event = events.find((event) => event._id === id);

  if(!events || !event){
    return <div>Loading...</div>
  }

  const { responses } = event;

  console.log(responses);

  return (
    <>
      <Header />
      <main>
      <h1>Your Event</h1>
      <div className='pageContainer'>
      <h2>Your Event's Responses</h2>
      <EventResponseDisplay responses={responses}/>
      <h2>Your Event's Accessibility Options</h2>
      <EventOptionsDisplay event={event}/>
      </div>
      </main>
    </>
  );
}

export default ViewEvent;