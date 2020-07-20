import React, { useState } from 'react';
import {
  Layout, InputGroup, FileButton,
  LinkButton, Datepicker,
} from '../../../import';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {
  Grid, makeStyles, FormControlLabel, FormControl, Radio, Select, Button,
  RadioGroup, Typography, Paper, InputLabel, MenuItem, FormHelperText
} from '@material-ui/core';

const useStyle = makeStyles({
  upload: {
    marginTop: '10px',
    marginLeft: '-17px',
    '& div': {
      display: 'inline-flex',
      justifyContent: "space-evenly",
      '& h6': {
        fontWeight: 'bold',
        fontSize: '15px',
        marginRight: '0px !important',
      },
      '& button': {
        width: '100px',
        background: 'green',
        height: '40px',
        color: 'white'
      }
    }
  },
  cargoleft: {
    display: 'inline-flex',
    marginRight: '30px',
    '& h6': {
      margin: '10px 40px 0px 0px',
      fontWeight: 'bold',
      fontSize: '16px',
      fontWeight: 'bold'
    }
  },
  cargoright: {
    display: 'inline-flex',
    '& h6': {
      margin: '10px 10px 0px 0px',
      fontWeight: 'bold',
      width: '180px',
      fontSize: '16px'
    }
  },
  buttonGroup: {
    margin: '40px 0px',
    float: 'right',
    width: 'fit-content',
    '& a': {
      margin: '0px 30px',
      '& button': {
        width:'120px'
      }
    }

  },
  inputform: {
    width: '25vw'
  },
  root: {
    height: '100vh'
  },
  left: {
    marginRight: '120px',
    width: '300px',
    '& h6': {
      fontWeight: 'bold',
      marginTop: '15px',
      fontSize: '16px',
    }
  },
  paper: {
    height: '100%',
    background: 'lavender',
    width: '70vw',
    margin: '10px 0px 0px 40px',
    padding: '35px'
  },
  date: {
    marginTop: '-20px'
  }
});


const ImportClearance2 = () => {
  const classes = useStyle()

  const [cargoType, setCargoType] = useState('');
  const [cargo, setCargo] = useState('');
  const [cargoNumber, setCargoNumber] = useState('');

  const handleCargoType = (event) => {
    setCargoType(event.target.value);
    console.log(cargoType);
  };

  const handleCargo = (event) => {
    setCargo(event.target.value);
    console.log(cargo);
  };

  const handleCargoNumber = (event) => {
    setCargoNumber(event.target.value);
  };

  const numberOfCargo = (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-helper-label">Number of Cargo</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={cargoNumber}
        onChange={handleCargoNumber}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <FormHelperText>Select the number of Cargo</FormHelperText>
    </FormControl>
  )

  const cargoRB = (
    <FormControl component="fieldset">
      <RadioGroup aria-label="cargo" name="cargo" value={cargo} onChange={handleCargo}>
        <FormControlLabel value="20Ft" control={<Radio />} label="20Ft" />
        <FormControlLabel value="40Ft" control={<Radio />} label="40Ft" />
        <FormControlLabel value="45Ft" control={<Radio />} label="45Ft" />
        <FormControlLabel value="Others" control={<Radio />} label="Others" />
      </RadioGroup>
    </FormControl>
  )

  const cargoGroup = (
    <Grid container>
      <Grid item>
        {cargoRB}
      </Grid>
      <Grid item>
        {numberOfCargo}
      </Grid>
    </Grid>
  )

  const Bulk = (
    <>
      <InputGroup className={classes.inputform} label="Enter Container number" />
      <InputGroup className={classes.inputform} label="Enter Container number" />
    </>
  );



  const typeCargo = (cargoType === 'Container') ? cargoGroup : Bulk

  return (
    <Layout>
      <Grid container>
        <Typography className={classes.title} variant="h4">Import Custom Clearance</Typography>
      </Grid>
      <Grid container>
        <Paper className={classes.paper}>
          <Grid container direction="row" alignItems="flex-start" className={classes.radioButtonGroup}>
            <Grid item className={classes.left}>
              <Typography variant="h6">Pre-Alert Date</Typography>
            </Grid>
            <Grid item className={classes.date}>
              <Datepicker />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.inputGroup}>
            <Grid item className={classes.left}>
              <Typography variant="h6">Shipper</Typography>
            </Grid>
            <Grid item>
              <InputGroup className={classes.inputform} label="Enter name of Shipper" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className={classes.left}>
              <Typography variant="h6">Consignee</Typography>
            </Grid>
            <Grid item>
              <InputGroup className={classes.inputform} label="Enter name of Consignee" />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.inputGroup}>
            <Grid item className={classes.left}>
              <Typography variant="h6">Form M.Number</Typography>
            </Grid>
            <Grid item>
              <InputGroup className={classes.inputform} label="Enter Form M.Number" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className={classes.left}>
              <Typography variant="h6">Cargo Description</Typography>
            </Grid>
            <Grid item>
              <InputGroup className={classes.inputform} label="Enter Cargo Description" />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.client}>
            <Grid item className={classes.left}>
              <Typography variant="h6">Estimated Time of Arrival</Typography>
            </Grid>
            <Grid item>
              <Datepicker />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className={classes.left}>
              <Typography variant="h6">Cargo Destination</Typography>
            </Grid>
            <Grid item>
              <InputGroup className={classes.inputform} label="Cargo Destination" />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.radioButtonGroup}>
            <Grid item className={classes.left}>
              <Typography variant="h6">Cargo Type</Typography>
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <RadioGroup aria-label="cargo type" row name="cargo type" value={cargoType} onChange={handleCargoType}>
                  <FormControlLabel value="Container" control={<Radio />} labelPlacement="start" label="Container" />
                  <FormControlLabel value="Bulk" control={<Radio />} labelPlacement="start" label="Bulk" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item>
              <Typography variant="h6">Cargo:</Typography>
            </Grid>
            <Grid item>
              {typeCargo}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className={classes.cargoleft}>
              <Typography className={classes.others} variant="h6">If Others</Typography>
              <InputGroup label="State Cargo ID" />
            </Grid>
            <Grid item className={classes.cargoright}>
              <Typography className={classes.left} variant="h6">Container Number</Typography>
              <InputGroup label="Enter Container Number" />
            </Grid>
          </Grid>
          <Grid container className={classes.upload}>
            <Grid item lg={4}>
              <Typography variant="h6">Upload Bill of Laden</Typography>
              <FileButton />
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h6">Upload Commercial Invoice</Typography>
              <FileButton />
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h6">Upload Contract</Typography>
              <FileButton />
            </Grid>
          </Grid>

          <Grid container className={classes.buttonGroup}>
            <Grid item>
              <Link to="/import-custom-clearance-2">
                <Button variant="contained" color="secondary">Previous</Button>
              </Link>
              <Link to="/import-custom-clearance-3">
                <Button variant="contained" color="secondary">Next</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Layout>
  )
}

export default ImportClearance2;
