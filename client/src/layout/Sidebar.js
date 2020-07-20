import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import { Link } from 'react-router-dom';

const style = {
  color: 'white',
}
const dashboardStyle = {
  color: 'white',
  background: 'lightsalmon',
  margin: '10px 0px'
}

const buttonStyle = {
  color: 'white',
  background: 'lightgray',
  margin: '10px 0px'
}

export const ListItems = (
  <div>
    <Link to="/dashboard">
      <ListItem style={dashboardStyle} button>
        <ListItemIcon style={style}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <ListItem style={buttonStyle} button>
      <ListItemIcon style={style}>
        <RoomOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Tracking" />
    </ListItem>
    <ListItem style={buttonStyle} button>
      <ListItemIcon style={style}>
        <ReceiptOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div >
);

