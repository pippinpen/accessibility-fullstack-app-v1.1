import React from 'react';
import Header from '../../components/Header/Header';
import FindEventForm from '../../components/FindEventForm/FindEventForm';

function FindEvent() {
  return (
    <>
      <Header />
      <h1>Find the event you're attending</h1>
      <FindEventForm/>
    </>
  );
}

export default FindEvent;
