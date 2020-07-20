import React from 'react';
import { Layout } from '../../../import';
import { Grid, makeStyles, Typography, Paper, } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  paper: {
    height: '60vh',
    width: '70vw',
    margin: '10px 0px 0px 40px',
    padding: '35px'
  }
});

const CusotmClearance = () => {
  const classes = useStyle()
  return (
    <Layout>
      <Grid container>
        <Typography className={classes.adminBodyText} variant="h4">Import Custom Clearance</Typography>
      </Grid>
      <Grid container>

      </Grid>
    </Layout >
  )
}

export default CusotmClearance;
