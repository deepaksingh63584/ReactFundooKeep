import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-gesture-handler';
import notes from './components/dashBoardComponent/DrawerComponent/notes'
import reminder from './components/dashBoardComponent/DrawerComponent/reminder'
import archive from './components/dashBoardComponent/DrawerComponent/archive'
import trash from './components/dashBoardComponent/DrawerComponent/trash'
import editLabel from './components/dashBoardComponent/DrawerComponent/EditLabel'
import DrawerContent from "./components/dashBoardComponent/DrawerContent";
import LabelContent from './components/LabelsComponents/LabelContent';
import ChartPage from './components/dashBoardComponent/DrawerComponent/ChartPage'
import DragableNotes from './components/dashBoardComponent/DrawerComponent/DragableNotes'
import ImageLoading from './components/ExtraTaskComponet/ImageLoading'
import SqliteDB from './components/ExtraTaskComponet/SqliteDB'

export const DrawerNavigator = createDrawerNavigator({
    Notes: {
        screen: notes
    },
    Reminder: {
        screen: reminder
    },
    Label: {
        screen: editLabel
    },
    Archive: {
        screen: archive
    },
    Trash: {
        screen: trash
    },
    LabelContent: {
        screen: LabelContent
    },
    ChartPage: {
        screen: ChartPage
    },
    DragableNotes: {
        screen: DragableNotes
    },
    ImageLoading: {
        screen: ImageLoading
    },
    SqliteDB: {
        screen: SqliteDB
    },
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