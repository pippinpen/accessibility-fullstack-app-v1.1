import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';

import '../Auth0Wrapper/Auth0Wrapper.css';

function Wrapper({ children }) {
  const {
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) {
    return (
    <>
      <div className="progress-alert">
        <CircularProgress />
      </div>
    </>
    );
  }
  if (error) {
    return (
    <>
      <div className="progress-alert">
        <Alert severity="error">{error.message}</Alert>
      </div>
    </>
    )
  }
  return (
  <>
  {children}
  </>
  );
}
export default Wrapper;