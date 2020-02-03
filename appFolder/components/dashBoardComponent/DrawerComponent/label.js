import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'material-bread';

export default class Lable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnState: false,
        };
    }

    render() {
        return (
            <View style={{ height: '100%', width: '100%', backgroundColor: '#ddffcc' }}>
                <View style={styles.topFooter}>
                    <View
                        style={styles.iconButton}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <MaterialIcon name="keyboard-backspace" size={20} style={{ marginRight: 25, marginLeft: 15 }} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 20 }}>
                                Edits labels
                        </Text>
                        </View>
                    </View>
                </View>
                <Divider style={{ borderBottomColor: 'grey', borderBottomWidth: 1, }} />
                <View style={styles.topFooter}>
                    <View
                        style={styles.iconButton}>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                btnState: false
                            })}>
                            <MaterialIcon name={!this.state.btnState ? "close" : "add"} size={25} style={{ marginRight: 20, marginLeft: 10 }} />
                        </TouchableOpacity>
                        <View>
                            <TextInput
                                style={{ fontSize: 18, width: 350 }}
                                placeholder="Create new labels "
                                multiline={true}
                                maxLength={50}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={(e) => this.setState({
                                btnState: false
                            })}>
                            <MaterialIcon name="check" size={30} style={{ marginRight: 20, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Divider style={{ borderBottomColor: 'grey', borderBottomWidth: 1, }} />

            </View>
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

    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '65%',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

});
