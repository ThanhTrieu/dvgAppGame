import React from 'react'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import MenuDrawer from '../Containers/DrawerMenu/MainDrawerMenu'
import SearchDrawer from '../Containers/DrawerMenu/SearchDrawerMenu'
import DetailNews from '../Containers/DetailGameScreen'


import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { 
    screen: LaunchScreen
  },
  Menu: {
    screen: MenuDrawer,
  },
  Search: {
    screen: SearchDrawer
  },
  Detail: {
    screen: DetailNews
  }
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: PrimaryNav,
  }
},{
  drawerPosition: 'left',
  contentComponent: props => <MenuDrawer {...props} />
})

/*
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
})
*/

export default createAppContainer(MyDrawerNavigator)
