import React, { useContext, useEffect } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import Header from '../../components/Header/Header';
import { useParams } from "react-router-dom";
import { EventsContext } from './../../contexts/events.context';

function EditEvent() {
  let { id } = useParams();
  const { events, loaded, fetchEvents } = useContext(EventsContext);

useEffect(() => {
  if(!loaded){
    fetchEvents();
  }
}, [loaded, fetchEvents, events]);

const eventToBeUpdated = events.find((event) => event._id === id);
const formConfig = eventToBeUpdated.formConfig;
  return (
    <>
      <Header/>
      <main className='pageContainer'>
      <p>Edit Event Page</p>
      <EventForm initialValues={formConfig}/>
      </main>
    </>
  );
}

export default EditEvent;
