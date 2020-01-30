import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dialog } from 'material-bread';
import { View, Button } from 'native-base';

export default class SetReminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    handleOpen = () => {
        this.setState({ visible: true })
    }
    handleClose = () => {
        this.setState({ visible: false })
    }

    render() {

        const renderDialog = (
            <Dialog
                visible={this.state.visible}
                onTouchOutside={this.handleClose}
                title={'add Reminder'}
                style={{
                    width: 400
                }}

            >
                <View style={styles.dateStyle}>
                    <TouchableOpacity
                        Style={styles.dateStyle}>
                        <Text>
                            current date
                        </Text>
                        <MaterialIcon
                            name="arrow-drop-down"
                            size={22}
                            style={{
                                justifyContent: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.dateStyle}>
                    <Text Style={{}}>
                        current TIME
                    </Text>
                    <MaterialIcon
                        name="arrow-drop-down"
                        size={22}
                        style={{
                            justifyContent: 'flex-end'
                        }}
                    />
                </View>
                <View style={styles.buttonIcon}>
                    <Button style={{ marginRight: 28, }}>
                        <Text>Cancle</Text>
                    </Button>
                    <Button style={{ marginRight: 28, }}>
                        <Text>Save</Text>
                    </Button>

                </View>

            </Dialog>
        );

        return (
            <>
                <TouchableOpacity onPress={this.handleOpen}>
                    <MaterialCommunityIcon name="bell-plus-outline" size={22} />
                </TouchableOpacity>
                {renderDialog}
            </>
        );
    }
}

const styles = StyleSheet.create({

    dateStyle: {
        marginTop: 10,
        width: 350,
        backgroundColor: '#cc3399',
        padding: 10,

    },

    buttonIcon: {
        backgroundColor: '#ffff66',
        marginTop: 18,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 25,

    }

});
