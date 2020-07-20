import React from 'react'
import { Card, Layout } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  adminBodyCard: {
    padding: "0px 0px"
  },
  operations: {
    marginTop: '50px'
  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  }
});


const Operations = () => {
  const classes = useStyle();

  return (
    <Layout>
      <Grid justify="space-between" className={classes.adminBodyCard} container>
        <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
        <Grid justify="space-around" className={classes.operations} container>
          <Grid item>
            <Card link="/operations-overview" adminRole="Operations" adminRoleImage="fas fa-users-cog fa-3x" />
          </Grid>
          <Grid item>
            <Card adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign fa-3x" />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}


export default Operations;
