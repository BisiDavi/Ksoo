import React from 'react';
import {makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  }
});

const Overview = (props) => {
  const classes = useStyle()
  return (
    <>
      <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
      {props.children}
    </>
  )
}

export default Overview;
