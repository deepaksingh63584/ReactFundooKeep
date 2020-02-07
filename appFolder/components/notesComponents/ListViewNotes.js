import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Chip } from 'material-bread';
import moment from 'moment';

export default class ListViewNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        // console.log(this.props.listView);
        // console.log(",data",JSON.stringify(this.props));
        // console.log(JSON.stringify(this.props.Content));
        // console.log(this.props.lableId + '    ?a?    ' + this.props.Label);
        // console.log(this.props.reminderDate + "   chsdg    " + this.props.reminderTime);

        return (
            <ScrollView>
                <View style={{ height: '100%', width: '100%' }}>
                    <Card style={[this.props.listView ? styles.cardStyle2 : styles.cardStyle, { backgroundColor: this.props.Color }]}
                        onPress={() => this.props.notesProps.navigation.navigate('CreateNote', { 'item': this.props })}>
                        <Text style={styles.cardTitle}>{this.props.Title}</Text>
                        <Text style={{ padding: 10 }}>{this.props.Content}</Text>

                        {
                            this.props.reminderTime !== '' &&
                            <View style={{ padding: 8 }}>
                                <Chip
                                    text={moment(this.props.reminderDate).format('MMM D') + ', ' + this.props.reminderTime}
                                    chipStyle='outlined'
                                />
                            </View>
                        }

                        {
                            this.props.Label !== '' && this.props.Label !== undefined &&
                            Object.getOwnPropertyNames(this.props.Label).map((lableId) => (
                                <View style={{ padding: 8 }}>
                                    <Chip
                                        text={this.props.Label[lableId].labelName}
                                        chipStyle='outlined'
                                    />
                                </View>
                            ))
                        }
                    </Card>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 50,
    },
    cardStyle: {
        // width: "92%",
        marginTop: 12,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 8,
        borderColor: 'grey',
        // backgroundColor: 'pink'
    },

    cardStyle2: {
        // width: "92%",
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 8,
        borderColor: 'grey',
        // backgroundColor: 'pink'
    },
    cardTitle: {
        padding: 10,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center"
    }
});


