import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <h1 className="pageHeader">About Accessibility App</h1>
      <div className="pageContainer">
      <h2>Mission Statement</h2>
      <p>Put accessibility at the heart of organising, instead of an optional add-on.</p>
      <p>This app puts the onus on organisers to ask attendees for their access requirements. Flipping the script from positioning accessibility as asking for a 'favour' or an optional add-on, this app generates forms for organisers to collate and allocate resources that they need to fulfill attendees access needs.</p>
      <h2>Creator</h2>
      <p>This app was designed and developed by Pippin Burkett. Pippin cares about co-creation, institutional pedagogy and using tech as a force for good. See more of Pip's work at <a href="https://pippin.codes/">pippin.codes</a> or talk to Pip by emailing hello (at) pippin.codes</p>
      
      </div>
    </>
  );
}

export default About;
