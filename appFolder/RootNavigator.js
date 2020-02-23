import React from 'react'
import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { StackNavigator } from './StackNavigator'
import { DrawerNavigator } from './DrawerNavigator'
import SplashScreen from './components/dashBoardComponent/SplashScreen'
import { Transition } from 'react-native-reanimated'

const SwitchNavigator = createAnimatedSwitchNavigator({
    SplashScreen: { screen: SplashScreen },
    Auth: { screen: StackNavigator },
    Drawer: { screen: DrawerNavigator }
},
    {
        initialRouteName: 'SplashScreen',
        transition: (
            <Transition.Together>
                <Transition.Out type="fade" interpolation="easeIn" durationMs={300} />
                <Transition.In type="scale" interpolation="easeOut" durationMs={300} />
            </Transition.Together>

        ),
    });

export default createAppContainer(SwitchNavigator)