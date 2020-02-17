import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { StackNavigator } from './StackNavigator'
import { DrawerNavigator } from './DrawerNavigator'
import SplashScreen from './components/dashBoardComponent/SplashScreen'

const SwitchNavigator = createSwitchNavigator({
    SplashScreen: { screen: SplashScreen },
    Auth: { screen: StackNavigator },
    Drawer: { screen: DrawerNavigator }
}, {
    initialRouteName: 'SplashScreen',
});

export default createAppContainer(SwitchNavigator)