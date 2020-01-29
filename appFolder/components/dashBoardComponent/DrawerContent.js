import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider } from 'react-native-paper';

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
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
                <Divider />
                <TouchableHighlight underlayColor='#feefc3'
                    onPress={() => this.props.navigation.navigate('Label')}>
                    <View
                        style={styles.iconButton}>
                        <MaterialCommunityIcon name="plus" size={30} />
                        <Text style={styles.textField}>Create new Notes</Text>
                    </View>
                </TouchableHighlight>
                <Divider />
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
                        <Text style={styles.textField}>settings</Text>
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
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15
    },
    textField: {
        display: 'flex',
        fontSize: 18,
        marginLeft: 12

    },
})