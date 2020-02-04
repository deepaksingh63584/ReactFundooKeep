import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { setNoteInFireBase, updateNotesFromFireBase, trashAndRestore } from '../dashbordFirebaseDB';
import BottemPopUp from './BottomPopUp'
import SetReminder from './SetReminder';
import moment from 'moment';
import { Chip } from 'material-bread';

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
            reminderDate: this.Item === null ? '' : this.Item.reminderDate,
            reminderTime: this.Item === null ? '' : this.Item.reminderTime,


        };
    }

    colorChange = (color) => {
        this.setState({
            setColor: color
        })
    }

    trashAndRestoreNotes = (trash) => {
        trashAndRestore(this.Item.noteId, trash)
        this.props.navigation.navigate('Notes')
    }

    pushNotes = () => {
        if (this.Item === null) {
            if (this.state.noteTitle !== '' || this.state.noteContent !== '') {
                setNoteInFireBase(this.state.noteTitle, this.state.noteContent, this.state.pinStatus,
                    this.state.archive, this.state.setColor, this.state.Trash, this.state.reminderDate, this.state.reminderTime, () => {
                        this.props.navigation.navigate('Notes')
                    })
            }
            else {
                this.props.navigation.navigate('Notes')
            }
        }
        else {
            updateNotesFromFireBase(this.Item.noteId, this.state.noteTitle, this.state.noteContent, this.state.pinStatus,
                this.state.archive, this.state.setColor, this.state.Trash, this.state.reminderDate, this.state.reminderTime, () => {
                    this.props.navigation.navigate('Notes');
                })
            this.props.navigation.navigate('Notes')
        }
    }

    render() {
        // console.log('iiiiiiiiiiiiiiiiiii    ' + this.Item)
        // console.log('date-   ', this.state.reminderDate)
        // console.log('time-   ', this.state.reminderTime);

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

                    {this.state.Trash === true ? null :
                        <View
                            style={styles.iconButton2}>
                            <TouchableOpacity
                                onPress={() => this.setState({ pinStatus: !this.state.pinStatus })}>
                                <MaterialCommunityIcon name={!this.state.pinStatus ? "pin-outline" : "pin"} size={22} />
                            </TouchableOpacity>

                            <SetReminder
                                getDateTime={(date, time) => this.setState({
                                    reminderDate: moment(date).format(),
                                    reminderTime: time,
                                }, () =>
                                    console.log(date + ': kjk'))
                                }
                            />

                            <TouchableOpacity
                                onPress={() => this.setState({ archive: !this.state.archive })}>
                                <MaterialIcon name="archive" size={22} />
                            </TouchableOpacity>
                        </View>
                    }
                </View >
                <View style={{
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
                        {
                            this.Item !== '' ?
                                this.state.reminderTime !== '' &&
                                <View style={{ padding: 8 }}>
                                    <Chip
                                        text={moment(this.state.reminderDate).format('MMM D') + ', ' + this.state.reminderTime}
                                        chipStyle='outlined'
                                        onDelete={() => this.setState({
                                            reminderDate: '',
                                            reminderTime: ''
                                        })}
                                    />
                                </View>
                                :
                                this.props.reminderTime !== '' &&
                                <View style={{ padding: 8 }}>
                                    <Chip
                                        text={moment(this.props.reminderDate).format('MMM D') + ', ' + this.state.reminderTime}
                                        chipStyle='outlined'
                                        onDelete={() => this.setState({
                                            reminderDate: '',
                                            reminderTime: ''
                                        })}
                                    />
                                </View>

                        }
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
                            Trash={this.state.Trash}
                            setColor={this.state.setColor}
                            onChangeColor={this.colorChange}
                            trashAndRestore={this.trashAndRestoreNotes}
                            labelNavigation={this.props.navigation}
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
        display: 'flex',
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent'

    }
});