import React from 'react';
import RootNavigator from './appFolder/RootNavigator';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import DrawerContent from './appFolder/components/dashBoardComponent/DrawerContent';
import NoteCard from './appFolder/components/notesComponents/NoteCard'
import Notes from './appFolder/components/dashBoardComponent/DrawerComponent/notes';
import BottomPopUp from './appFolder/components/notesComponents/BottomPopUp';
import Archive from './appFolder/components/dashBoardComponent/DrawerComponent/archive';
import TrashTopBar from './appFolder/components/dashBoardComponent/TrashTopBar'
import SetReminder from './appFolder/components/notesComponents/SetReminder';
import CreateLable from './appFolder/components/LabelsComponents/CreateLable';



const App = () => {
  // return < DrawerContent />
  // return <RootNavigator />
  // return <NoteCard />
  // return <Notes />
  // return <BottomPopUp />
  // return <OtherTopBar />
  // return <Archive />
  // return <TrashTopBar />
  // return <SetReminder />
  return <CreateLable />

};

export default App;
