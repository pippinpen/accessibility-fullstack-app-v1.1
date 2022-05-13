import React from 'react'
import './LargeLogo.css';
import i from './../../assets/Desktop_white_cropped_200.png'

function LargeLogo() {
  return (
    <h1 className="logoTitle">Access<img className="lrgLogo"src={i} alt="A checked box that looks like the letter 'i'" />bility</h1>
  )
}

export default LargeLogo