// import React from 'react';
// import './Dropdown.css';


// class Dropdown extends React.Component {
// constructor(){
//  super();

//  this.state = {
//        displayMenu: false,
//      };

//   this.showDropdownMenu = this.showDropdownMenu.bind(this);
//   this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

// };

// showDropdownMenu(event) {
//     event.preventDefault();
//     this.setState({ displayMenu: true }, () => {
//     document.addEventListener('hover', this.hideDropdownMenu);
//     });
//   }

//   hideDropdownMenu() {
//     this.setState({ displayMenu: false }, () => {
//       document.removeEventListener('hover', this.hideDropdownMenu);
//     });

//   }

//   render() {
//     return (
//         <div  className="dropdown" style = {{background:"red",width:"200px"}} >
//          <div className="button" onMouseEnter ={this.showDropdownMenu}> My Setting </div>

//           { this.state.displayMenu ? (
//           <ul>
//          <li><a className="active" href="#Create Page">Create Page</a></li>
//          <li><a href="#Manage Pages">Manage Pages</a></li>
//          <li><a href="#Create Ads">Create Ads</a></li>
//          <li><a href="#Manage Ads">Manage Ads</a></li>
//          <li><a href="#Activity Logs">Activity Logs</a></li>
//          <li><a href="#Setting">Setting</a></li>
//          <li><a href="#Log Out">Log Out</a></li>
//           </ul>
//         ):
//         (
//           null
//         )
//         }

//        </div>

//     );
//   }
// }

// export default Dropdown;


// import React from 'react';

// import classes from './Dropdown.css';
// import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


//   let drop_Items = [
//     {Page: "about us",
//      link: "/",
//      active_flag:"true"},
//      {Page: "contact us",
//      link: "/",
//      active_flag:"false"},
//      {Page: "Hotel",
//      link: "/",
//      active_flag:"false"},
//      {Page: "Flight+Hotel",
//      link: "/",
//      active_flag:"false"},
//   ];
  
// const dropdownItems = (props) => (
//     <ul className={classes.Dropdown}>
//     {drop_Items.map(items =>{
//         return<NavigationItem link={items.link}
//                  active={false}>
//                     {items.Page}</NavigationItem>
//     })}
//     </ul>
// );

// export default dropdownItems;



import React from 'react';
import classes from './Dropdown.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
// import '../NavigationItems/NavigationItems';

// console.log(toolbar_Items[1].Page);

  let drop_Items = [
    {Page: "about us",
     link: "/",
     active_flag:"true"},
     {Page: "contact us",
     link: "/",
     active_flag:"false"},
     {Page: "Hotel",
     link: "/",
     active_flag:"false"},
     {Page: "Flight+Hotel",
     link: "/",
     active_flag:"false"},
  ];
  
const dropdownItems = (props) => (
    <ul className={classes.dropdown}>
    {drop_Items.map(items =>{
        return<NavigationItem link={items.link}
                 active={false}>
                    {items.Page}</NavigationItem>
    })}
    </ul>
);

const dropdown = (props) => (
<div className={classes.hoverbutton}>
<dropdown> <NavigationItem className={classes.hoverbuttonoff}>{props.page}</NavigationItem> </dropdown>
<span className={classes.hoverbuttonon}>{dropdownItems()}</span>
</div>
);

export default dropdown;


