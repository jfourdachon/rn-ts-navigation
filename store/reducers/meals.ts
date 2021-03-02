import {MEALS} from '../../data/dummy-data'
import Meal from '../../models/meal'


export type MEAL_STATE = {
    meals: Meal[],
    fileredMeals: Meal[],
    favoriteMeals: Meal[] 
}

const initialState = {
    meals: MEALS,
    fileredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action: any) => {



    return state
}

export default mealsReducer