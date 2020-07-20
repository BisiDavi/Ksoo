import React from 'react';
import {
  CssBaseline, Typography, FormControlLabel,
  Box, Paper, Grid, makeStyles
} from '@material-ui/core'

import { Link, withRouter, Redirect } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { Button, CircularProgress } from "@material-ui/core";
import { TextField, Switch } from "formik-material-ui";


import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { loginUserWithEmail } from '../../store/actions/authActions';
import { loginSchema } from './validation';
import { Logo } from '../../import/.';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  inputfield: {
    width: '70vh',
  },
  loginfield: {
    marginTop: '20px',
  },
  logo: {
    width: '350px',
    marginBottom: '10px',
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    height: '150px'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontWeight: 'bold'
  },
  paper: {
    margin: theme.spacing(1, 7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  info: {
    color: 'gray'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '10vw'
  },
  textCenter: {
    textAlign: 'center'
  },
  forgetPwd: {
    marginTop: '10px'
  }
}));

interface Values {
  email: string;
  password: string;
}

const LoginPage = ({ auth, history, loginUserWithEmail }) => {
  const classes = useStyles();

  if (auth.isAuthenticated) return <Redirect to="/" />;

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
            Welcome back! Please login to your account
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validate={values => {
              const errors: Partial<Values> = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              } else if (!values.password) {
                errors.password = 'Required'
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              loginUserWithEmail(values, history);
              setSubmitting(false);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <div className={classes.loginfield}>
                  <div className={classes.inputfield}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      fullWidth
                      name="email"
                      type="email"
                      label="Email"
                      size="small"
                    />
                  </div>
                  <br />
                  <div className={classes.inputfield}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      size="small"
                    />
                  </div>
                </div>
                {auth.error && <p className="error">{auth.error}</p>}
                <Grid container justify="space-around">
                  <Grid item>
                    <Box margin={1}>
                      <FormControlLabel
                        control={
                          <Field component={Switch} type="checkbox" name="rememberMe" />
                        }
                        label="Remember Me"
                      />
                    </Box>
                  </Grid>
                  <Grid item className={classes.forgetPwd}>
                    <Link to="/forget-password">
                      <Typography>Forgot Password</Typography>
                    </Link>
                  </Grid>
                </Grid>
                <Grid container justify="space-around" alignItems="center">
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      onClick={submitForm}
                      disabled={auth.isLoading || isSubmitting}
                      className={classes.submit}
                    >
                      Login
                    </Button>
                    {isSubmitting && <CircularProgress />}
                  </Grid>
                  <Grid item>
                    <Link to="/register">
                      <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>

          <div className={classes.textCenter}>
            <Typography>Term of use, Privacy policy</Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(withRouter, connect(mapStateToProps, { loginUserWithEmail }))(LoginPage);
