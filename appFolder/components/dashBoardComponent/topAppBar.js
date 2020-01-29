import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Avatar } from 'react-native-paper';


const grid = require('../../assets/grid.png');
const list = require('../../assets/list.png');


export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            ViewList: true,

        };
    }
    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        // console.log(this.props);
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
                            Search your notes..
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => alert('gridViewNotes')}
                    >
                        <Image style={{ height: 25, width: 25, marginRight: '10%' }}
                            source={!this.state.ViewList ? grid : list}

                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => alert('profileSignOut')}>
                        <Avatar.Text size={42} label="D" style={{ marginTop: -10 }} />
                    </TouchableOpacity>
                </View>
            </View >
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