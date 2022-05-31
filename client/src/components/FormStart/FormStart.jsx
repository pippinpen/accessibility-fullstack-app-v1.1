import React from 'react';
import Button from '../Button/Button';

function FormStart({ title, date, id, buttonAction }) {
  return (
    <>
      <h2>Title: {title}</h2>
      <h3>Date: {date}</h3>
      <p>ID: {id}</p>
      <p>
        Please answer the following form to tell the event organisers what
        accessibility provisions they need to provide.
      </p>
      <div className="formButtonContainer">
        <Button text="Begin" onClick={buttonAction} />
      </div>
    </>
  );
}

export default FormStart;
