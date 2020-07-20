import React from 'react';
import { Card, Layout } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  cardRow: {
    padding: '20px'
  },
  adminBodyText: {
    margin: '0px 0px 40px 130px',
    height: '0px'
  }
});

const HomeOverview = () => {
  const classes = useStyle()

  return (
    <Layout>
      <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
      <Grid justify="space-around" className={classes.cardRow} container>
        <Grid item>
          <Card link="/operations" adminRole="Operations" adminRoleImage="fas fa-users-cog fa-3x" />
        </Grid>
        <Grid item>
          <Card link="/admin" adminRole="Admin" adminRoleImage="fas fa-user-plus fa-3x" />
        </Grid>
      </Grid>
      <Grid justify="space-around" className={classes.cardRow} container>
        <Grid item>
          <Card link="/transport" adminRole="Transport" adminRoleImage="fas fa-truck fa-3x" />
        </Grid>
        <Grid item>
          <Card link="/marine" adminRole="Marine" adminRoleImage="fas fa-ship fa-3x" />
        </Grid>
      </Grid>
      <Grid justify="space-around" className={classes.cardRow} container>
        <Grid item>
          <Card link="/admin-home" adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign fa-3x" />
        </Grid>
        <Grid item>
          <Card link="/mobile" adminRole="Mobile App" adminRoleImage="fas fa-mobile fa-3x" />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomeOverview;
