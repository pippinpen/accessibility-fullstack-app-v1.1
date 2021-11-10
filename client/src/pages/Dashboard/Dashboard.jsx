import React from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Profile from '../../components/Profile/Profile';
import MakeEventButton from '../../components/MakeEventButton/MakeEventButton';
import EventsDisplay from '../../components/EventsDisplay/EventsDisplay';
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div>
      <p>Users dashboard</p>
      <Link to="/">Home</Link>
      <LogoutButton />
      <Profile />
      <MakeEventButton/>
      <h2>Your Events</h2>
      <EventsDisplay/>
    </div>
    </>
  );
}

export default Dashboard;
