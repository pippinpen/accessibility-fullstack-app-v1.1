import React from 'react';
import './EventResponsesDisplay.css';

function EventResponseDisplay({ responses }) {
  // const classes = useStyles();

  if (!responses) {
    return <p>There are no responses for your event yet.</p>;
  }

  let numberOfResponses = responses.length;

  const result = {};
  responses.forEach((response) => {
    Object.keys(response).forEach((item) => {
      if (response[item] === true) {
        result[item] = result[item] ? result[item] + 1 : 1;
      }
    });
  });

  const splitString = (string) => {
    return string.replace( /([A-Z])/g, " $1" ).replace(/^./, function(str){ return str.toUpperCase(); })
  }

  return (
    <div>
      <p>You have {numberOfResponses} responses.</p>
      <h3>Your attendees have specifically asked for the following accessibility options to be provided at your event:</h3>
      <ul className="responsesContainer">
        {Object.entries(result).map((answer, index) => {
          return (
            <li key={index}>
              <p>
                {splitString(answer[0])}: {answer[1]}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default EventResponseDisplay;
