import React, { Component, useCallback } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
} from "react-native-chart-kit";
import TrashTopBar from "../TrashTopBar";
import { fetchNotesFromFireBase } from '../../dashbordFirebaseDB';

export default class ChartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesCount: {
                pinNotes: 0,
                unPinNotes: 0,
                reminderNotes: 0,
                archiveNotes: 0,
                trashNotes: 0,
            },
            datasets1: null,
            datasets2: null,
        };
        // console.log('all Props on chart page:', this.props);

    }

    getAllNotes = (callback) => {
        fetchNotesFromFireBase((snapObj) => {
            let Notes = []
            // console.log("fetchNotesFromFireBase notes:", snapObj);
            if (snapObj !== null && snapObj !== undefined) {
                Object.keys(snapObj).map((key) => {
                    snapObj[key].noteId = key
                    Notes.push(snapObj[key])
                })
                callback(Notes)
            }
        })
    }

    componentDidMount = () => {
        this.getAllNotes(key, (snapObj) => {
            let notesCount = {}
            notesCount['allNotes'] = Notes.length,
                notesCount['pinNotes'] = 0,
                notesCount['unPinNotes'] = 0,
                notesCount['archiveNotes'] = 0,
                notesCount['trashNotes'] = 0,
                notesCount['reminderNotes'] = 0
            if (snapObj[key].PinStatus === true && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                notesCount['pinNotes'] = notesCount['pinNotes'] + 1;
            }
            else if (snapObj[key].PinStatus === false && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                notesCount['unPinNotes'] = notesCount['unPinNotes'] + 1;
            }
            else if (snapObj[key].Archive === true && snapObj[key].Trash === false) {
                notesCount['archiveNotes'] = notesCount['archiveNotes'] + 1;
            }
            else if (snapObj[key].Trash === true) {
                notesCount['trashNotes'] = notesCount['trtrashNotesash'] + 1;
            }
            else if (snapObj[key].reminderTime !== '' && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                notesCount['reminderNotes'] = notesCount['reminderNotes'] + 1;
            }
            this.setState({
                notesCount: notesCount,
            })
        })
    }

    render() {
        console.log(this.state.notesCount, '-- Note count on charts');

        const data = {
            labels: ["AllNotes", "Pin", "UnPin", "Archive", "Trash", "Reminder"],
            datasets: [
                {
                    data: [
                        this.state.notesCount.allNotes,
                        this.state.notesCount.pinNotes,
                        this.state.notesCount.unPinNotes,
                        this.state.notesCount.archiveNotes,
                        this.state.notesCount.trashNotes,
                        this.state.notesCount.reminderNotes,
                    ]
                }
            ]
        };

        const data2 = [
            {
                name: "All Notes",
                count: this.state.notesCount.allNotes,
                notes: 4,
                color: "#b3ffb3",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Pin",
                count: this.state.notesCount.pinNotes,
                notes: 4,
                color: "#b3ffb3",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                count: this.state.notesCount.unPinNotes,
                name: "UnPinNotes",
                notes: 10,
                color: "#33001a",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                count: this.state.notesCount.archiveNotes,
                name: "Archive",
                notes: 2,
                color: "#809fff",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                count: this.state.notesCount.trashNotes,
                name: "Trash",
                notes: 2,
                color: "#79ff4d",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                count: this.state.notesCount.reminderNotes,
                name: "Reaminder",
                notes: 8,
                color: "red",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
        ];

        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5
        };

        const screenWidth = Dimensions.get("window").width;

        return (
            <View>
                <TrashTopBar {...this.props} />
                <ScrollView>
                    <Text style={{ fontSize: 24 }}>  Line Chart</Text>
                    < LineChart
                        data={data}
                        width={screenWidth}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        height={240}
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#001a0d",
                            backgroundGradientTo: "#ffa726",
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}

                    />
                    <Text style={{ fontSize: 24 }}>  Pie Chart</Text>
                    <PieChart
                        data={data2}
                        width={screenWidth}
                        height={245}
                        chartConfig={chartConfig}
                        accessor="count"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                    />

                    <Text style={{ fontSize: 24 }}>  Bar Chart</Text>
                    <BarChart
                        data={data}
                        width={screenWidth}
                        height={240}
                        chartConfig={{
                            backgroundGradientFrom: "#001a0d",
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16

                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </ScrollView>
            </View >
        );
    }
}