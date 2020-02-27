import React, { Component } from "react";
import TopBar from "../topAppBar"
import { View, TouchableOpacity, Text, ActivityIndicator, ScrollView } from "react-native";
import DRAGgableFlatList from "react-native-draggable-flatlist";
import { fetchNotesFromFireBase } from '../../dashbordFirebaseDB';
import ListViewNotes from '../../notesComponents/ListViewNotes'

const pinNotes = [pinNotes].map((d, index) => ({
    key: `item-${index}`,
    dragNotes: index,
}));

const unPinNotes = [unPinNotes].map((d, index) => ({
    key: `item-${index}`,
    dragNotes: index,
}));

class DRAGgableNotes extends Component {
    state = {
        pinNotes: [],
        unPinNotes: [],
        loading: true,
        listView: true,
        pinCount: 0,
        unPinCount: 0,
        list: 1,
        data: pinNotes,
    };

    viewChange = async () => {
        await this.setState({
            listView: !this.state.listView,

        })
    }

    componentDidMount = () => {
        fetchNotesFromFireBase((snapObj) => {
            // console.log("fetchNotesFromFireBase notes:", snapObj);
            let pinNotes = []
            let unPinNotes = []
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    snapObj[key].noteId = key
                    if (snapObj[key].PinStatus === true && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                        pinNotes.push(snapObj[key])
                    }
                    else if (snapObj[key].PinStatus === false && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                        unPinNotes.push(snapObj[key])
                    }
                })
            }
            this.setState({
                pinNotes: pinNotes.reverse(),
                unPinNotes: unPinNotes.reverse(),
            }, () => {
                this.setState({
                    loading: false,
                })
            })
        })
    }

    render() {
        console.log(",data", JSON.stringify(this.props));
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <TopBar {...this.props}
                        listView={this.state.listView}
                        viewChange={this.viewChange}
                    />
                </View>
                <View style={{ flex: 1, height: "90%", width: "100%" }}>
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
                            {
                                this.state.pinNotes.length !== 0 ?
                                    <DRAGgableFlatList
                                        numColumns={this.state.listView ? 1 : 2}
                                        data={this.state.pinNotes}
                                        key={this.state.listView ? 1 : 2}
                                        keyExtractor={(item, index) => `draggable-item-${item.noteId}`}
                                        ListHeaderComponent={<Text style={{ padding: 10, fontSize: 18 }}>DRAG PINNED: {this.state.pinNotes.length}</Text>}
                                        renderItem={({ item, index, drag, isActive }) =>
                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: isActive ? "yellow" : item.backgroundColor,
                                                }}
                                                onLongPress={drag}
                                                onPress={() => this.props.notesProps.navigation.navigate('CreateNote', { 'item': this.props })}
                                            >
                                                <ListViewNotes {...item} notesProps={this.props} listView={this.state.listView} />
                                                {item.dragNotes}
                                            </TouchableOpacity>}
                                        onDragEnd={({ data }) => this.setState({ data })}
                                    />
                                    :
                                    null
                            }
                        </View>
                        <View>
                            {
                                this.state.unPinNotes.length === 0 ? null :
                                    <DRAGgableFlatList
                                        numColumns={this.state.listView ? 1 : 2}
                                        data={this.state.unPinNotes}
                                        key={this.state.listView ? 1 : 2}
                                        keyExtractor={(item, index) => `draggable-item-${item.noteId}`}
                                        ListHeaderComponent={<Text style={{ padding: 10, fontSize: 18 }}>DRAG OTHERS: {this.state.unPinNotes.length}</Text>}
                                        renderItem={({ item, index, drag, isActive }) =>
                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: isActive ? "yellow" : item.backgroundColor,
                                                }}
                                                onLongPress={drag}
                                                onPress={() => this.props.notesProps.navigation.navigate('CreateNote', { 'item': this.props })}
                                            >
                                                <ListViewNotes {...item} notesProps={this.props} listView={this.state.listView} />
                                            </TouchableOpacity>}
                                        onDragEnd={({ data }) => this.setState({ unPinNotes: data })}
                                    />
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default DRAGgableNotes;