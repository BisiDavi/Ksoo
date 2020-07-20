import React from 'react';
import {
  Layout, InputGroup, FileButton,
  LinkButton, Datepicker
} from '../../../import';
import { Grid, makeStyles, Typography, Paper, } from '@material-ui/core';

const useStyle = makeStyles({
  ButtonGroup3: {
    margin: '40px 0px',
    float: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
    '& a': {
      margin: '0px 30px',
      '& button': {
        width: '120px'
      }
    }
  },
  root: {
    height: '100vh'
  },
  value: {
    display: 'inline-flex',
    width: '150px',
    '& h6': {
      marginTop: '10px',
      marginLeft: '20px'
    }
  },
  paper: {
    width: '70vw',
    height: '100%',
    margin: '10px 0px 0px 40px',
    background: 'lavender',
    padding: '35px'
  },
  upload: {
    marginTop: '20px 9px',
    '& button': {
      background: 'green',
      fontWeight: 'bold',
      color: 'white',
      height: '30px',
      margin: '24px 5px',
      width: '100px'
    }
  },
  title: {
    // width: '300px', 
    marginLeft: '0px',
    fontSize: '17px',
    marginTop: '30px',
  },
  heading: {
    fontWeight: 'bold'
  },
  dateform: {
    magrinTop: '-30px',
    marginLeft: '-15px'
  },
  longinput: {
    '& form': {
      width: '30vh'
    },
  },
  bank: {
    display: 'inline-flex',
    '& h6': {
      marginTop: '40px'
    }
  }
});

const ImportClearance3 = () => {
  const classes = useStyle()
  return (
    <Layout>
      <Grid container>
        <Typography className={classes.adminBodyText} variant="h4">Import Custom Clearance</Typography>
      </Grid>
      <Grid container>
        <Paper className={classes.paper}>
          <Grid container>

            <Typography className={classes.heading} variant="h6">
              Pre-Arrival Assessment Report (PAAR)
              </Typography>
            <Grid container direction="row" className={classes.radioButtonGroup}>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">
                  Date Received
                </Typography>
              </Grid>
              <Grid item className={classes.dateform} lg={4}>
                <Datepicker />
              </Grid>
            </Grid>
            <Grid container className={classes.inputGroup}>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">
                  PAAR Numbers
              </Typography>
              </Grid>
              <Grid item className={classes.longinput} lg={4}>
                <InputGroup label="Enter name of Shipper" />
              </Grid>
              <Grid item className={classes.value} lg={4}>
                <Typography className={classes.title} variant="h6">
                  Value
                </Typography>
                <InputGroup label="Enter value" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">
                  Upload PAAR Document
                </Typography>
              </Grid>
              <Grid item lg={4} className={classes.upload}>
                <FileButton />
              </Grid>
            </Grid>
            <Grid container>
              <Typography className={classes.heading} variant="h6">Assesment Notice</Typography>
            </Grid>
            <Grid container className={classes.inputGroup}>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Date Received</Typography>
              </Grid>
              <Grid item className={classes.dateform} lg={4}>
                <Datepicker />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Custom Number</Typography>
              </Grid>
              <Grid item className={classes.longinput} lg={4}>
                <InputGroup label="Enter Custom Number" />
              </Grid>
              <Grid item className={classes.value} lg={4}>
                <Typography className={classes.title} variant="h6">Value</Typography>
                <InputGroup label="Enter value" />
              </Grid>
            </Grid>
            <Grid container className={classes.client}>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Assessment Number</Typography>
              </Grid>
              <Grid item lg={5}>
                <InputGroup label="Enter assessment number" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Upload Assessment Notice</Typography>
              </Grid>
              <Grid item lg={4} className={classes.upload}>
                <FileButton />
              </Grid>
            </Grid>
            <Grid container className={classes.radioButtonGroup}>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Duty Payment Date</Typography>
              </Grid>
              <Grid item className={classes.dateform} lg={4}>
                <Datepicker />
              </Grid>
              <Grid item className={classes.bank} lg={4}>
                <Typography className={classes.title} variant="h6">Bank</Typography>
                <Datepicker />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Upload Duty Receipt</Typography>
              </Grid>
              <Grid item lg={4} className={classes.upload}>
                <FileButton />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Shipping Company Payment Date</Typography>
              </Grid>
              <Grid item className={classes.dateform} lg={4}>
                <Datepicker />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={4}>
                <Typography className={classes.title} variant="h6">Terminal Charges Payment Date</Typography>
              </Grid>
              <Grid item className={classes.dateform} lg={4}>
                <Datepicker />
              </Grid>
            </Grid>

            <Grid container className={classes.ButtonGroup3}>
              <Grid item>
                <LinkButton variant="contained" color="secondary" link="/import-custom-clearance-2" content="Previous" />
              </Grid>
              <Grid item>
                <LinkButton variant="contained" color="secondary" link="/import-custom-clearance-3" content="Next" />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Layout>
  )
}

export default ImportClearance3;
