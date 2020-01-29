import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import OtherTopBar from '../OtherTopBar';
import BottomBar from '../bottomAppbar'


export default class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinNotes: [],
            unPinNotes: [],
        };
    }

    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <OtherTopBar {...this.props} />
                </View>
                {
                    this.state.pinNotes.length === 0 ? null :
                        <FlatList
                            data={this.state.pinNotes}
                            renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} />}
                        />
                }
                {
                    this.state.unPinNotes.length === 0 ? null :
                        <FlatList
                            data={this.state.unPinNotes}
                            renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} />}
                        />
                }
                <View style={{ bottom: 0, width: '100%', position: 'absolute' }}>
                    <BottomBar {...this.props} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    bottomFooter: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#00ff00',
        backgroundColor: 'transparent'
    },

});