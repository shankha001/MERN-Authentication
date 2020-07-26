import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './profile.styles.scss';

function Profile({ history }) {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      const decoded = jwt_decode(token);
      setfirst_name(decoded.first_name);
      setlast_name(decoded.last_name);
      setEmail(decoded.email);
    } else {
      history.push('/login');
    }
  }, [history]);

  return (
    <div className="profile-container">
      <div className="">
        {email ? (
          <h1 className="">PROFILE</h1>
        ) : (
          <h2>Please Login/Register to view this page</h2>
        )}
      </div>
      <table className="">
        <tbody>
          <tr>
            <td>{first_name ? 'Fist Name:' : null}</td>
            <td>{first_name}</td>
          </tr>
          <tr>
            <td>{last_name ? 'Last Name:' : null}</td>
            <td>{last_name}</td>
          </tr>
          <tr>
            <td>{email ? 'Email:' : null}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
