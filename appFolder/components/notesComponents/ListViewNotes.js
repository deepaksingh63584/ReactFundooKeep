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
        // console.log('hsajkx ==== notelevel==', this.props.NoteLabel);

        return (
            <ScrollView>
                <View style={{ height: '100%', width: '100%' }}>
                    <Card style={[this.props.listView ? styles.cardStyle2 : styles.cardStyle, { backgroundColor: this.props.Color }]}
                        onPress={() => this.props.notesProps.navigation.navigate('CreateNote', { 'item': this.props })}
                    // onLongPress={drag}
                    >
                        <Text style={styles.cardTitle}>{this.props.Title}</Text>
                        <Text style={{ padding: 10 }}>{this.props.Content}</Text>
                        <View style={{ padding: 12, flexWrap: 'wrap', flexDirection: 'row', }}>
                            {
                                this.props.reminderTime !== '' &&
                                <Chip
                                    text={moment(this.props.reminderDate).format('MMM D') + ', ' + this.props.reminderTime}
                                    chipStyle='outlined'
                                />
                            }

                            {
                                this.props.NoteLabel !== null && this.props.NoteLabel !== undefined &&
                                Object.getOwnPropertyNames(this.props.NoteLabel).map((lableId) => (
                                    <Chip
                                        text={this.props.NoteLabel[lableId].LabelName}
                                        chipStyle='outlined'
                                    />
                                ))
                            }
                        </View>
                    </Card>
                </View >
            </ScrollView >
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


