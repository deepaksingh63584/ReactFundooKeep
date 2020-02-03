import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TrashTopBar extends Component {
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
                    <Text style={{ padding: 14, fontSize: 20, marginTop: -17 }}>
                        Trash
                    </Text>
                </View>
                <View>
                    <MaterialCommunityIcon name="dots-vertical" size={30} style={{ marginRight: 10, marginTop: -6 }} onPress={
                        () => {

                        }
                    } />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchButton: {
        display: 'flex',
        width: '75 %',
        position: 'relative',
        opacity: 6,
    },

    mainSearch: {
        padding: 12,
        width: '100%',
        marginTop: 5,
        flexDirection: 'row',
        height: 50,
        shadowColor: 'gray',
        display: 'flex',
        justifyContent: 'space-between'

    }
});
