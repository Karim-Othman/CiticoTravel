import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Dropdown from '../Dropdown/Dropdown'

let toolbar_Items = [
    {Page: "Home",
     link: "/",
     active_flag:"true",
     dropdown:"false"},
     {Page: "Flight",
     link: "/",
     active_flag:"false",
     dropdown:"false"},
     {Page: "Hotel",
     link: "/",
     active_flag:"false",
     dropdown:"false"},
     {Page: "Flight+Hotel",
     link: "/",
     active_flag:"false",
     dropdown:"false"},
     {Page: "Citico Holiday",
     link: "/",
     active_flag:"false",
     dropdown:"true"},
  ];

  
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
    {toolbar_Items.map(items =>{
        return<NavigationItem link={items.link}
                 active={false}>
                    {items.dropdown === "false"? items.Page  : null}
                    {items.dropdown === "true" ? <Dropdown page={items.Page}/> : null}</NavigationItem>
    })}
    </ul>
);

export default navigationItems;