import React from 'react';
import RootNavigator from './appFolder/RootNavigator';
import 'react-native-gesture-handler';
// import { Text } from 'react-native';
// import DrawerContent from './appFolder/components/dashBoardComponent/DrawerContent';
// import NoteCard from './appFolder/components/notesComponents/NoteCard'
// import Notes from './appFolder/components/dashBoardComponent/DrawerComponent/notes';
// import BottomPopUp from './appFolder/components/notesComponents/BottomPopUp';
// import Archive from './appFolder/components/dashBoardComponent/DrawerComponent/archive';
// import TrashTopBar from './appFolder/components/dashBoardComponent/TrashTopBar'
// import SetReminder from './appFolder/components/notesComponents/SetReminder';
// import CreateLable from './appFolder/components/LabelsComponents/CreateLable';
// import LabelContent from './appFolder/components/LabelsComponents/LabelContent';
// import SearchNote from './appFolder/components/dashBoardComponent/SearchNote';
// import SplashScreen from './appFolder/components/dashBoardComponent/SplashScreen'

const App = () => {
  // return < DrawerContent />
  return <RootNavigator uriPrefix={'fundoonotes://'} />
  // return <NoteCard />
  // return <Notes />
  // return <BottomPopUp />
  // return <OtherTopBar />
  // return <Archive />
  // return <TrashTopBar />
  // return <SetReminder />
  // return <CreateLable />
  // return <LabelContent />
  // return <SearchNote />
  // return <SplashScreen />

};

export default App;
