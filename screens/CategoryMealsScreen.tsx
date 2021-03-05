import React from 'react';
import { useSelector } from "react-redux";
import { CATEGORIES } from '../data/dummy-data';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList';
import { ROOT_STATE } from '../store/combineReducers';

const CategoryMealsScreen: NavigationStackScreenComponent = ({ navigation }) => {

  const catId = navigation.getParam('categoryId');

  const availableMeals = useSelector((state:  ROOT_STATE) => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.includes(catId));

  return (
   <MealList listData={displayedMeals} navigation={navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory?.title,
  };
};


export default CategoryMealsScreen;
