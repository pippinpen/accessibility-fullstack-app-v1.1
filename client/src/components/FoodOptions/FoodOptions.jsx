import React from 'react'
import DrinkOptions from '../DrinkOptions/DrinkOptions'

const FoodOptions = ( {drink} ) => {

  let drinkOptions = <DrinkOptions/>

  return (
    <>
    {drink? <h2>Food & Drink</h2> : <h2>Food</h2>}
    <p>Your event will have food. Whether small nibbles or big course, here are the accessibility options to consider for food:</p>
    <li>Check dietary requirements, which may include: Vegetarian, Vegan, Kosher, Halal, Diary free, Gluten free</li>
    <li>Check allergies, common food allergies include: Wheat, Nuts, Fish, Eggs and Soy</li>
    {drink ? drinkOptions : null}
    </>
  )
}

export default FoodOptions