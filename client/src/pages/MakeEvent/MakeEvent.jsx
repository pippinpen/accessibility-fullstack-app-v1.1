import React from 'react';
import EventForm from '../../components/EventForm/EventForm';
import Header from '../../components/Header/Header';

function Dashboard() {
  return (
    <>
    <div>
      <Header/>
      <p>Make Event Page</p>
      <EventForm/>
    </div>
    </>
  );
}

export default Dashboard;
