import React from 'react'

const MaterialsOptions = ( {inPerson} ) => {
  return (
    <div>
      <h2>Materials</h2>
      <p>Your event will have presenting materials. That could include an outline of the running order, talks from speakers, slides from presentations or a map of the venue. Here are the accessibility options to consider for materials:</p>
      <ul>
      <li>Make the materials available in advance of your event</li>
      <li>Dsylexic font version of materials</li> 
      <li>Large font and high contrast version of materials</li>
      <li>Digital version of materials</li></ul>
      {inPerson &&
      <>
      <p>Because your event is also in person:</p>
      <ul>
      <li>Paper copy of materials</li>
      <li>Braille copy of materials</li>
      <li><a href="https://www.teachingvisuallyimpaired.com/labeling-system.html">Tactile labelling</a> of materials</li></ul>
      </>}
    </div>
  )
}

export default MaterialsOptions