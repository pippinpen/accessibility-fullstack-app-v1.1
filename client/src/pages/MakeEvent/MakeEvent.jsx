import React from 'react';
import EventForm from '../../components/EventForm/EventForm';
import Header from '../../components/Header/Header';

function MakeEvent() {
  return (
    <>
      <Header/>
      <main className='pageContainer'>
      <p>Make Event Page</p>
      <EventForm/>
      </main>
    </>
  );
}

export default MakeEvent;
