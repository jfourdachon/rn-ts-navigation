import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import { NavigationStackProp } from 'react-navigation-stack';
import CategoryGridTile from '../components/CategoryGridTile';

type Props = {
  navigation: NavigationStackProp<'Categories'>;
};

type ItemData = {
  item: Category;
};

const CategoriesScreen = ({ navigation }: Props) => {
  const renderItem = (itemData: ItemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          })
        }
      />
    );
  };
  return <FlatList keyExtractor={(item: Category) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderItem} />;
};

export default CategoriesScreen;
