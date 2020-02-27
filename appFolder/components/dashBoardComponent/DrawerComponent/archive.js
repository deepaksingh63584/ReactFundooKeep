import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import OtherTopBar from '../OtherTopBar';
import { archiveNotes } from '../../dashbordFirebaseDB'
import ListViewNotes from '../../notesComponents/ListViewNotes'


export default class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Notes: [],
        };
    }

    componentDidMount = () => {
        archiveNotes((snapObj) => {
            let Notes = []
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    if (snapObj[key].Archive === true && snapObj[key].Trash === false) {
                        snapObj[key].noteId = key
                        Notes.push(snapObj[key])
                        this.props.navigation.navigate('Notes')
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
                    <OtherTopBar {...this.props} />
                </View>
                {
                    this.state.Notes.length === 0 ? null :
                        <FlatList
                            data={this.state.Notes}
                            ListHeaderComponent={<Text style={{ padding: 10, fontSize: 18 }}>Archive: {this.state.Notes.length}</Text>}
                            renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} />}
                        />
                }
            </View>
        );
    }
}