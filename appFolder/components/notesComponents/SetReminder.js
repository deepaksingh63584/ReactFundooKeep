import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dialog } from 'material-bread';
import { Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'


export default class SetReminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            datePicker: false,
            timePicker: false,
            reminderDate: moment().format('MMM DD, YYYY'),
            reminderTime: moment().format('h:mm a')

        };
    }

    handleOpen = () => {
        this.setState({ visible: true })
    }
    handleClose = () => {
        this.setState({ visible: false })
    }


    render() {
        console.log('date remin-   ', this.state.reminderDate)
        console.log('time remin-   ', this.state.reminderTime);
        console.log(this.props)

        const renderDatePicker = (

            <DateTimePicker
                isVisible={this.state.datePicker}
                mode='date'
                onConfirm={(date) => this.setState({
                    reminderDate: moment(date).format('MMM DD, YYYY'),
                    datePicker: false
                })}
                onCancel={() => this.setState({ datePicker: false })}
            />
        );

        const renderTimePicker = (
            <DateTimePicker
                isVisible={this.state.timePicker}
                mode='time'
                onConfirm={(time) => this.setState({
                    reminderTime: moment(time).format('h:mm a'),
                    timePicker: false
                })}
                onCancel={() => this.setState({ timePicker: false })}
            />
        );

        const renderDialog = (
            <Dialog
                visible={this.state.visible}
                onTouchOutside={this.handleClose}
                title={'add Reminder'}
                style={{
                    width: 400
                }}
            >
                <View>
                    <TouchableOpacity
                        onPress={() => this.setState({ datePicker: true })}
                    >
                        <View style={styles.dateStyle}>
                            <Text style={{ fontSize: 18 }}>
                                {this.state.reminderDate}
                            </Text>
                            <View>
                                <MaterialIcon
                                    name="arrow-drop-down"
                                    size={25}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity
                        onPress={() => this.setState({ timePicker: true })}
                    >
                        <View style={styles.dateStyle}>
                            <Text style={{ fontSize: 18 }}>
                                {this.state.reminderTime}
                            </Text>
                            <View>
                                <MaterialIcon
                                    name="arrow-drop-down"
                                    size={25}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonIcon}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            type="clear"
                            onPress={this.handleClose}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Save"
                            type="clear"
                            onPress={() => {
                                this.props.getDateTime(this.state.reminderDate, this.state.reminderTime)
                                this.handleClose()
                            }
                            }
                        />
                    </View>
                </View>
            </Dialog>
        );

        return (
            <>
                <TouchableOpacity onPress={this.handleOpen}>
                    <MaterialCommunityIcon name="bell-plus-outline" size={22} />
                </TouchableOpacity>
                {renderDialog}
                {renderDatePicker}
                {renderTimePicker}
            </>
        );
    }
}

const styles = StyleSheet.create({

    dateStyle: {
        display: 'flex',
        marginTop: 15,
        width: "100%",
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    buttonIcon: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',


    },
    button: {
        width: '25%',
        // marginRight: 18,
    }

});
