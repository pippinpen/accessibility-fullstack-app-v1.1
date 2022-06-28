import React, { useState } from 'react'
import './ContrastButton.css';

function ContrastButton() {
  let [ contrastOn, setContrastOn ] = useState(false);
  let options;
  contrastOn ? options = "contrastButton contrastOn" : options = "contrastButton"
  // console.log(contrastOn);
  return (
    <button className={options} onClick={() => {setContrastOn(!contrastOn)}}>Contrast</button>
  )
}

export default ContrastButton