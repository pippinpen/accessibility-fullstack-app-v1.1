import React from 'react'
import './SmallLogo.css'
import logo from './../../assets/Mobile_white.png';

function SmallLogo() {
  return (
    <>
    <img className="smallLogo" src={logo} alt="A small person holding a checkbox with a tick" />
    </>
  )
}

export default SmallLogo