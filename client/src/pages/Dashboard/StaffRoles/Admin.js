import React from 'react'
import { Card, Layout } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  admin: {
    marginTop: '50px',
  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  }
});


const Admin = () => {
  const classes = useStyle();

  return (
    <Layout>
      <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
      <Grid justify="space-around" className={classes.admin} container>
        <Grid item>
          <Card link="/admin" adminRole="Admin" adminRoleImage="fas fa-users-cog fa-3x" />
        </Grid>
        <Grid item>
          <Card link="" adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign fa-3x" />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Admin;
