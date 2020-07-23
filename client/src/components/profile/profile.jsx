import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function Profile() {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    setfirst_name(decoded.first_name);
    setlast_name(decoded.last_name);
    setEmail(decoded.email);
  }, []);

  return (
    <div className="container">
      <div className="">
        <div className="">
          <h1 className="">PROFILE</h1>
        </div>
        <table className="">
          <tbody>
            <tr>
              <td>Fist Name</td>
              <td>{first_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
