import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NavigationStackProp } from 'react-navigation-stack';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

type Props = {
  navigation: NavigationStackProp;
};


const CategoryMealsScreen = ({ navigation }: Props) => {

  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  return (
   < MealList listData={displayedMeals} navigation={navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }: Props) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory?.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
});

export default CategoryMealsScreen;
