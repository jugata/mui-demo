import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Link } from "react-router-dom"
import searchIcon from "./icons/search-bar-icon.png"
import supportIcon from "./icons/get-support-icon.png"
import menuIcon from "./icons/menu-icon.png"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={searchIcon} />
          <img src={menuIcon} />

          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            className="link" to='/home'>HOME </Link>

          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            className="link" to='/cards'>CARDS</Link>

          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            className="link" to='/page1'>Page 1</Link>

          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            className="link" to='/page2'>Page 2</Link>

          <Typography variant="h6" className={classes.title}>
            DEMO!
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <img src={supportIcon} />
            Support
            </Typography>


          <div>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Typography variant="h6" className={classes.title}>
                User
                {!open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}

              </Typography>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>





          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </div>
  );
}
