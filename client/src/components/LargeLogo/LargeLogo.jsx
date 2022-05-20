import React from 'react'
import './LargeLogo.css';
import i from './../../assets/Desktop_white_cropped_200.png'
import { Link } from 'react-router-dom';

function LargeLogo() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
    <h1 className="logoTitle">Access<img className="lrgLogo"src={i} alt="A checked box that looks like the letter 'i'" />bility</h1>
    </Link>
  )
}

export default LargeLogo