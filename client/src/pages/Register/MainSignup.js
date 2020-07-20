import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { registerUserWithEmail } from '../../store/actions/registerActions';
import { registerSchema } from './validation';
import { Logo } from '../../import/.';
import {
  CssBaseline, FormControlLabel, FormGroup, Checkbox,
  Paper, Box, Grid, makeStyles, Typography, Button, FormControl, InputLabel, Select
} from '@material-ui/core'
import { useFormik } from "formik";
import { CircularProgress } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  formControl: {
    width: '40vh',
    marginTop: '10px'
  },
  logo: {
    width: '350px',
    marginBottom: '10px',
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    height: '150px'
  },
  info: {
    color: 'gray'
  },
  title: {
    fontWeight: 'bold'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(1, 7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flname: {
    marginTop: '10px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  tfield: {
    marginTop: '15px'
  },
  nfield: {
    marginTop: '15px',
    width: '32vh'
  },
  submit: {
    margin: 'auto',
    display: 'flex',
  },
  textCenter: {
    textAlign: 'center',
    margin: '10px 0px'
  }
}));


const MainSignup = ({ auth, register: { isLoading, error }, history, registerUserWithEmail }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    rememberMe: true,
  });

  const [role, setRole] = React.useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerUserWithEmail(values, history);
    },
  });

  if (auth.isAuthenticated) return <Redirect to="/dashboard" />;



  // if (role == 'ADMIN') {
  //   return <Redirect to="/dashboard" />;
  // } else if (role == 'OPERATIONS') {
  //   return <Redirect to="/operations" />;
  // } else if (role == 'MARINE') {
  //   return <Redirect to="/marine" />;
  // } else if (role == 'TRANSPORT') {
  //   return <Redirect to="/marine" />;
  // } else if (role == '') {
  //   return <Redirect to="/" />;
  // } else {
  //   return <Redirect to="/" />;    
  // }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Grid>
            <img className={classes.logo} src={Logo} alt="logo" />
          </Grid>
          <Typography className={classes.title} component="h1" variant="h5">
            KINGSOO GROUP ERP
          </Typography>
          <Typography className={classes.info} component="h6" variant="h6">
            Please complete to create your account
          </Typography>
          <form onSubmit={formik.handleSubmit} noValidate>
            <Grid container className={classes.flname} justify="space-between">
              <Grid item>
                <input
                  placeholder="Firstname"
                  name="name"
                  type="text"
                  className={classes.nfield}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="error">{formik.errors.name}</p>
                ) : null}
              </Grid>
              <Grid item>
                <input
                  placeholder="Lastname"
                  name="lastname"
                  className={classes.nfield}
                  type="text"
                />
                {// {formik.touched.username && formik.errors.username ? (
                  //   <p className="error">{formik.errors.username}</p>
                  // ) : null}
                }
              </Grid>
            </Grid>
            <input
              placeholder="Username"
              name="username"
              className={classes.tfield}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="error">{formik.errors.username}</p>
            ) : null}
            <input
              placeholder="Email address"
              name="email"
              className={classes.tfield}
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
            <input
              placeholder="Password"
              name="password"
              className={classes.tfield}
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
            <input
              placeholder="Confirm Password"
              name="confirmpassword"
              className={classes.tfield}
              type="password"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.confirmpassword}
            />
            { // {{formik.touched.password && formik.errors.password ? (
              //   <p className="error">{formik.errors.password}</p>
              // ) : null}
            }
            {error && <p className="error">{error}</p>}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Select your Role</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={role}
                onChange={handleRoleChange}
                label="Select your Role"
              >
                <MenuItem value="admin">ADMIN</MenuItem>
                <MenuItem value="operations">OPERATIONS</MenuItem>
                <MenuItem value="transport">TRANSPORT</MenuItem>
                <MenuItem value="marine">MARINE</MenuItem>
              </Select>
            </FormControl>
            <Box margin={1}>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={state.rememberMe}
                    onChange={handleChange} name="Remember me" />}
                  label="Remember me"
                />
              </FormGroup>
            </Box>
            <div>
              <Button
                className={classes.submit}
                varianat="contained"
                color="secondary"
                type="submit" disabled={isLoading || !formik.isValid}>
                Sign up
                </Button>
              {isLoading && <CircularProgress />}
            </div>
            <div className={classes.textCenter} >
              <Link to="/login" variant="body2">
                Already have an account? Sign in
                  </Link>
            </div>
            <div className={classes.textCenter}>
              <Typography>Term of use, Privacy policy</Typography>
            </div>
          </form>
        </div>
      </Grid>
    </Grid >
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  register: state.register,
});

export default compose(withRouter, connect(mapStateToProps, { registerUserWithEmail }))(MainSignup)