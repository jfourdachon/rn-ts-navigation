import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DefaultNavigationProps } from '../types';

interface Props {
  navigation: DefaultNavigationProps<'CategoryMeals'>;
}
const CategoryMealsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The category meal screen</Text>
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
