import React from 'react';
import clsx from 'clsx';
import {
  Drawer, makeStyles, CssBaseline, AppBar,
  Toolbar, List, Typography, InputBase, fade,
  IconButton, Container, Grid, Avatar, Button
} from '@material-ui/core';
import { Logo } from '../import/'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search'
import { ListItems } from './Sidebar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOutUser } from '../store/actions/authActions';

import './AdminLayout.css'


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  logout: {
    color: 'white',
    marginTop: '-35px',
    float: 'right',
    fontWeight: 'bolder',
    marginLeft: '100px',
  },
  root: {
    display: 'flex',
  },
  appbarHeader: {
    marginTop: '-20px',
    height: '20px'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  user: {
    margin: '5px 20px',
    fontWeight: 'bold',
    fontSize: 'large'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#1A2980',
    background: '-webkit-linear-gradient(to top, #26D0CE, #1A2980)',
    background: 'linear-gradient(to top, #26D0CE, #1A2980)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '80vh !important',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: '#1A2980',
    background: '-webkit-linear-gradient(to top, #26D0CE, #1A2980)',
    background: 'linear-gradient(to top, #26D0CE, #1A2980)',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  logo: {
    width: '200px',
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    height: '200px'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  username: {
    color: 'white',
    textAlign: 'center',
    margin: '15px 0px 0px 0px',
    fontWeight: 'bold',
  }
}));


const Dashboard = ({ children, auth, logOutUser, history }) => {

  const onLogOut = (event) => {
    event.preventDefault();
    logOutUser(history);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [showLogo, setShowLogo] = React.useState('logo')
  const handleDrawerOpen = () => {
    setOpen(true);
    setShowLogo('logo')
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setShowLogo('logodisabled')
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Grid container className={classes.appbarHeader} justify="space-between">
            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search Clients, consignee or help"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Avatar />
                </Grid>
                <Grid item>
                  <Typography className={classes.user} component="h6">
                    {auth.me.name}
                  </Typography>
                  <Button className={classes.logout} onClick={onLogOut}><PowerSettingsNewIcon /></Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar >
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={showLogo}>
          <div>
            <img className={classes.logo} src={Logo} alt="kingsoo logo" />
          </div>
          <div className={classes.username}>
            <Typography variant="h5">{auth.me.name}</Typography>
          </div>
        </div>
        <List className={classes.listButton}>{ListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {children}
          </Grid>
        </Container>
      </main>
    </div >
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(withRouter, connect(mapStateToProps, { logOutUser }))(Dashboard)