import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import dateFormat from './../../utils/dateFormat'

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   formRow: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     display: "flex",
//     justifyContent: "center",
//   },
//   configList: {
//     listStyle: "none",
//     padding: 0,
//   },
// }));

function FormDisplay({ event }) {
  // const classes = useStyles();

  if (!event) {
    return <p>Couldn't find the event with that ID</p>;
  }

  let { title, date, venue, materials, foodDrink} = event.formConfig;

  // Conditional rendering accessibility suggestions
  // if (venue === "inPerson"){
  //   let venueSuggestions = () => {
  //     return (
  //       <li>In person Venue whoo</li>
  //     )
  //   }; 
  // } else {
  //   let venueSuggestions = () => {
  //     return (
  //       <li>Online event whoo</li>
  //     )
  //   };
  // }

  return(
    <div
      // className={classes.eventList}
      >  
      <h3>Title: {title}</h3>
      <p>Date: {dateFormat(date)}</p>
      <p>ID: {event._id}</p>
      <p>With your particular type of event, we would like to suggest considering the following accessibility options:</p>
      <div>
        <h2>Venue {venue}</h2>
        <p></p>
        <ul>
          {/* {venueSuggestions()} */}
        </ul>
      </div>
    </div>
  );
}

export default FormDisplay;