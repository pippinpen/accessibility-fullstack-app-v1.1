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
      <main>
      <h1 className="pageHeader">About Accessibility App</h1>
      <div className="pageContainer">
      <h2>Mission Statement</h2>
      <p>Put accessibility at the heart of organising, instead of an optional add-on.</p>
      <p>This app puts the onus on organisers to ask attendees for their access requirements. Flipping the script from positioning accessibility as asking for a 'favour' or an optional add-on, this app generates forms for organisers to collate and allocate resources that they need to fulfill attendees access needs.</p>
      <h2>How To Use This Accessibility App</h2>
      <p>A free online form builder to make online and in-person events more accessible.</p>
      <p>If you are an organiser for an event: create an account or login to the app. You will be taken to your dashboard where you can click the 'Make An Event' button which will ask you a series of questions about what kind of event you are hosting. Your event has now been made! Share the code with any attendees of your event. You can make multiple events for different occasions. When attendees fill out the form for your event you can view the attendee responses by clicking on the 'View Event' button on your dashboard. Here you will see how many attendees have responded, what your event's accessibility requirements are from attendee's responses and all the accessibility requirements that are offered to your attendees based on what kind of event you are organising.</p>
      <p>If you are an attendee for an event: good news, you don't need to make an account or login at all. On the home page click the 'I am attending an accessible event' button and enter in your event code given to you by the event organiser. Answer a series of questions about accessibility requirements, click 'Submit' at the end and hey presto, you're all done!</p>
      <h2>Creator</h2>
      <p>This app was designed and developed by Pippin Burkett. Pippin cares about co-creation, institutional pedagogy and using tech as a force for good. See more of Pip's work at <a href="https://pippin.codes/">pippin.codes</a> or talk to Pip by emailing hello (at) pippin.codes</p>
      <h3>Illustrations</h3>
      <cite>Many thanks to <a href="https://icons8.com/illustrations/author/VKgWUPlqQ7Ea">Alex Manokhi</a> for the beautiful Disabled Care illustrations.</cite>
      </div>
      </main>
    </>
  );
}

export default About;
