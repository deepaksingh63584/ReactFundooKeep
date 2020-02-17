import { createStackNavigator } from 'react-navigation-stack';
import LogIn from './components/logInComponents/logIn';
import SignUp from './components/logInComponents/signUp';
import ForgatePassword from './components/logInComponents/forgatePassword';
import 'react-native-gesture-handler';
import SplashScreen from './components/dashBoardComponent/SplashScreen'
import CreateNote from './components/notesComponents/NoteCard';
import AddLabel from './components/LabelsComponents/AddLeble';
import SearchNote from './components/dashBoardComponent/SearchNote';
import Profile from './components/dashBoardComponent/Profile';


export const StackNavigator = createStackNavigator({
    LogIn: { screen: LogIn, navigationOptions: { headerShown: false } },
    SignUp: { screen: SignUp, navigationOptions: { headerShown: false } },
    ForgatePassword: { screen: ForgatePassword, navigationOptions: { headerShown: false } },
    SplashScreen: { screen: SplashScreen, navigationOptions: { headerShown: false } },
    CreateNote: { screen: CreateNote, navigationOptions: { headerShown: false } },
    AddLabel: { screen: AddLabel, navigationOptions: { headerShown: false } },
    SearchNote: { screen: SearchNote, navigationOptions: { headerShown: false } },
    Profile: { screen: Profile, navigationOptions: { headerShown: false } },
},
    {
        initialRouteName: 'LogIn'
    });
