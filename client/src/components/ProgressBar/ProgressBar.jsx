import React from 'react'
import './ProgressBar.css';

function ProgressBar({ step, totalSteps}) {
  return (
    <div className="progressContainer">
    <progress  value={step} max={totalSteps}>{step}/{totalSteps}</progress>
    </div>
  )
}

export default ProgressBar