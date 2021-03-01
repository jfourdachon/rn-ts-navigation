import React from 'react';
import { StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList';

const CategoryMealsScreen: NavigationStackScreenComponent = ({ navigation }) => {

  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

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
