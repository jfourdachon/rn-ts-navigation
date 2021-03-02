import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderCustomButton'


type ItemData = {
  item: Category;
};

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
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

CategoriesScreen.navigationOptions = ({navigation}) => {
    return {
        // ToggleDrawer method works fine, type bug with typescript or react-navigation types
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/></HeaderButtons>
    }
}

export default CategoriesScreen;
