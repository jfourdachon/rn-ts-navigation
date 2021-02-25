import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack';


type Props = {
  navigation: NavigationStackProp<{ categoryId: string }>;
};


const CategoryMealsScreen = ({ navigation }: Props) => {
  const catId = navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return (
    <View style={styles.screen}>
      <Text>The category meal screen</Text>
      <Text>{selectedCategory?.title}</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('MealDetail');
        }}
      />
      <Button
        title='Go back'
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
