import React from 'react';
import Header from '../../components/Header/Header';
import FindEventForm from '../../components/FindEventForm/FindEventForm';

function FindEvent() {
  return (
    <>
      <Header />
      <main className='pageContainer'>
      <h1>Find the event you're attending</h1>
      <FindEventForm/>
      </main>
    </>
  );
}

export default FindEvent;
