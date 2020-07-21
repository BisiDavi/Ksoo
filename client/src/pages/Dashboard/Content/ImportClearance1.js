import React, { useState } from 'react';
import { Layout, InputGroup, MultipleSelect } from '../../../import';
import {
  Grid, Button, TextField, Typography, Paper, FormControlLabel, Input, InputLabel, MenuItem,
  FormControl, Select, Chip, makeStyles, useTheme, Radio, RadioGroup
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
  eClient: {
    marginRight: '180px',
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const seaForm = (
  <Grid className="seaForm">
    <div style={mode} className="mode">
      <Typography style={scac} variant="h6">SCAC</Typography>
      <InputGroup id="scac" type="text" label="Enter SCAC" />
    </div>

    <div style={mode} className="bill">
      <Typography style={bl} variant="h6">B/L</Typography>
      <InputGroup id="b/l" type="number" label="Enter BIll of Laden" />
    </div>
  </Grid>
)

const airForm = (
  <Grid className="airForm">
    <div style={mode} className="mode">
      <Typography style={air} variant="h6">Airline</Typography>
      <InputGroup type="text" style={inputLength} label="Enter Airline" />
    </div>

    <div style={mode} className="bill">
      <Typography style={bl} variant="h6">W/B</Typography>
      <InputGroup type="number" style={inputLength} label="Enter BIll of Laden" />
    </div>
  </Grid>
)


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [];

const ImportClearance1 = () => {

  const classes = useStyle();

  const [value, setValue] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const [client, setClient] = useState([]);
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const handleCompanyName = (event) => {
    setCompanyName(event.target.value)
  }

  names.push(companyName)

  const handleCompanyCode = (event) => {
    setCompanyCode(event.target.value)
    console.log(companyCode)
  }


  const handleClientChange = () => {
    setClient(companyName);
    console.log(client)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value)
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
                <Grid item lg={6}>
                  <Typography className={classes.eClient} variant="h6">Client</Typography>
                </Grid>
                <Grid item lg={6}>
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
                      <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={client}
                        onChange={handleClientChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} className={classes.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name} style={getStyles(name, client, theme)}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography className={classes.addNewClient} variant="h6">Add New Client</Typography>
                </Grid>
                <Grid item>
                  <div>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                      +
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title">Add A New Client</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Add a company as a client and its company code
                      </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          value={companyName}
                          onChange={handleCompanyName}
                          label="Company's name"
                          type="text"
                          fullWidth
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          value={companyCode}
                          onChange={handleCompanyCode}
                          label="Company's code"
                          type="text"
                          fullWidth
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                      </Button>
                        <Button onClick={handleClose} color="primary">
                          Add
                      </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
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
