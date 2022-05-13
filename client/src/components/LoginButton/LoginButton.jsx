import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
      className="loginButton"
      onClick={() => loginWithRedirect({
        appState: {
          returnTo: '/dashboard'
        }
      })}>Sign up for free / Log in</button>
    )
  );
};

export default LoginButton;
