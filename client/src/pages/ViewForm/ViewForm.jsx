import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ResponseOptions from '../../components/ResponseOptions/ResponseOptions';
import { useParams } from "react-router-dom";
import { EventsContext } from './../../contexts/events.context';

function ViewForm() {
  let { id } = useParams();
  const { attendeeEvent, attendeeEventLoaded, fetchAttendeeEvent } = useContext(EventsContext);

useEffect(() => {
  if(!attendeeEventLoaded){
    fetchAttendeeEvent(id);
    return <div>Loading...</div>;
  }
}, [attendeeEventLoaded, fetchAttendeeEvent, attendeeEvent, id]);

  return (
    <>
      <Header />
      <h1>Event Response</h1>
      {attendeeEvent && <ResponseOptions event={attendeeEvent}/>}
      
    </>
  );
}

export default ViewForm;