import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';



export default function LinkButton(props) {
  return (
    <div>
      <Link to={props.link}>
        <Button variant={props.variant} color={props.color}>
          {props.content}
        </Button>
      </Link>
    </div>
  );
}
