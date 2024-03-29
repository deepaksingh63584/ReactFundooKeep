import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider } from 'react-native-paper';
import { getLabel } from '../LabelsDataBase';

export default class DrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelValue: null,
        };
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
        // console.log('LabelValue    ', this.state.labelValue);
        return (
            <ScrollView>
                <View style={styles.drawerTitle}>
                    <Text style={{ color: '#4325F4', fontSize: 23 }}>F</Text>
                    <Text style={{ color: '#DB4437', fontSize: 23 }}>u</Text>
                    <Text style={{ color: '#F4B400', fontSize: 23 }}>n</Text>
                    <Text style={{ color: '#4235F4', fontSize: 23 }}>d</Text>
                    <Text style={{ color: '#0F9D58', fontSize: 23 }}>o</Text>
                    <Text style={{ color: '#DB4437', fontSize: 23 }}>o</Text>
                    <Text style={{ color: 'grey', fontSize: 23 }}> Notes</Text>
                </View>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Notes')}>
                    <View

                        style={styles.iconButton}>
                        <MaterialIcon name="lightbulb-outline" size={30} />
                        <Text style={styles.textField}>Notes</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Reminder')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="bell-outline" size={30} />
                        <Text style={styles.textField}>Reminder</Text>
                    </View>
                </TouchableHighlight>

                <Divider style={{ borderBottomColor: 'grey', borderBottomWidth: .3 }} />
                {
                    this.state.labelValue !== null &&
                    (this.state.labelValue).map(text => (
                        <TouchableHighlight underlayColor='#feefc3'
                            onPress={() => this.props.navigation.navigate('LabelContent', { 'lableId': text.lableId })}>
                            <View
                                style={styles.iconButton}>
                                <MaterialCommunityIcon name="label-outline" size={30} />
                                <Text style={styles.textField}>{text.Label}</Text>
                            </View>
                        </TouchableHighlight>
                    ))
                }
                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Label')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="plus" size={30} />
                        <Text style={styles.textField}>Create new Notes</Text>
                    </View>
                </TouchableHighlight>

                <Divider style={{ borderBottomColor: 'grey', borderBottomWidth: .3 }} />

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Archive')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialIcon name="archive" size={30} />
                        <Text style={styles.textField}>Archive</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Trash')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="trash-can-outline" size={30} />
                        <Text style={styles.textField}>Trash</Text>
                    </View>
                </TouchableHighlight>

                <Divider />
                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('ChartPage')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="chart-pie" size={30} />
                        <Text style={styles.textField}>Charts</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Notes')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="settings-outline" size={30} />
                        <Text style={styles.textField}>settings</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Notes')}>
                    <View
                        style={styles.iconButton}>
                        <AntIcon name="questioncircleo" size={30} />
                        <Text style={styles.textField}>Help & feedback</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('DragableNotes')}>
                    <View
                        style={styles.iconButton}>
                        <AntIcon name="dropbox" size={30} />
                        <Text style={styles.textField}>Drag & Drop</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('ImageLoading')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="folder-multiple-image" size={30} />
                        <Text style={styles.textField}>Image Loading</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('SqliteDB')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="database" size={30} />
                        <Text style={styles.textField}>Sqlite DB</Text>
                    </View>
                </TouchableHighlight>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    drawerTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,/*  */
        marginBottom: 15,
        marginLeft: 15,
        opacity: .75
    },
    textField: {
        display: 'flex',
        fontSize: 18,
        marginLeft: 12

    },
})