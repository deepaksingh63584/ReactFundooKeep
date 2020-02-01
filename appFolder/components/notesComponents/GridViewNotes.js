import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';

export default class GridViewNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        // console.log(",data",JSON.stringify(this.props));
        // console.log(JSON.stringify(this.props.Content));
        // console.log(this.props.listView);

        return (
            <ScrollView>
                <View>
                    <View>
                        <Card style={[styles.cardStyle, { backgroundColor: this.props.Color }]}
                            onPress={() => this.props.notesProps.navigation.navigate('CreateNote', { 'item': this.props })}>
                            <Text style={styles.cardTitle}>{this.props.Title}</Text>
                            <Text style={{ padding: 10 }}>{this.props.Content}</Text>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },

    cardStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: "90%",
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 8,
        borderColor: 'grey',
        backgroundColor: 'pink'
    },

    cardTitle: {
        padding: 8,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center"
    }
});