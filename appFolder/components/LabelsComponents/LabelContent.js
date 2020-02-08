import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import OtherTopBar from '../dashBoardComponent/OtherTopBar';
import BottomAppBar from '../dashBoardComponent/bottomAppbar';
import { getLabelFromNote, getDesireNote } from '../LabelsDataBase'
import ListViewNotes from '../notesComponents/ListViewNotes';

export default class LabelContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lableId: props.navigation.getParam('lableId'),
            notes: [],
            listView: true,
            list: 1,

        };
    }

    viewChange = async () => {
        await this.setState({
            listView: !this.state.listView,
        })
    }


    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            lableId: props.navigation.getParam('lableId')
        }
    }

    displayLabelNotes = () => {
        getLabelFromNote(this.state.lableId, async (snapObj) => {
            let noteIds = [];
            var NotesArray = [];

            if (snapObj !== null && snapObj !== undefined) {

                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    if (snapObj[key].NoteId !== null) {
                        noteIds.push(snapObj[key].NoteId)
                    }
                })
                await noteIds.forEach(async (noteId) => {
                    await getDesireNote(noteId, (snapObj) => {
                        // console.log('snapshot--', snapObj);
                        NotesArray.push(snapObj);
                        // console.log('notearray==', NotesArray);
                    })
                    // console.log("array of notes :", NotesArray);
                    this.setState({
                        notes: NotesArray
                    }, () => {
                        // console.log("notee from label :", this.state.notes);
                    })
                    // console.log(noteIds, 'cmpnt did jdj')
                })
            }//if
        })
    }

    componentDidMount = () => {
        this.displayLabelNotes()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.lableId !== this.state.lableId) {
            this.displayLabelNotes()
        }

    }

    render() {

        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <OtherTopBar
                        {...this.props}
                        listView={this.state.listView} listView={this.state.listView}
                        viewChange={this.viewChange} />
                    {
                        this.state.notes.length === 0 ? null :
                            <FlatList
                                numColumns={this.state.listView ? 1 : 2}
                                key={this.state.listView ? 1 : 2}
                                data={this.state.notes}
                                renderItem={({ item }) =>
                                    <ListViewNotes
                                        {...item}
                                        notesProps={this.props}
                                        listView={this.state.listView}
                                    />}
                            />
                    }
                </View>
                <View style={{ bottom: 0, width: '100%', position: 'absolute' }}>
                    <BottomAppBar {...this.props} />
                </View>
            </View>
        );
    }
}
