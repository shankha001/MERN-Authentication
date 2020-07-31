import React, { useState, useEffect } from 'react';
import { register } from '../userFunction';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import './register.styles.scss';

function Register({ history }) {
  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      history.push('/profile');
    }
  }, [history]);

  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExist, setUserExist] = useState('');

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
      // console.log(res);
      if (res === 'Registered!') {
        history.push('/login');
      } else {
        setUserExist('User Already Exists');
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
        width: theme.spacing(40),
        height: theme.spacing(60),
      },
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper elevation={3}>
          <form noValidate onSubmit={onSubmit}>
            <h1 className="">Register</h1>
            <div className="input-field-reg">
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="First Name"
                type="text"
                name="first_name"
                value={first_name}
                onChange={onFnameChange}
              />
            </div>
            <div className="input-field-reg">
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
            <div className="input-field-reg">
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

            <div className="input-field-reg">
              <TextField
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
                Register
              </Button>
            </div>
          </form>
          {userExist}
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default Register;
