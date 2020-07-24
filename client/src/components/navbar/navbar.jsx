import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import './navbar.styles.scss';

import { Link, withRouter } from 'react-router-dom';

function Navbar({ history }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');

    history.push('/');
  };

  const loginRegLink = (
    <React.Fragment>
      <Link to="/login" className="nav-link">
        <Button color="inherit">Login</Button>
      </Link>
      <Link to="/register" className="nav-link">
        <Button color="inherit">Register</Button>
      </Link>
    </React.Fragment>
  );

  const userLink = (
    <React.Fragment>
      <Link to="/profile" className="nav-link">
        <Button color="inherit">User</Button>
      </Link>
      <Link to="" onClick={logOut} className="nav-link">
        <Button color="inherit">Logout</Button>
      </Link>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <AcUnitIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              React Authentication
            </Typography>

            <Link to="/" className="nav-link">
              <Button color="inherit">Home</Button>
            </Link>
            {localStorage.usertoken ? userLink : loginRegLink}
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Navbar);
