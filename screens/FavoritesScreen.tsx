import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data'

type Props = {
    navigation: NavigationStackProp;
  };
  

const FavoritesScreen = ({navigation}: Props) => {

    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return (
    <MealList navigation={navigation} listData={favoriteMeals}/>
  );
};

export default FavoritesScreen;
