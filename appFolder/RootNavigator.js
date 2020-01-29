import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { StackNavigator } from './StackNavigator'
import { DrawerNavigator } from './DrawerNavigator'

const SwitchNavigator = createSwitchNavigator({
    Auth: { screen: StackNavigator },
    Drawer: { screen: DrawerNavigator }
}, {
    initialRouteName: 'Drawer',
});

export default createAppContainer(SwitchNavigator)