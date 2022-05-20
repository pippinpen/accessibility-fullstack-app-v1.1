import React from 'react'
import './Button.css';

function Button({ onClick, text, secondaryButton }) {
  let buttonType = null;
  secondaryButton ? buttonType = "button secondaryButton" : buttonType = "button"
  return (
    <button className={buttonType} onClick={onClick}>{text}</button>
  )
}

export default Button