import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "15px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer:{
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  appbar:{
    zIndex: theme.zIndex.modal + 1
  },
 
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);




  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Services", link: "/customsoftware" },
    { name: "İOS/Android App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  // const routes =[{name:"Home", link:"/"},{name:"Services", link:"/services"},{name:"The Revolution", link:"/revolution"},
  // {name:"About Us", link:"/about"},  {name:"Contact Us", link:"/contact"}]

  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/services" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/revolution" && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/about" && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "/contact" && value !== 4) {
    //   setValue(4);
    // }

    switch (window.location.pathname) {
      case "/":
        if (props.value !== 0) {
          props.setValue(0);
        }
        break;
      case "/services":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (props.value !== 2) {
          props.setValue(2);
        }
        break;
      case "/about":
        if (props.value !== 3) {
          props.setValue(3);
        }
        break;
      case "/contact":
        if (props.value !== 4) {
          props.setValue(4);
        }
        break;
        case "/estimate":
        if (props.value !== 5) {
          props.setValue(5);
        }
        break;
      default:
        break;
    }
  }, [props.value, props]);


  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/services"
          label="Services"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        ></Tab>
      </Tabs>
      <Button variant="contained" component={Link} to="estimate" color="secondary" className={classes.button} onClick={() => props.setValue(5)}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        style={{zIndex:1320}}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
          key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        classes={{paper: classes.drawer}}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          <ListItem onClick={()=> {setOpenDrawer(false); props.setValue(0);}} selected={props.value===0} classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/">
            <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem onClick={()=> {setOpenDrawer(false); props.setValue(1);}} selected={props.value===1} classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/services">
            <ListItemText className={classes.drawerItem} disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem onClick={()=> {setOpenDrawer(false); props.setValue(2);}} selected={props.value===2} classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/revolution">
            <ListItemText className={classes.drawerItem} disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem onClick={()=> {setOpenDrawer(false); props.setValue(3);}} selected={props.value===3} classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/about">
            <ListItemText className={classes.drawerItem} disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem onClick={()=> {setOpenDrawer(false); props.setValue(4);}} selected={props.value===4} classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/contact">
            <ListItemText className={classes.drawerItem} disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem onClick={()=> {setOpenDrawer(false); props.setValue(5);}} selected={props.value===5} classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}  divider button component={Link} to="/estimate">
            <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img alt="logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
export default Header;
