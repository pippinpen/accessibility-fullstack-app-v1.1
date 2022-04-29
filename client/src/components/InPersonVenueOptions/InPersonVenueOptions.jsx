import React from 'react'
import AssistanceOptions from './../AssistanceOptions/AssistanceOptions'

const InPersonVenueOptions = () => {
  return (
    <>
    <h2>Venue</h2>
    <p>Your event will be in person at a venue. Here are the accessibility options to consider for venues:</p>
    <li>Step free access</li>
    <li>Specialist seating</li>
    <li>Wide routes throughout the venue for attendees using wheelchairs, mobility scooters or other mobility aids</li>
    <li>Seating space for mobility aids for attendees using wheelchairs, mobility scooters or other mobility aids as seats</li>
    <li>Quiet area for those who need to take medicine or reduce sensory overload</li>
    <li>Seats near power sources to charge specialist equipment</li>
    <AssistanceOptions inPerson="true"/>
    </>
  )
}

export default InPersonVenueOptions