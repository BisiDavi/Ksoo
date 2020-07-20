import React, { useState } from 'react';
import { Layout, InputGroup, MultipleSelect } from '../../../import';
import {
  Grid, makeStyles, Button, Typography, Paper, FormControlLabel, FormControl, Radio, RadioGroup
} from '@material-ui/core';
import { Link, withRouter, Redirect } from 'react-router-dom';


const mode = {
  display: 'flex',
}

const inputLength = {
  width: '70vh'
}

const scac = {
  margin: '10px 70px 0px 0px',
  fontWeight: 'bold',
  fontSize: '18px',
}

const bl = {
  margin: '10px 95px 0px 0px',
  fontWeight: 'bold',
  fontSize: '18px',

}

const air = {
  margin: '10px 75px 0px 0px',
  fontWeight: 'bold',
  fontSize: '18px',
}

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  client: {
    marginRight: '80px',
    marginTop: '25px',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  title: {
    padding: '10px 20px'
  },
  freight: {
    marginRight: '60px',
    fontWeight: 'bold',
    marginTop: '10px'
  },
  sea: {
    marginLeft: '-2px',
    marginRight: '30px',
    '& span': {
      marginRight: '95px',
      fontWeight: 'bold',
      fontSize: '18px'
    }
  },
  transfer: {
    '& span': {
      fontWeight: 'bold',
      fontSize: '18px'
    }
  },
  clientitem: {
    marginRight: '130px',
    marginTop: '0px',
  },
  clientContainer: {
    marginTop: '-20px',
  },
  airbutton: {
    '& span': {
      marginRight: '100px',
      fontWeight: 'bold',
      fontSize: '18px'
    }
  },
  direct: {
    marginRight: '100px',
    fontWeight: 'bold',
    fontType: '18px',
    '& span': {
      fontWeight: 'bold',
      fontType: '18px',
    }
  },
  paper: {
    height: '75vh',
    background: 'lavender',
    width: '70vw',
    margin: '10px 0px 0px 40px',
    padding: '35px'
  },
  nextButton: {
    width: '20vh',
    display: 'flex',
    float: 'right',
    marginTop: '90px'
  },
  addNewClient: {
    marginRight: '20px',
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
  }
});

const seaForm = (
  <Grid className="seaForm">
    <div style={mode} className="mode">
      <Typography style={scac} variant="h6">SCAC</Typography>
      <InputGroup label="Enter SCAC" />
    </div>

    <div style={mode} className="bill">
      <Typography style={bl} variant="h6">B/L</Typography>
      <InputGroup label="Enter BIll of Laden" />
    </div>
  </Grid>
)

const airForm = (
  <Grid className="airForm">
    <div style={mode} className="mode">
      <Typography style={air} variant="h6">Airline</Typography>
      <InputGroup style={inputLength} label="Enter Airline" />
    </div>

    <div style={mode} className="bill">
      <Typography style={bl} variant="h6">W/B</Typography>
      <InputGroup style={inputLength} label="Enter BIll of Laden" />
    </div>
  </Grid>
)


const ImportClearance1 = () => {
  const classes = useStyle();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const showRBState = (value === "Sea") ? seaForm : airForm

  return (
    <Layout>
      <Grid container>
        <Typography className={classes.title} variant="h4">Import Custom Clearance</Typography>
      </Grid>
      <Grid container>
        <Paper className={classes.paper}>
          <Grid container direction="row" className={classes.radioButtonGroup}>
            <FormControl component="fieldset">
              <RadioGroup aria-label="Sea/Air" row name="Sea/Air" value={value} onChange={handleChange}>
                <FormControlLabel value="Sea" className={classes.sea} control={<Radio />} labelPlacement="start" label="Sea" />
                <FormControlLabel value="Air" className={classes.airbutton} control={<Radio />} labelPlacement="start" label="Air" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid container>
            {showRBState}
          </Grid>
          <Grid container className={classes.inputGroup}>
            <Grid item className={classes.clientitem}>
              <Grid container className={classes.clientContainer}>
                <Grid item>
                  <Typography className={classes.client} variant="h6">Client</Typography>
                </Grid>
                <Grid item>
                  <MultipleSelect />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography className={classes.addNewClient} variant="h6">Add New Client</Typography>
                </Grid>
                <Grid item>
                  <InputGroup label="Add a new client" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.freight} component="h6">Type of Freight</Typography>
            </Grid>
            <Grid item>
              <Grid container justify="space-around" className={classes.radioButtonGroup}>

                <FormControl component="fieldset">
                  <RadioGroup aria-label="Type of Freight" row name="Type of Freight" value={value} onChange={handleChange}>
                    <FormControlLabel value="Direct" className={classes.direct} control={<Radio />} labelPlacement="start" label="Direct" />
                    <FormControlLabel value="Transfer" className={classes.transfer} control={<Radio />} labelPlacement="start" label="Transfer" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <div>
            <Link to="/import-custom-clearance-2">
              <Button className={classes.nextButton} variant="contained" color="secondary">Next</Button>
            </Link>
          </div>
        </Paper>
      </Grid>
    </Layout >
  )
}

export default ImportClearance1;
