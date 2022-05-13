import React, { useState, useEffect } from 'react';
import ContrastButton from '../ContrastButton/ContrastButton';
import DyslexicButton from '../DyslexicButton/DyslexicButton';

function HeaderOptions() {
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
      {width < 715 ? (
        <ContrastButton />
      ) : (
        <>
          <ContrastButton />
          <DyslexicButton />
        </>
      )}
    </>
  );
}

export default HeaderOptions;
