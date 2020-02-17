import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { fetchUserData } from '../logInComponents/logInFireBase'
import AsyncStorage from '@react-native-community/async-storage'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = async () => {
        let auth = await AsyncStorage.getItem('isAuth')
        if (!auth) {
            this.props.navigation.navigate('Auth')
        }
        else {
            this.props.navigation.navigate('Notes')
        }
    };



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', marginBottom: 55, marginRight: 10 }}>
                <Image source={require('../../assets/fundooSplashLogo.jpg')} />
            </View>
        );
    }
}
