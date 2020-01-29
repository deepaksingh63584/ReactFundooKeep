import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import TopBar from "../topAppBar"
import BottomBar from '../bottomAppbar'
import GridViewNotes from '../../notesComponents/GridViewNotes'
import ListViewNotes from '../../notesComponents/ListViewNotes'
import { fetchNotesFromFireBase } from '../../dashbordFirebaseDB';

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinNotes: [],
            unPinNotes: [],
            loading: true,
        };
    }

    componentDidMount = () => {
        fetchNotesFromFireBase((snapObj) => {
            let pinNotes = []
            let unPinNotes = []
            let pinCount = 0
            let unPinCount = 0
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    snapObj[key].noteId === key
                    if (snapObj[key].PinStatus === true && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                        pinNotes.push(snapObj[key])
                        pinNotes[pinCount++].noteId = key;
                    }
                    else if (snapObj[key].PinStatus === false && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                        unPinNotes.push(snapObj[key])
                        unPinNotes[unPinCount++].noteId = key;
                    }
                })
            }
            this.setState({
                pinNotes: pinNotes.reverse(),
                unPinNotes: unPinNotes.reverse()
            }, () => {
                // console.?og('pinNotes' + pinNotes);
                // console.log('UNpinned Notes' + JSON.stringify(unPinNotes));
                this.setState({
                    loading: false,
                })
            })
        })
    }

    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <TopBar {...this.props} />
                </View>
                {
                    this.state.pinNotes.length === 0 ? null :
                        <FlatList
                            // numColumns={this.state.listView ? 1 : 2}
                            data={this.state.pinNotes}
                            renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} />}
                        />
                }
                {
                    this.state.unPinNotes.length === 0 ? null :
                        <FlatList
                            // numColumns={this.state.listView ? 1 : 2}
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