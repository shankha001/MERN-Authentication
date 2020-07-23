import React, { useState } from 'react';
import { register } from '../userFunction';
import { TextField, Button } from '@material-ui/core';

function Register({ history }) {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFnameChange = (e) => {
    setfirst_name(e.target.value);
  };
  const onLnameChange = (e) => {
    setlast_name(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };

    register(user).then((res) => {
      history.push('/login');
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="">Register</h1>
            <div className="form-group">
              <TextField
                className="form-control"
                id="outlined-basic"
                variant="outlined"
                label="First Name"
                type="text"
                name="first_name"
                value={first_name}
                onChange={onFnameChange}
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                type="text"
                className="form-control"
                name="last_name"
                value={last_name}
                onChange={onLnameChange}
              />
            </div>
            <div className="form-group">
              <TextField
                className="form-control"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={email}
                onChange={onEmailChange}
              />
            </div>

            <div className="form-group">
              <TextField
                className="form-control"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                name="password"
                value={password}
                onChange={onPasswordChange}
              />
            </div>

            <Button
              className=""
              variant="outlined"
              color="primary"
              type="submit"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
