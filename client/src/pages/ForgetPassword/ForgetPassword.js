import React from 'react';
import {
  Avatar, Button, CssBaseline, TextField,
  Paper, Grid, Typography, makeStyles
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Logo } from '../../import/.';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  title: {
    fontWeight: 'bold'
  },  
  logo: {
    width: '350px',
    marginBottom: '20px',
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
  paper: {
    margin: theme.spacing(2, 7),
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
    margin: 'auto',
    display: 'flex',
    width: '14vw',
    marginTop: '40px'
  },
  textCenter: {
    textAlign: 'center',
    marginTop: '20%',
    alignItems: 'flex-end'
  }
}));

export default function ForgetPasswordForm() {
  const classes = useStyles();

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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              type="email"
              autoComplete="Email"
              autoFocus
              size="small"
            />
            <div>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Send Request
                </Button>
            </div>
            <Grid container justify="center" alignItems="flex-end"
              className={classes.textCenter}>
              <Grid item>
                <Typography>Term of use, Privacy policy</Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid >
    </Grid >
  );
}