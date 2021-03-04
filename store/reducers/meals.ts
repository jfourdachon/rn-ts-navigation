import {MEALS} from '../../data/dummy-data'
import Meal from '../../models/meal'
import { TOGGLE_FAVORITE } from '../actions/meals'


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
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex: number = state.favoriteMeals.findIndex((meal: Meal) => meal.id === action.mealId)
            if (existingIndex >= 0) {
                console.log('payo')

                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(existingIndex, 1)
                return {...state, favoriteMeals: updatedFavMeals }
            } else {
                console.log('yo')
                const meal = state.meals.find((meal:Meal) => meal.id === action.mealId)                
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal as any)}
            }
            default:
                return state
    }


    return state
}

export default mealsReducer