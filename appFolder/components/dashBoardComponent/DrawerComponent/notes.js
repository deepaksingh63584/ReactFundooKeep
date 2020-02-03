import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import TopBar from "../topAppBar"
import BottomBar from '../bottomAppbar'
import ListViewNotes from '../../notesComponents/ListViewNotes'
import { fetchNotesFromFireBase } from '../../dashbordFirebaseDB';

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinNotes: [],
            unPinNotes: [],
            loading: true,
            listView: true,
            pinCount: 0,
            unPinCount: 0,
            list: 1,

        };
    }

    viewChange = async () => {
        await this.setState({
            listView: !this.state.listView,

        })
        console.log("value if kist vieee==>", this.state.listView);

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
                unPinNotes: unPinNotes.reverse(),
                pinCount: pinCount,
                unPinCount: unPinCount,
            }, () => {
                // console.log('pinNotes' + pinNotes);
                // console.log('UNpinned Notes' + JSON.stringify(unPinNotes));
                this.setState({
                    loading: false,
                })
            })
        })
    }

    render() {
        // console.log('ahdjkjhjZKJjnk', this.props);
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <TopBar {...this.props}
                        listView={this.state.listView}
                        viewChange={this.viewChange}
                    />
                </View>
                {
                    this.state.loading === true ?
                        <ActivityIndicator
                            animating={this.state.loading}
                            size="large"
                            style={{
                                // flex: 1,                                
                                height: '90%',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        />
                        :
                        null
                }
                <ScrollView>
                    <View>
                        <Text style={{ padding: 10, fontSize: 18 }}>PINNED:</Text>
                        {
                            this.state.pinNotes.length !== 0 ?
                                <FlatList
                                    numColumns={this.state.listView ? 1 : 2}
                                    data={this.state.pinNotes}
                                    key={this.state.listView ? 1 : 2}
                                    renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} listView={this.state.listView} />}
                                />
                                :
                                null
                        }
                    </View>
                    <View>
                        <Text style={{ padding: 10, fontSize: 18 }}>OTHERS:</Text>
                        {
                            this.state.unPinNotes.length === 0 ? null :
                                <FlatList
                                    numColumns={this.state.listView ? 1 : 2}
                                    data={this.state.unPinNotes}
                                    key={this.state.listView ? 1 : 2}
                                    renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} listView={this.state.listView} />}
                                />
                        }
                    </View>
                </ScrollView>
                <View style={{ bottom: 0, width: '100%', position: 'absolute' }}>
                    <BottomBar {...this.props} />
                </View>
            </View >
        );
    }
}