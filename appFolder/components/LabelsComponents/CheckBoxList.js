import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, CheckBox } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class CheckBoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnState: false,
            showpassword: false
        };
    }

    handleChange = async () => {
        await this.setState({
            btnState: !this.state.btnState,

        })
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
                        <Text
                            style={{ fontSize: 18, width: 350 }}>
                            {this.props.Label}
                        </Text>
                    </View>
                    <CheckBox
                        value={this.state.showpassword}
                        onChange={() => this.setState({ showpassword: !this.state.showpassword ? true : false })} />
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
        backgroundColor: '#ffffff',
    },

    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '65%',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

});
