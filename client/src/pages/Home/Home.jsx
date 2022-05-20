import React from 'react';
// import OrganiserButton from '../../components/OrganiserButton/OrganiserButton';
// import AttendeeButton from '../../components/AttendeeButton/AttendeeButton';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import landingImg from '../../assets/landingpage.png';
import '../Home/Home.css';
import Button from '../../components/Button/Button';
import { useHistory } from "react-router-dom";

function Home() {
  const { isLoading, loginWithRedirect } = useAuth0();
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/find-event`; 
    history.push(path);
  }

if (isLoading) return <div>Loading...</div>;

  return (
    <>
    <main>
      <Header />
      <h1 className="landingHeader">Make your event accessible with our free online form builder</h1>
      <div className="imgContainer">
      <img src={landingImg} alt="An individual in a wheelchair with another individual walking towards them with an outstretched hand on a street, in an abstract style. Illustration called 'Disabled Care', designed by Alex Manokhi" className="landingImg"/>
      <div className="homeButtons">
      <Button text="I am organising an accessible event" onClick={() => loginWithRedirect()}/>
      <Button text="I am attending an accessible event" onClick={routeChange}/>
      </div>
      </div>
      <h2 className="tagLine">Commit to accessibility</h2>
      <h2 className="tagLine">Online or in person, put accessibility at the heart of organising not as an optional add-on</h2>
      </main>
    </>
  );
}

export default Home;
