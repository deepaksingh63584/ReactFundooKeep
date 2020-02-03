import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'


export default class CreateLable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnState: false,
        };
    }

    handleChange = async () => {
        await this.setState({
            btnState: !this.state.btnState,

        })
        console.log("value if kist vieee==>", this.state.listView);

    }

    render() {
        return (
            <View style={styles.topFooter}>
                <View
                    style={styles.iconButton}>
                    <TouchableOpacity
                        onPress={this.handleChange}>
                        <MaterialCommunityIcon name={!this.state.btnState ? "label-outline" : "trash-can-outline"}
                            size={25} style={{ marginRight: 20, marginLeft: 10 }} />
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
                        onPress={this.handleChange}>
                        <MaterialCommunityIcon name={!this.state.btnState ? "pencil-outline" : "check"}
                            size={25} style={{ marginRight: 20, marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    topFooter: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'deeppink',
    },

    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '65%',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

});

