import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { DefaultNavigationProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';


interface Props {
  navigation: DefaultNavigationProps<'Categories'>;
}

const CategoriesScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>The categories screen</Text>
      <Button title='Go to Details' onPress={() => {navigation.navigate('CategoryMeals')}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
