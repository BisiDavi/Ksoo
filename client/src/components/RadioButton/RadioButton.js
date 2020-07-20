import React, { useState } from 'react';
import {
  Grid, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup
} from '@material-ui/core';

export default function RadioButtonsGroup(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const showRBState = (value === props.value1) ? console.log(`${props.value1} selected`) : console.log(`${props.value2} selected`)

  return (
    <Grid container direction="row">
      <FormControl component="fieldset">
        <FormLabel component="legend">{props.legend}</FormLabel>
        <RadioGroup aria-label={props.legend} row name={props.legend} value={value} onChange={handleChange}>
          <FormControlLabel value={props.value1} control={<Radio />} labelPlacement="start" label={props.value1} />
          <FormControlLabel value={props.value2} control={<Radio />} labelPlacement="start" label={props.value2} />
        </RadioGroup>
      </FormControl>
      {showRBState}
    </Grid>
  );
}




