import React from 'react'
import './SmallLogo.css'
import logo from './../../assets/Mobile_white.png';
import { Link } from 'react-router-dom';

function SmallLogo() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
    <img className="smallLogo" src={logo} alt="A small person holding a checkbox with a tick" />
    </Link>
  )
}

export default SmallLogo