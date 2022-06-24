import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import EventOptionsDisplay from '../../components/EventOptionsDisplay/EventOptionsDisplay';
import { useParams } from "react-router-dom";
import { EventsContext } from './../../contexts/events.context';
import EventResponseDisplay from '../../components/EventResponsesDisplay/EventResponsesDisplay';
import dateFormat from '../../utils/dateFormat';

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

  // console.log(responses);

  return (
    <>
      <Header />
      <main className='pageContainer'>
      <h1>{event.formConfig.title}</h1>
      <p>{dateFormat(event.formConfig.date)}</p>
      <p>ID: {event._id}</p>
      <h2>Your Event's Attendee Responses</h2>
      <EventResponseDisplay responses={responses}/>
      <h2>All Potential Accessibility Options for your Event</h2>
      <EventOptionsDisplay event={event}/>
      </main>
    </>
  );
}

export default ViewEvent;