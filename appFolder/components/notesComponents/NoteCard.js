import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { setNoteInFireBase, updateNotesFromFireBase, trashAndRestore } from '../dashbordFirebaseDB';
import BottemPopUp from './BottomPopUp'

export default class GridViewNotes extends React.Component {
    constructor(props) {
        super(props);
        this.Item = this.props.navigation.getParam('item', null)
        // console.log("item un construtor:", this.Item);
        this.state = {
            noteTitle: this.Item === null ? '' : this.Item.Title,
            noteContent: this.Item === null ? '' : this.Item.Content,
            pinStatus: this.Item === null ? false : this.Item.PinStatus,
            archive: this.Item === null ? false : this.Item.Archive,
            setColor: this.Item === null ? '#ffffff' : this.Item.Color,
            Trash: this.Item === null ? false : this.Item.Trash,

        };
    }

    colorChange = (color) => {
        this.setState({
            setColor: color
        })
    }

    trashAndRestoreNotes = (trash) => {
        // console.log('aUDYQWUJDKSAOHASOIXZBCUZIJ');
        trashAndRestore(this.Item.noteId, trash)
        // console.log(this.Item.noteId);
        this.props.navigation.navigate('Notes')
        // console.log('dfhhfjkgjgk')

    }

    pushNotes = () => {
        if (this.Item === null) {
            if (this.state.noteTitle !== '' || this.state.noteContent !== '') {
                setNoteInFireBase(this.state.noteTitle, this.state.noteContent, this.state.pinStatus,
                    this.state.archive, this.state.setColor, this.state.Trash, () => {
                        this.props.navigation.navigate('Notes')
                    })
            }
            else {
                this.props.navigation.navigate('Notes')
            }
        }
        else {
            // console.log("herw updation");
            updateNotesFromFireBase(this.Item.noteId, this.state.noteTitle, this.state.noteContent, this.state.pinStatus,
                this.state.archive, this.state.setColor, this.state.Trash, () => {
                    // console.log(this.Item.noteId);

                    this.props.navigation.navigate('Notes')
                    // console.log('update done');

                })
        }
    }

    render() {
        // console.log('iiiiiiiiiiiiiiiiiii    ' + this.Item)
        // console.log(this.state.setColor)
        // console.log(this.state.Trash);

        return (
            <View style={[styles.mainNotecard, { backgroundColor: this.state.setColor }]}>
                <View style={styles.topFooter}>
                    <View
                        style={styles.iconButton}>
                        <TouchableOpacity
                            onPress={this.pushNotes}>
                            <MaterialIcon name="keyboard-backspace" size={20} style={{ marginRight: 10, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.iconButton2}>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name="pin-outline" size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name="bell-plus-outline" size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ archive: !this.state.archive })}>
                            <MaterialIcon name="archive" size={22} />
                        </TouchableOpacity>
                    </View>
                </View >
                <View style={{
                    //backgroundColor: '#ccffff',
                    backgroundColor: 'transparent',
                    flex: 1,
                    padding: 15
                }}>
                    <ScrollView>
                        <TextInput
                            style={{ fontSize: 23 }}
                            placeholder="Title"
                            multiline={true}
                            maxLength={200}
                            value={this.state.noteTitle}
                            onChangeText={(text) => this.setState({ noteTitle: text })}
                        />
                        <TextInput
                            style={{ fontSize: 17 }}
                            placeholder="Note"
                            multiline={true}
                            value={this.state.noteContent}
                            onChangeText={(text) => this.setState({ noteContent: text })}
                        />
                    </ScrollView>
                </View>
                <View style={styles.bottomFooter}>
                    <View
                        style={{ width: '50%' }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name="plus-box-outline" size={30} style={{ marginLeft: 8, marginTop: 8 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', display: 'flex', alignItems: 'flex-end' }} >
                        <BottemPopUp
                            setColor={this.state.setColor}
                            onChangeColor={this.colorChange}
                            trashAndRestore={this.trashAndRestoreNotes}
                        />

                    </View>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({

    topFooter: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'deeppink',
    },

    bottomFooter: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#00ff00',
        backgroundColor: 'transparent'
    },

    mainNotecard: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '65%',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    iconButton2: {
        display: 'flex', width: '35%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent'

    }
});