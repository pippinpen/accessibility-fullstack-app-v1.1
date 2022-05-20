import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';

function Resources() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <main>
      <h1 className="pageHeader">Resources</h1>
      <div className='pageContainer'>
      <p>Want to learn more about accessibility? Here are some amazing resources to get you started.</p>
      </div>
      </main>
    </>
  );
}

export default Resources;
