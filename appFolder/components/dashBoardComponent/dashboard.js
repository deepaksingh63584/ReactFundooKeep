import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import TopBar from "./topAppBar";
import BottomBar from "./bottomAppbar";

export default class DashBoard extends React.Component {
    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <TopBar />
                </View>
                <View style={{ bottom: 0, width: '100%', position: 'absolute' }}>
                    <BottomBar />
                </View>
            </View>
        );
    }
}