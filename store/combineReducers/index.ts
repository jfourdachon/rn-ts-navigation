import { combineReducers } from 'redux';

import mealsReducer, { MEAL_STATE } from '../reducers/meals';

export type ROOT_STATE = {
    meals: MEAL_STATE
}

export const rootReducer = combineReducers({ meals: mealsReducer });
