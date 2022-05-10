import React from 'react';
import OrganiserButton from '../../components/OrganiserButton/OrganiserButton';
import AttendeeButton from '../../components/AttendeeButton/AttendeeButton';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import landingImg from '../../assets/landingpage.png';
import '../Home/Home.css';

function Home() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <h1 className="landingHeader">Make your event accessible with our free online form builder</h1>
      <img src={landingImg} alt="An individual in a wheelchair with another individual walking towards them with an outstretched hand on a street, in an abstract style" className="landingImg"/>
      <div className="homeButtons">
      <OrganiserButton/>
      <AttendeeButton/>
      </div>
      <h2>Commit to accessibility</h2>
      <h2>Online or offline, put accessibility at the heart of organising not as an optional add-on</h2>
    </>
  );
}

export default Home;
