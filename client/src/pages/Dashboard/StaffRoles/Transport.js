import React from 'react'
import { Card, Layout } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  transport: {
    marginTop: '50px',

  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  }
});

const Transport = () => {
  const classes = useStyle();

  return (
    <Layout>
      <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
      <Grid justify="space-around" className={classes.transport} container>
        <Grid item>
          <Card link="/transport" adminRole="Transport" adminRoleImage="fas fa-truck fa-3x" />
        </Grid>
        <Grid item>
          <Card adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign fa-3x" />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Transport;
