import React from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';

function Home() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <h1>Home</h1>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default Home;
