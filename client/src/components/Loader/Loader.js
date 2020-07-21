import React from 'react';
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  loader: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.03)',
    justifyContent: 'center'
  },
  spinner: {
    marginTop: '250px'
  }
})

const Loader = (props) => {
  const classes = useStyles();

  return (
    <div className="loader-container loader" {...props}>
      {// <h3 className="loader-content">Loading..</h3>
      }
      <div className={classes.loader} >
        <CircularProgress className={classes.spinner} />
      </div>
    </div>
  );
};

export default Loader;
