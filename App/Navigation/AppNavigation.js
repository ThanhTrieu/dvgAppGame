import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import MenuDrawer from '../Containers/DrawerMenu/MainDrawerMenu';
import SearchDrawer from '../Containers/DrawerMenu/SearchDrawerMenu';


import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: PrimaryNav,
  },
  Menu: {
    screen: MenuDrawer,
  },
  Search: {
    screen: SearchDrawer
  }
},{
  drawerPosition: 'left',
  contentComponent: props => <MenuDrawer {...props} />
});


const MainDrawerNavigator = createDrawerNavigator({
  MainScreenLunch: {
    screen: MyDrawerNavigator,
  },
}, {
    // drawerPosition: 'right',
    // drawerOpenRoute: 'DrawerRightOpen',
    // drawerCloseRoute: 'DrawerRightClose',
    // drawerToggleRoute: 'DrawerRightToggle',
    // contentComponent: props => <SearchDrawer {...props} />
});

export default createAppContainer(MainDrawerNavigator)
