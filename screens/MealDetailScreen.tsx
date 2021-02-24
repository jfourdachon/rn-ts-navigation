import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DefaultNavigationProps } from '../types';


interface Props {
    navigation: DefaultNavigationProps<'MealDetail'>;
  }
const MealDetailScreen = ({navigation}: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The meal detail screen</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.popToTop();
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
export default MealDetailScreen;
