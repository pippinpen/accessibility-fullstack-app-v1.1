import React from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Profile from '../../components/Profile/Profile';
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div>
      <p>Users dashboard</p>
      <Link to="/">Home</Link>
      <LogoutButton />
      <Profile />
    </div>
    </>
  );
}

export default Dashboard;
