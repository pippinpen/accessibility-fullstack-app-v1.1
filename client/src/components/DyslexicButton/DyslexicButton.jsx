import React, { useState } from 'react'
import './DyslexicButton.css';

function DyslexicButton() {
  let [ dyslexicFontOn, setDyslexicFontOn ] = useState(false);
  let options;
  dyslexicFontOn ? options = "dyslexicButton dyslexicFontOn" : options = "dyslexicButton"
  // console.log(dyslexicFontOn);
  return (
    <button className={options} onClick={() => {setDyslexicFontOn(!dyslexicFontOn)}}>Dyslexic Font</button>
  )
}

export default DyslexicButton