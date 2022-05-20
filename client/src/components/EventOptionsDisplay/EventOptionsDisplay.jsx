import React from "react";
import InPersonVenueOptions from "../InPersonVenueOptions/InPersonVenueOptions";
import OnlineVenueOptions from "../OnlineVenueOptions/OnlineVenueOptions";
import MaterialsOptions from "../MaterialsOptions/MaterialsOptions";
import FoodOptions from "../FoodOptions/FoodOptions";
import DrinkOptions from "../DrinkOptions/DrinkOptions";
import AssistanceOptions from "../AssistanceOptions/AssistanceOptions";

function EventOptionsDisplay({ event }) {
  if (!event) {
    return <p>Couldn't find the event with that ID</p>;
  }

  let { isOnline, isInPerson, hasMaterials, hasFood, hasDrink } = event.formConfig;

  return(
    <div>
      <p>With your particular type of event, the following accessibility options should be offered.</p>
      {isOnline && <OnlineVenueOptions/>}
      {isInPerson && <InPersonVenueOptions/>}
      <AssistanceOptions inPerson={isInPerson}/>
      {hasMaterials && <MaterialsOptions inPerson={isInPerson}/>}
      {hasFood && <FoodOptions/>}
      {hasDrink && <DrinkOptions/>}
    </div>
  );
}

export default EventOptionsDisplay;