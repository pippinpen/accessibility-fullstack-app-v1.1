import React from 'react';
import OrganiserButton from '../../components/OrganiserButton/OrganiserButton';
import AttendeeButton from '../../components/AttendeeButton/AttendeeButton';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import '../Home/Home.css';

function Home() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <h1>Home</h1>
      <div className="homeButtons">
      <OrganiserButton/>
      <AttendeeButton/>
      </div>
    </>
  );
}

export default Home;
