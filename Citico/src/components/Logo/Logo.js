import React from 'react';

import citicoLogo from '../../assets/images/citico-travel.bmp';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <li><a href="/">
        <img src={citicoLogo}/>
        </a></li>
    </div>
);

export default logo;