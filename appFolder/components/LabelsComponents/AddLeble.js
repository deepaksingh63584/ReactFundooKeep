import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { createLabel, getLabel } from '../LabelsDataBase';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBoxList from './CheckBoxList';

export default class AddLabel extends React.Component {
    constructor(props) {
        super(props);
        this.noteObj = props.navigation.getParam('noteObj', null)
        this.state = {
            btnState: false,
            labelValue: [],
            labelName: '',
            noteId: props.navigation.getParam('noteId', null)

        };
    }

    handleChange = async () => {
        await this.setState({
            btnState: !this.state.btnState,

        })
    }

    componentDidMount = () => {
        getLabel((labelValue) => {
            let labelObj = []
            if (labelValue !== null && labelValue !== undefined) {
                Object.getOwnPropertyNames(labelValue).map((key, index) => {
                    labelValue[key].lableId = key
                    labelObj.push(labelValue[key])
                })
            }
            this.setState({
                labelValue: labelObj.reverse(),
            })
        })
    }

    render() {
        return (
            <View style={{ height: '100%', width: '100%', backgroundColor: '#ffffff' }} >
                <View style={styles.topFooter}>
                    <View style={styles.topFooter}>
                        <View
                            style={styles.iconButton}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}>
                                <MaterialIcon name="keyboard-backspace" size={20} style={{ marginRight: 25, marginLeft: 15, opacity: .5 }} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    createLabel(this.state.labelName)
                                    this.setState({
                                        labelName: ''
                                    })
                                }}>
                                <TextInput
                                    style={{ fontSize: 18, width: 400 }}
                                    placeholder="Enter label name "
                                    multiline={true}
                                    maxLength={50}
                                    value={this.state.labelName}
                                    onChangeText={(text) => this.setState({ labelName: text })}
                                />
                            </TouchableOpacity >
                        </View>
                    </View>
                </View>
                <FlatList
                    data={this.state.labelValue}
                    renderItem={({ item }) => <CheckBoxList {...item} noteId={this.state.noteId} noteObj={this.noteObj} />}
                />
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
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1
    },

    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

});
