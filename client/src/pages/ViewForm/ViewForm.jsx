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
  }
}, [attendeeEventLoaded, fetchAttendeeEvent, attendeeEvent, id]);


  return (
    <>
      <Header />
      <main>
      <h1>Event Response</h1>
      <div className='pageContainer'>
      {attendeeEventLoaded ? <ResponseOptions event={attendeeEvent} id={id}/> : <div>Loading...</div>}
      </div>
      </main>
    </>
  );
}

export default ViewForm;