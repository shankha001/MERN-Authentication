import React from 'react';

import { Link, withRouter } from 'react-router-dom';

function Navbar({ history }) {
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');

    history.push('/');
  };

  const loginRegLink = (
    <ul className="">
      <li className="">
        <Link to="/login" className="">
          Login
        </Link>
      </li>
      <li className="">
        <Link to="/register" className="">
          Register
        </Link>
      </li>
    </ul>
  );

  const userLink = (
    <ul className="">
      <li className="">
        <Link to="/profile" className="">
          User
        </Link>
      </li>
      <li className="">
        <Link onClick={logOut} className="">
          Logout
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="">
      <div className="" id="navbarsExample10">
        <ul className="">
          <li className="">
            <Link to="/" className="">
              Home
            </Link>
          </li>
        </ul>
        {localStorage.usertoken ? userLink : loginRegLink}
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
