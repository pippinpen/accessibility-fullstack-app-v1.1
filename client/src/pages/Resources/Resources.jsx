import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';

function Resources() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <h1>Resources</h1>
      <p>Want to learn more about accessibility? Here are some amazing resources to get you started.</p>
      
    </>
  );
}

export default Resources;
