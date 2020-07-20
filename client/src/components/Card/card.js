import React from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  root: {
    height: '120px',
    width: '280px'
  },
  cardcontent: {
    padding: '20px'
  }
})


const Card = (props) => {
  const classes = useStyle()

  return (
    <Link to={props.link}>
      <Paper className={classes.root} elevation={2}>
        <Grid className={classes.cardcontent} container direction="row">
          <Grid item md={8} lg={8}>
            <Typography variant="h5">{props.adminRole}</Typography>
          </Grid>
          <Grid item md={4} lg={4}>
            <i className={props.adminRoleImage}></i>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  )
}

export default Card;
