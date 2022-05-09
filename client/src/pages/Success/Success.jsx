import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { EventsContext } from '../../contexts/events.context';
import dateFormat from '../../utils/dateFormat';

function Success() {
  const { attendeeEvent } = useContext(EventsContext);

  console.log(attendeeEvent)

  const { title, date } = attendeeEvent.formConfig;
  const formattedDate = dateFormat(date);

  return (
    <>
      <Header />
      <h1>Thank you!</h1>
      <p>Accessibility requirements sent for {title} on the {formattedDate}</p>
      <p>Thank you for submitting your accessibility requirements to your event organiser.</p>
      <p>Want to learn more about accessibility? Look at our <Link to="/resources">resources</Link> to find out more.</p>
      
    </>
  );
}

export default Success;
