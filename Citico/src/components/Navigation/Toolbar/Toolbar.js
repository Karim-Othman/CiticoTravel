import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
// import Dropdown from '../Dropdown/Dropdown'

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        {/* <div style={{display: 'flex', justifyContent: 'center'}} >
        <Dropdown />
      </div> */}
              {/* <nav className={classes.DesktopOnly}>
            <Dropdown />
        </nav> */}
            
            {/* <dropdown className={classes.DesktopOnly}>
            <Dropdown />
        </dropdown> */}

  </header>
);

export default toolbar;