import React from "react";
import dateFormat from '../../utils/dateFormat'
import InPersonVenueOptions from "../InPersonVenueOptions/InPersonVenueOptions";
import OnlineVenueOptions from "../OnlineVenueOptions/OnlineVenueOptions";
import MaterialsOptions from "../MaterialsOptions/MaterialsOptions";
import FoodOptions from "../FoodOptions/FoodOptions";
import DrinkOptions from "../DrinkOptions/DrinkOptions";
import ResponseForm from "../ResponseForm/ResponseForm";


function ResponseOptions({ event }) {
  // const classes = useStyles();

  if (!event) {
    return <p>Couldn't find the event with that ID</p>;
  }

  let { title, date, venue, materials, foodDrink} = event.formConfig;

  // Conditional rendering accessibility suggestions
  // let venueSuggestions = null;
  // if (venue === "inPerson"){
  //   venueSuggestions = <InPersonVenueOptions/>
  // } else {
  //   venueSuggestions = <OnlineVenueOptions/>
  // }

  // let materialsSuggestions = null;
  // if (materials === "yesMaterials"){
  //   if (venue === "inPerson"){
  //     materialsSuggestions = <MaterialsOptions inPerson="true"/>
  //   } else {
  //     materialsSuggestions = <MaterialsOptions/>
  //   }
  // }

  // let foodDrinkSuggestions = null;
  // if (foodDrink === "food"){
  //   foodDrinkSuggestions = <FoodOptions/>
  // } else if (foodDrink === "foodDrink"){
  //   foodDrinkSuggestions = <FoodOptions drink="true "/>
  // } else if (foodDrink === "drink" ) {
  //   foodDrinkSuggestions = <DrinkOptions/>
  // }

  return(
    <div
      // className={classes.eventList}
      >  
      <h3>Title: {title}</h3>
      <p>Date: {dateFormat(date)}</p>
      <p>ID: {event._id}</p>
      <p>Please answer the following form to tell the event organisers what accessibility provisions they need to provide</p>
      {/* <div>
        {venueSuggestions}
      </div>
      <div>
        {materialsSuggestions}
      </div>
      <div>
        {foodDrinkSuggestions}
      </div> */}
      <ResponseForm formConfig={event.formConfig}/>
    </div>
  );
}

export default ResponseOptions;