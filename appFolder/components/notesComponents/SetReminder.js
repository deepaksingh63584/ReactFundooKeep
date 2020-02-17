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
            reminderDate: new Date(),
            reminderTime: new Date(),
            date: '',
            time: '',
            dateTime: '',
            displayDateTime: ''

        };
    }

    handleOpen = () => {
        this.setState({ visible: true })
    }
    handleClose = () => {
        this.setState({ visible: false })
    }

    handleDateTime = () => {
        let displayDate = this.state.date + this.state.time
        let displayDateTime = new Date(displayDate);
        // console.log(displayDateTime, 'sdasfd date time');
        this.setState({ displayDateTime: displayDateTime }, () => {
            this.props.getDateTime(moment(this.state.reminderDate).format('MMM DD, YYYY'),
                moment(this.state.reminderTime).format('h:mm a'), this.state.displayDateTime)
        })
    }


    render() {
        // console.log('date remin-   ', this.state.reminderDate)
        // console.log('time remin-   ', this.state.reminderTime);
        // console.log(this.props)

        const renderDatePicker = (

            <DateTimePicker
                isVisible={this.state.datePicker}
                mode='date'
                onConfirm={(date) =>
                    // console.log('date on render', date),
                    this.setState({
                        reminderDate: date,
                        datePicker: false,

                    }, () => {
                        let dateData = JSON.stringify(this.state.reminderDate)
                        let date1 = dateData.slice(1, 11)
                        // console.log(date1, '--date 1--');
                        this.setState({
                            date: date1
                        })
                    })

                }
                onCancel={() => this.setState({ datePicker: false })}
            />
        );

        const renderTimePicker = (
            <DateTimePicker
                isVisible={this.state.timePicker}
                mode='time'
                onConfirm={(time) =>
                    // console.log('time on render', time),
                    this.setState({
                        reminderTime: time,
                        timePicker: false
                    }, () => {
                        let timeData = JSON.stringify(this.state.reminderTime)
                        let time1 = timeData.slice(11, 25)
                        // console.log(time1, '--time 1--');
                        this.setState({
                            time: time1
                        })
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
                                {moment(this.state.reminderDate).format('MMM DD, YYYY')}
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
                                {moment(this.state.reminderTime).format('h:mm a')}
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
                                this.handleDateTime(),
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






// PushNotification.localNotificationSchedule({
        //     message: "Local notofication push message", // (required)
        //     date: new Date(Date.now() + 60 * 1000) // in 60 secs
        // });
