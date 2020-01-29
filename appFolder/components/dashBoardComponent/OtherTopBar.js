import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FeatherIcon from 'react-native-vector-icons/Feather';


const grid = require('../../assets/grid.png');
const list = require('../../assets/list.png');

export default class OtherTopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainSearch}>
                <View style={styles.menuButton}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.openDrawer() }}
                    >
                        <Image
                            style={{ padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: -3 }}
                            source={require('../../assets/menuIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchButton}>
                    <TouchableOpacity
                        onPress={() => alert('SearchBarOpen')}>
                        <Text style={{ padding: 14, fontSize: 20, marginTop: -17 }}>
                            Archive
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => alert('Searching Notes')}>
                        <MaterialIcon name="search" size={30} style={{ padding: 14, fontSize: 25, marginTop: -15 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => alert('Grid Notes')}>
                        <FeatherIcon name="grid" size={30} style={{ padding: 14, fontSize: 25, marginTop: -15 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchButton: {
        display: 'flex',
        width: '64 %',
        position: 'relative',
        opacity: 6,
    },

    mainSearch: {
        padding: 12,
        width: '100%',
        // backgroundColor: 'deeppink',
        marginTop: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 58,
        height: 50,
        shadowColor: 'gray',
        display: 'flex',
        justifyContent: 'space-between'

    }
});
