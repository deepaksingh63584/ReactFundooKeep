import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottemPopUp from './BottomPopUp'

export default class GridViewNotes extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <View style={[styles.mainNotecard, { backgroundColor: this.state.setColor }]}>
                <View style={styles.topFooter}>
                    <View
                        style={styles.iconButton}>
                        <TouchableOpacity>
                            <MaterialIcon name="keyboard-backspace" size={20} style={{ marginRight: 10, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
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
                            value={this.props.noteTitle}
                            onChangeText={(text) => this.setState({ noteTitle: text })}
                        />
                        <TextInput
                            style={{ fontSize: 17 }}
                            placeholder="Note"
                            multiline={true}
                            value={this.props.noteContent}
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
    },

    bottomFooter: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
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