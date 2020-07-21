import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function InputTextField(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id={props.id}
        label={props.label}
        variant="outlined"
        type={props.type}
        required
        color="secondary"
        className={props.className}
        size="small"
      />
    </form>
  );
}
