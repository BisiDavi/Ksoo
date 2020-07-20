import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';


import { registerUserWithEmail } from '../../store/actions/registerActions';
import { registerSchema } from './validation';
import { Logo } from '../../import/.';
import {
  CssBaseline, FormControlLabel,
  Checkbox, Paper, Box, Grid, makeStyles, Typography
} from '@material-ui/core'
import { Formik, Form, Field } from "formik";
import { Button, CircularProgress } from "@material-ui/core";
import { TextField, Switch } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
  submit: {
    margin: 'auto',
    display: 'flex',
  },
  textCenter: {
    textAlign: 'center',
    margin: '10px 0px'
  }
}));


interface Values {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}


const SignupForm = ({ auth, register: { isLoading, error }, history, registerUserWithEmail }) => {
  const classes = useStyles();

  if (auth.isAuthenticated) return <Redirect to="/dashboard" />;

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

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              username: "",
              email: "",
              password: "",
              confirmpassword: ""
            }}
            validate={values => {
              const errors: Partial<Values> = {};
              if (!values.firstname) {
                errors.firstname = "Required";
              } else if (!values.lastname) {
                errors.lastname = "Required"
              } else if (!values.username) {
                errors.username = "Required"
              } else if (!values.email) {
                errors.email = "Required";
              }
              else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              } else if (!values.password) {
                errors.password = "Required"
              } else if (!values.confirmpassword) {
                errors.confirmpassword = "Required"
              } else if (values.password !== values.confirmpassword) {
                errors.confirmpassword = "Password does not match"
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              registerUserWithEmail(values, history);
              console.log(values)
              setSubmitting(false);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form className={classes.form} >
                <Grid container className={classes.flname} justify="space-between">
                  <Grid item>
                    <Field
                      component={TextField}
                      variant="outlined"
                      fullWidth
                      name="firstname"
                      type="text"
                      size="small"
                      label="Firstname"
                      className={classes.tfield}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      component={TextField}
                      variant="outlined"
                      fullWidth
                      size="small"
                      name="lastname"
                      type="text"
                      className={classes.tfield}
                      label="Lastname"
                    />
                  </Grid>
                </Grid>
                <Field
                  component={TextField}
                  variant="outlined"
                  fullWidth
                  name="username"
                  size="small"
                  type="text"
                  className={classes.tfield}
                  label="Username"
                />
                <Field
                  component={TextField}
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="email"
                  type="email"
                  label="Email"
                  className={classes.tfield}
                />
                <Field
                  component={TextField}
                  variant="outlined"
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  size="small"
                  className={classes.tfield}
                />
                <Field
                  component={TextField}
                  variant="outlined"
                  fullWidth
                  name="confirmpassword"
                  size="small"
                  className={classes.tfield}
                  type="password"
                  label="Confirm Password"
                />
                <Box margin={1}>
                  <FormControlLabel
                    control={
                      <Field component={Switch} type="checkbox" name="rememberMe" />
                    }
                    label="Remember Me"
                  />
                </Box>
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={submitForm}
                    disabled={isSubmitting || isLoading}
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                  {isSubmitting && <CircularProgress />}
                </div>
                <div className={classes.textCenter} >
                  <Link to="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </div>
                <div className={classes.textCenter}>
                  <Typography>Term of use, Privacy policy</Typography>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid >
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  register: state.register,
});

export default compose(withRouter, connect(mapStateToProps, { registerUserWithEmail }))(SignupForm)