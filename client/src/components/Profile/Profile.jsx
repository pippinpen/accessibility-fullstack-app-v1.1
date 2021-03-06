import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const {
    user,
    isAuthenticated,
    user: { name, picture, sub, email },
  } = useAuth0();
  const dtStyles = {
    fontWeight: 'bold',
    paddingBottom: '5px',
  };
  const ddStyles = {
    marginLeft: 0,
    marginBottom: '5px',
  };
  return (
    isAuthenticated && (
      <>
        <div>
          <h1 className='pageHeader'>Hello {user.nickname}</h1>
          <img src={picture} alt={name} />
          <dl>
            <dt style={dtStyles}>Email</dt>
            <dd style={ddStyles}>{email}</dd>
            <dt style={dtStyles}>Unique id</dt>
            <dd style={ddStyles}>{sub}</dd>
          </dl>
        </div>
      </>
    )
  );
}

export default Profile;
