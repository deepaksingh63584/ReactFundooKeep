import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-gesture-handler';
import notes from './components/dashBoardComponent/DrawerComponent/notes'
import reminder from './components/dashBoardComponent/DrawerComponent/reminder'
import archive from './components/dashBoardComponent/DrawerComponent/archive'
import trash from './components/dashBoardComponent/DrawerComponent/trash'
import Label from './components/dashBoardComponent/DrawerComponent/label'
import DrawerContent from "./components/dashBoardComponent/DrawerContent";

export const DrawerNavigator = createDrawerNavigator({
    Notes: {
        screen: notes
    },
    Reminder: {
        screen: reminder
    },
    Label: {
        screen: Label
    },
    Archive: {
        screen: archive
    },
    Trash: {
        screen: trash
    }
},
    {
        initialRouteName: 'Notes',
        contentComponent: DrawerContent,
        DrawerWidth: 330
    },
    {
        contentOptions: {
            activeTintColor: 'black',
            activeBackgroundColor: '#feefc3',
        }

    },
);