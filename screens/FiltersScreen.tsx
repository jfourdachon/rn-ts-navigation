import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import HeaderButton from '../components/HeaderCustomButton'

const FiltersScreen:NavigationStackScreenComponent = () => {
    return (
        <View style={styles.screen}>
          <Text>The filter screen</Text>
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

    FiltersScreen.navigationOptions = ({navigation}) => {
        return {
            // ToggleDrawer method works fine, type bug with typescript or react-navigation types
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/></HeaderButtons>
        }
    }

export default FiltersScreen
