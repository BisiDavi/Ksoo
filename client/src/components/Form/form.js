import React from 'react';
import { gql, useMutation } from '@apollo/client';
import {
  Avatar, TextField, FormControlLabel,
  Checkbox, Paper, Grid, Typography, makeStyles
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { LinkButton } from '../import/.';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  siginlink: {
    margin: '20px 0px'
  },
  btngroup: {
    margin: '30px 0px'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    margin: '30px 0px',
    justifyContent: "center"
  },
}));



const Form = (props) => {
  const classes = useStyles();
  const signinfield = (
    <>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="I agree with terms and conditions"
      />
      <Grid className={classes.submit} container>
        <LinkButton
          type="submit"
          link="/admin-home"
          variant="contained"
          color="primary"
          content="Sign up"
        />
      </Grid>
      <Grid container className={classes.siginlink} justify="center">
        <Link to="/login" variant="body2">
          {"Already have an account? Sign in"}
        </Link>
      </Grid>
      <Grid container justify="center">
        <Typography>Term of use. Privacy policy</Typography>
      </Grid>
    </>
  )

  const loginField = (
    <>
      <Grid container justify="space-around">
        <Grid item>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </Grid>
        <Grid item>
          <Link to="/forget-password">
            <p>Forgot Password</p>
          </Link>
        </Grid>
      </Grid>
      <Grid container className={classes.btngroup} row justify="space-around">
        <Grid item>
          <LinkButton
            type="submit"
            fullWidth
            link="/admin-home"
            variant="contained"
            content="Login"
            color="primary"
            className={classes.submit}
          />
        </Grid>
        <Grid item>
          <LinkButton
            type="submit"
            fullWidth
            variant="outlined"
            link="/"
            content="Sign up"
            color="secondary"
            className={classes.submit}
          />
        </Grid>
      </Grid>

      <Grid justify="center" container>
        <Typography>Term of use. Privacy policy</Typography>
      </Grid>
    </>
  )

  const className = props.className
  const entryfield = (className === "signup") ? signinfield : loginField;

  const myFormInput = props.myFormInput;
  const formData = myFormInput.map((item) => (
    <TextField
      key={item}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={item}
      label={item}
      name={item}
      autoComplete={item}
      size="small"
      autoFocus
    />
  ))

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          {formData}
          {entryfield}
        </form>
      </div>
    </Grid>
  )
}

export default Form;