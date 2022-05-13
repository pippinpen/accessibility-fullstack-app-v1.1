import React from 'react'
import './Button.css';

function Button({ onClick, text }) {
  return (
    <button className="button" onClick={onClick}>{text}</button>
  )
}

export default Button