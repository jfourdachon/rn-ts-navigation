import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { NavigationStackProp } from 'react-navigation-stack';
import Meal from '../models/meal';
import MealItem from './MealItem';

type MealItemData = {
  item: Meal;
};


type Props = {
  navigation: NavigationStackProp;
  listData: Meal[];
};

const MealList = ({ navigation, listData }: Props) => {
  const renderMealItem = (itemData: MealItemData,) => (
    <MealItem
      title={itemData.item.title}
      affordability={itemData.item.affordability}
      complexity={itemData.item.complexity}
      duration={itemData.item.duration}
      ingredients={itemData.item.ingredients}
      imageUrl={itemData.item.imageUrl}
      steps={itemData.item.steps}
      onSelectMeal={() =>
        navigation.navigate('MealDetail', {
          mealId: itemData.item.id,
          mealTitle: itemData.item.title
        })
      }
    />
  );
  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default MealList;
