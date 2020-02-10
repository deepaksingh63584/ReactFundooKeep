import React from 'react';
import { View, FlatList, Text } from 'react-native';
import OtherTopBar from '../OtherTopBar';
import ListViewNotes from '../../notesComponents/ListViewNotes'
import { fetchNotesFromFireBase } from '../../dashbordFirebaseDB';


export default class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Notes: [],
        };
    }

    componentDidMount = () => {
        fetchNotesFromFireBase((snapObj) => {
            let Notes = []
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    if (snapObj[key].reminderTime !== '') {
                        snapObj[key].noteId = key
                        Notes.push(snapObj[key])

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
                            ListHeaderComponent={<Text style={{ padding: 10, fontSize: 18 }}>Reminder: {this.state.Notes.length}</Text>}
                            renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} />}
                        />
                }
            </View>
        );
    }
}