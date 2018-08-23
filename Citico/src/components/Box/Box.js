
	import React, { Component } from 'react';

    import classes from './Box.css';
    // import Aux from '../../hoc/Aux';
    import Searchboxitems from './Search/search';
    
    let Flight_Items = [
        {search_Item: "Flying from",
         type: "text",
         input:"To",
        },
        {search_Item: "To",
        type: "text",
        input:"To",
        },
        {search_Item: "Departure Date",
        type: "Date",
        input:"To",
        },
        {search_Item: "Departure Time",
        type: "Date",
        input:"To",
        },
        {search_Item: "Return Date",
        type: "Date",
        input:"To",
        },
        {search_Item: "Return Time",
        type: "Date",
        input:"To",
        },
        {search_Item: "Traveller",
        type: "number",
        input:"To",
        },
        {search_Item: "Child (2-18 years)",
        type: "number",
        input:"To",
        },
        {search_Item: "Infant (0-2 year)",
        type: "number",
        input:"To",
        },
        {search_Item: "Cabin Class",
        type: "text",
        input:"To",
        },
      ];
      
      let Hotel_Items = [
        {search_Item: "Where do you want to go",
         type: "text",
         input:"To",
        },
        {search_Item: "Check in date",
        type: "Date",
        input:"To",
        },
        {search_Item: "Check out date",
        type: "Date",
        input:"To",
        },
        {search_Item: "Total passengers",
        type: "number",
        input:"To",
        },
        {search_Item: "Hotel Rating",
        type: "number",
        input:"To",
        },
    ];
    let Hotel_Flight=[...Flight_Items,...Hotel_Items];
    let itemsss=Flight_Items;

    class Box extends Component {
        state = {
            ChangeSearchBox: [
              { id: 'item', item: itemsss},
            //   { id: 'Hotel', item: Hotel_Items},
            //   { id: 'Hotel+flight', item: Flight_Items}
            ],
          }
            SearchboxHandler = (props) => {
                // let itemsss=Flight_Items;
                 itemsss = props;
                 this.setState( {
                    ChangeSearchBox: [
              { id: 'item', item: props},
                ]
                  } )
          }
        
         itemsss=Flight_Items;

    render(){
        return (
                <div className={classes.searchboxchange}>
                                 <button onClick={() => this.SearchboxHandler(Flight_Items)}>Flight
                                 </button>
                                 <button onClick={() => this.SearchboxHandler(Hotel_Items)} >Hotel                   
                                 </button>
                                 <button onClick={() => this.SearchboxHandler(Hotel_Flight)}  >Hotel+flight
                                 </button>
                <div  className={classes.Box}>
                
                <div className={classes.gridcontainer}> 
                     {itemsss.map((items) =>{
                         return <Searchboxitems
                         search_Item={items.search_Item} 
                         type={items.type} />})}
                                 <button  >Search
                                 </button>
                                 </div>
    
            </div>
            </div> 
         )
        ;}}
        export default Box;