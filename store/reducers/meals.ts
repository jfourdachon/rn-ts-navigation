import { MEALS } from '../../data/dummy-data'
import Meal from '../../models/meal'
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals'


export type MEAL_STATE = {
    meals: Meal[],
    filteredMeals: Meal[],
    favoriteMeals: Meal[]
}

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex: number = state.favoriteMeals.findIndex((meal: Meal) => meal.id === action.mealId)
            if (existingIndex >= 0) {
                console.log('payo')

                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(existingIndex, 1)
                return { ...state, favoriteMeals: updatedFavMeals }
            } else {
                console.log('yo')
                const meal = state.meals.find((meal: Meal) => meal.id === action.mealId)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal as any) }
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter((meal: Meal) => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                else return true
            })
            return { ...state, filteredMeals: updatedFilteredMeals }
        default:
            return state
    }


    return state
}

export default mealsReducer