import React from 'react'
import { Card, Layout } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  mobile: {
    marginTop: '50px',
  },
  adminBodyCard: {
    padding: "0px 0px"
  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  }
});


const Mobile = () => {
  const classes = useStyle();
  return (
    <Layout>
      <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
      <Grid justify="space-around" className={classes.mobile} container>
        <Grid item>
          <Card link="/mobile" adminRole="Mobile" adminRoleImage="fas fa-mobile fa-3x" />
        </Grid>
        <Grid item>
          <Card adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign fa-3x" />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Mobile;
