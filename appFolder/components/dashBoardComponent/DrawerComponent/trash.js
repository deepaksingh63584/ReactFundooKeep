import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import TrashTopBar from '../TrashTopBar';
import { trashNotes } from '../../dashbordFirebaseDB'
import ListViewNotes from '../../notesComponents/ListViewNotes'
import { trashAndRestore, permanentDelete } from '../../dashbordFirebaseDB';

export default class Trash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Notes: []
        };
    }

    componentDidMount = () => {
        trashNotes((snapObj) => {
            let Notes = []
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    if (snapObj[key].Trash === true) {
                        snapObj[key].noteId = key
                        Notes.push(snapObj[key])
                        //Notes[Count++].noteId = key;
                    }
                })
                this.setState({ Notes: Notes })
            }
        })
    }

    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <TrashTopBar {...this.props} />
                </View>
                {
                    this.state.Notes.length === 0 ? null :
                        <FlatList
                            data={this.state.Notes}
                            renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} />}
                        />
                }
            </View>
        );
    }
}