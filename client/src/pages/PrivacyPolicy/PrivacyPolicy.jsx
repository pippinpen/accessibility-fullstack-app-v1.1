import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import PrivacyPolicyText from '../../components/PrivacyPolicyText/PrivacyPolicyText';

function PrivacyPolicy() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
			<PrivacyPolicyText/>
    </>
  );
}

export default PrivacyPolicy;
