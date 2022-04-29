import React from 'react'

const AssistanceOptions = ( {inPerson} ) => {
  return (
    <>
    <h3>Assistance Provisions</h3>
    <li>Extra places if carers or assistants are coming with the attendee</li>
    <li>BSL Interpreter</li>
    <li>Deadbline Interpreter</li>
    <li>Close captions or live captioning</li>
    <li>Audio description</li>
    <li>Transcription</li>
    {inPerson ?
    <>
    <p>Because your event is also in person:</p>
    <li>Hearing enhancement systems which can include: induction loops, radio systems, infared systems and sound field systems</li>
    <li>Assistance dog provisions: Information on assistant dog behaviour e.g. do not pet and if you see it alone it may be seeking help for a medical emergency, drinkable water in a dog bowl and a place for the dog to relieve itself</li>
    </> : null}
    </>
  )
}

export default AssistanceOptions