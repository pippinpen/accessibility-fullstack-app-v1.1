import React from "react";
import Header from '../../components/Header/Header';

function NotFound() {
  return (
    <>
      <Header/>
      <main className="pageContainer">
      <h1>Not Found</h1>
      <p>Oops! Sorry, we can't find that page.</p>
      </main>
    </>
  );
}

export default NotFound;
