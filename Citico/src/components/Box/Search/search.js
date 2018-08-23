// import React from 'react';

// import classes from './search.css';

// const search = ( props ) => (
//     <li className={classes.search}>
//         <a 
//             text={props.search_Item} 
//             type={props.type}>
//             </a>
//     </li>


// );

// export default search;

import React from 'react';
import classes from './search.css';


const search_box_items = ( props ) => {
    return (
        <div  className={classes.Search}>
        <items>{props.search_Item}</items>
            {/* <p>{props.children}</p> */}
            <div>
            <input type={props.type}/>
        </div>
        </div>

    )
};

export default search_box_items;