import React, { useState, useEffect } from 'react';
import { login } from '../userFunction';
import { withRouter } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import './login.styles.scss';

function Login({ history }) {
  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      history.push('/profile');
    }
  }, [history]);

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
      if (res === false) {
        setWrongPassword('Invalid Email or Password');
      } else {
        history.push('/profile');
      }
    });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'center',
      justifyContent: 'center',
      height: '90vh',

      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(30),
        height: theme.spacing(40),
      },
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper elevation={3}>
          <form noValidate onSubmit={onSubmit}>
            <h1 className="">Sign In</h1>
            <div className="input-field-login">
              <TextField
                className=""
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={email}
                onChange={onEmailChange}
              />
            </div>

            <div className="input-field-login">
              <TextField
                style={{ color: 'white' }}
                className=""
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
            <div className="btn-container">
              <Button
                className="btn"
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
          {wrongPassword}
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Login);
