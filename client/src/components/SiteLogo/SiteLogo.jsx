import React, { useState, useEffect } from 'react'
import './SiteLogo.css';
import LargeLogo from '../LargeLogo/LargeLogo';
import SmallLogo from '../SmallLogo/SmallLogo';

function SiteLogo() {
  let initalWidth = window.innerWidth;
  const [width, setWidth] = useState(initalWidth);
  useEffect(() => {
    const findWindowSize = () => {
    setWidth(window.innerWidth);
  }
  window.addEventListener("resize", findWindowSize);
  return () => {
    window.removeEventListener("resize", findWindowSize);
  }
  });

  return (
    <>
    {width > 1000 ? <LargeLogo/> : <SmallLogo/>}
    </>    
  )
}

export default SiteLogo