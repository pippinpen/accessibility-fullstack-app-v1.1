import React from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Profile from '../../components/Profile/Profile';

function Dashboard() {
  return (
    <>
    <div>
      <p>Users dashboard</p>
      <LogoutButton />
      <Profile />
    </div>
    </>
  );
}

export default Dashboard;
