import React, { useState } from 'react';
import { login } from '../userFunction';
import { withRouter } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState('');

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    login(user).then((res) => {
      if (res) {
        history.push('/profile');
      } else {
        console.log('User Not Found or Wrong Password');
        setWrongPassword('User Not Found or Wrong Password');
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="">
          <form noValidate onSubmit={onSubmit}>
            <h1 className=""> Sign In</h1>
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
              className=" btn-block"
              variant="outlined"
              color="primary"
              type="submit"
            >
              Login
            </Button>

            {wrongPassword}
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
