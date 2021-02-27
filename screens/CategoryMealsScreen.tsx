import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NavigationStackProp } from 'react-navigation-stack';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

type Props = {
  navigation: NavigationStackProp<'CategoryMeals'>;
};

type MealItemData = {
  item: Meal;
};

const CategoryMealsScreen = ({ navigation }: Props) => {
  const renderMealItem = (itemData: MealItemData) => (
    <MealItem
      title={itemData.item.title}
      affordability={itemData.item.affordability}
      complexity={itemData.item.complexity}
      duration={itemData.item.duration}
      ingredients={itemData.item.ingredients}
      imageUrl={itemData.item.imageUrl}
      steps={itemData.item.steps}
      onSelectMeal={() => navigation.navigate('MealScreen')}
    />
  );

  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} style={{width: '100%'}}/>
    </View>
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
