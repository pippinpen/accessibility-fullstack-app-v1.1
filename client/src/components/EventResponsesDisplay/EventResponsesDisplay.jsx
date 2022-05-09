import React from "react";


function EventResponseDisplay({ responses }) {
  // const classes = useStyles();

  if (!responses) {
    return <p>There are no responses for your event yet.</p>;
  }

let numberOfResponses = responses.length;

  return(
    <div>
      <p>You have {numberOfResponses} responses</p>
    </div>
  );
}

export default EventResponseDisplay;