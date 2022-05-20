import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';

function AccessibilityStatement() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <main>
      <h1 className="pageHeader">Accessibility Commitment Statement</h1>
      <div className="pageContainer">
        <p>
          Please note this app is currently in development, this accessibility
          statement will be fully fleshed out in production.
        </p>
        <p>
          This is an accessibility statement for the Accessibility App mobile
          application. This mobile application was created and is maintained by
          Pippin Burkett.
        </p>
        <h2>Accessibility for all</h2>
        <p>
          As an app about accessibility, making sure this mobile application is
          accessibile as possible is at the very heart of our mission statement.
          This app is committed to following WCAG and ARIA specifications. We
          will strive to listen, learn from our mistakes and make our technology
          as inclusive as possible. Technology can be inclusive, empathetic and
          a force for good in the world, and one of the ways to make this happen
          is to commit to accessibility. We believe in trying to create an
          environment that fosters what Mia Mingus calls{' '}
          <a href="https://leavingevidence.wordpress.com/2011/05/05/access-intimacy-the-missing-link/">
            Access Intimacy
          </a>
        </p>
        <h2>You should be able to do the following</h2>
        <p>
          Our goal is to provide universal access to this application, we want
          as many people as possible to be able to engage with this application.
          For example that means you should be able to:
        </p>
        <ul>
          <li>Change colours, contrast levels and fonts</li>
          <li>Zoom in up to 300% without the text spilling off the screen</li>
          <li>Navigate most of the website using just a keyboard</li>
          <li>
            Navigate most of the website using speech recognition software
          </li>
          <li>
            Listen to most of the website using a screen reader (including the
            most recent versions of JAWS, NVDA and VoiceOver)
          </li>
        </ul>
        <p>
          We have made the website text as simple as possible to understand.
        </p>
        <h2>What we're doing to improve accessibility</h2>
        <p>
          We know some parts of this website are not fully accessible, we are
          working to change this:
        </p>
        <ul>
          <li>
            The text will not reflow in a single column when you change the size
            of the browser window
          </li>
          <li>You cannot modify the line height or spacing of text</li>
          <li>
            some of our online forms are difficult to navigate using just a
            keyboard
          </li>
          <li>
            you cannot skip to the main content when using a screen reader
          </li>
        </ul>
        <h2>How to feedback and request content in accessible formats</h2>
        <p>
          If you have any feedback as to how this app can be made more
          accessible or if you need information on this website in a different
          format, like accessible PDF, large print, easy read, audio recording
          or braille, please contact:
        </p>
        <ul>
          <li>Person: Pippin Burkett, Founder & Developer</li>
          <li>Email: hello (at) pippin.codes</li>
        </ul>
        <p>We will get back to you as soon as possible.</p>
        <h2>How we tested the accessibility of this website</h2>
        <p>
          This website has been tested with the following accessibility
          standards
        </p>
        <ul>
          <li>WCAG 2.1</li>
          <li>IBM Equal Access</li>
          <li>Wave</li>
          <li>W3C Validation tools</li>
        </ul>
        <h2>Preparation of this accessibility statement</h2>
        <p>This statement was prepared on 3rd May 2022.</p>
      </div>
      </main>
    </>
  );
}

export default AccessibilityStatement;
