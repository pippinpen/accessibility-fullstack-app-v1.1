import React from 'react';
import Profile from '../../components/Profile/Profile';
// import MakeEventButton from '../../components/MakeEventButton/MakeEventButton';
import EventsDisplay from '../../components/EventsDisplay/EventsDisplay';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useHistory } from "react-router-dom";
// import './Dashboard.css';

function Dashboard() {
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/make-event`; 
    history.push(path);
  }
  return (
    <>
    <div>
      <Header/>
      <div className='pageContainer'>
      <Profile />
      <Button className="makeEventButton" text="Make an Event" onClick={routeChange}/>
      <EventsDisplay/>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
