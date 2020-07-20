import React from 'react'
import { Card, Layout } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  marine: {
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


const Marine = () => {
  const classes = useStyle();

  return (
    <Layout>
      <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
      <Grid justify="space-around" className={classes.marine} container>
        <Grid item>
          <Card link="/marine" adminRole="Marine" adminRoleImage="fas fa-ship fa-3x" />
        </Grid>
        <Grid item>
          <Card adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign fa-3x" />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Marine;
