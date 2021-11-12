import React from 'react';
import Profile from '../../components/Profile/Profile';
import MakeEventButton from '../../components/MakeEventButton/MakeEventButton';
import EventsDisplay from '../../components/EventsDisplay/EventsDisplay';
import Header from '../../components/Header/Header';

function Dashboard() {
  return (
    <>
    <div>
      <Header/>
      <Profile />
      <MakeEventButton/>
      <h2>Your Events</h2>
      <EventsDisplay/>
    </div>
    </>
  );
}

export default Dashboard;
