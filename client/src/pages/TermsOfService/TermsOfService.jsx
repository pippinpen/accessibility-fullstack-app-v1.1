import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import TermsOfServiceText from '../../components/TermsOfServiceText/TermsOfServiceText';

function TermsOfService() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <main>
      <TermsOfServiceText/>
      </main>
    </>
  );
}

export default TermsOfService;
