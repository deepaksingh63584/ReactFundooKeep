import { createStackNavigator } from 'react-navigation-stack';
import LogIn from './components/logInComponents/logIn';
import SignUp from './components/logInComponents/signUp';
import ForgatePassword from './components/logInComponents/forgatePassword';
import 'react-native-gesture-handler';
import CreateNote from './components/notesComponents/NoteCard';
import AddLabel from './components/LabelsComponents/AddLeble';
import SearchNote from './components/dashBoardComponent/SearchNote';


export const StackNavigator = createStackNavigator({
    LogIn: { screen: LogIn, navigationOptions: { header: null } },
    SignUp: { screen: SignUp, navigationOptions: { header: null } },
    ForgatePassword: { screen: ForgatePassword, navigationOptions: { header: null } },
    //DashBoard: { screen: Dashboard, navigationOptions: { header: null } },
    CreateNote: { screen: CreateNote, navigationOptions: { header: null } },
    AddLabel: { screen: AddLabel, navigationOptions: { header: null } },
    SearchNote: { screen: SearchNote, navigationOptions: { header: null } },
},
    {
        initialRouteName: 'LogIn'
    });
