import React from 'react';
import {
  CssBaseline, Typography, FormControlLabel,
  Box, Paper, Grid, makeStyles, FormGroup, Checkbox
} from '@material-ui/core'
import { useFormik } from 'formik';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Button, CircularProgress } from "@material-ui/core";


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


const MainLogin = ({ auth, history, loginUserWithEmail }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    rememberMe: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginUserWithEmail(values, history);
    },
  });

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
            Welcome back! Please login to your account
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <div className={classes.loginfield}>
              <div className={classes.inputfield}>
                <input
                  placeholder="Email address"
                  name="email"
                  className="text"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="error">{formik.errors.email}</p>
                ) : null}
              </div>
              <br />
              <div className={classes.inputfield}>
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              {auth.error && <p className="error">{auth.error}</p>}
            </div>
            <Grid container justify="space-around">
              <Grid item>
                <Box margin={1}>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox checked={state.rememberMe}
                        onChange={handleChange} name="Remember me" />}
                      label="Remember me"
                    />
                  </FormGroup>
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
                <button
                  className="btn submit"
                  disabled={auth.isLoading || !formik.isValid}
                  type="submit"
                >
                  Login
                 </button>
                {auth.isLoading && <CircularProgress />}
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

            <div className={classes.textCenter}>
              <Typography>Term of use, Privacy policy</Typography>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(withRouter, connect(mapStateToProps, { loginUserWithEmail }))(MainLogin);
