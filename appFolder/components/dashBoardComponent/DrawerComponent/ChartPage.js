import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
} from "react-native-chart-kit";
import TrashTopBar from "../TrashTopBar";

export default class ChartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesCount: {
                allNotes: [],
                pinNotes: [],
                unPunNotes: [],
                labelNotes: [],
                archiveNotes: [],
                trashNotes: [],
            },
            datasets: null,
        };
    }



    render() {
        const data1 = {
            labels: ["AllNotes", "Notes", "Reminder", "labels", "Archive", "Trash"],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43]
                }
            ]
        };

        const data = [
            {
                name: "AllNotes",
                population: 21500000,
                color: "#ff66a3",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Notes",
                population: 6800000,
                color: "#b3ffb3",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Reaminder",
                population: 9277612,
                color: "red",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Labels",
                population: 8538000,
                color: "#33001a",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Archive",
                population: 11920000,
                color: "#809fff",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Trash",
                population: 11920000,
                color: "#79ff4d",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            }
        ]

        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `#000000, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5
        };

        const data2 = {
            labels: ["AllNotes", "Notes", "Reminder", "labels", "Archive", "Trash"],
            datasets: [
                {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                }
            ]
        }

        const screenWidth = Dimensions.get("window").width;

        return (
            <View style={{ height: '100%', width: '100%' }}>
                <TrashTopBar {...this.props} />
                <ScrollView>
                    <Text style={{ fontSize: 24 }}>  Line Chart</Text>
                    <LineChart
                        data={data2}
                        width={screenWidth}
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#001a0d",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
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
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                    />
                    <Text style={{ fontSize: 24 }}>  Bar Chart</Text>
                    <BarChart
                        data={data1}
                        width={screenWidth}
                        height={220}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                    />

                </ScrollView>
            </View>
        );
    }
}











































































































































































































































































































































// import React from 'react';
// import { View, Dimensions, Button } from 'react-native';
// import { PieChart } from "react-native-chart-kit";
// import Topbar from '../Dashboard/Topbar'
// import { Provider } from 'react-native-paper';
// import model from '../../../ModelServices/DashboardModel';
// import PushNotification from 'react-native-push-notification'

// export default class ChartPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.page = props.navigation.getParam('page')
//         this.state = {
//             //     notesCount: {
//             //         allNotes: 0,
//             //         pinNotes: 0,
//             //         unpinNotes: 0,
//             //         archive: 0,
//             //         trash: 0
//             //     },
//             //     dataset: null,
//             //     refresh: false,
//         };
//     }

//     // fetchAndCountNotes = () => {
//     //     model.getAllNotes(this.props.uid, (snap) => {
//     //         let notesCount = {};
//     //         notesCount['allNotes'] = snap.length;
//     //         notesCount['pinNotes'] = 0;
//     //         notesCount['unpinNotes'] = 0;
//     //         notesCount['archive'] = 0;
//     //         notesCount['trash'] = 0;
//     //         (snap).map((item) => {
//     //             if (item.Pin === true) {
//     //                 notesCount['pinNotes'] = notesCount['pinNotes'] + 1;
//     //             }
//     //             else if (item.Pin === false && item.Archive === false && item.Trash === false) {
//     //                 notesCount['unpinNotes'] = notesCount['unpinNotes'] + 1;
//     //             }
//     //             else if (item.Archive === true) {
//     //                 notesCount['archive'] = notesCount['archive'] + 1;
//     //             }
//     //             else if (item.Trash === true) {
//     //                 notesCount['trash'] = notesCount['trash'] + 1;
//     //             }
//     //         })

//     //         this.setState({ notesCount: notesCount },
//     //             () => {
//     //                 const data = [
//     //                     {
//     //                         name: 'All notes',
//     //                         count: this.state.notesCount.allNotes,
//     //                         population: 21500000,
//     //                         color: 'rgba(131, 167, 234, 1)',
//     //                         legendFontColor: '#7F7F7F',
//     //                         legendFontSize: 15,
//     //                     },
//     //                     {
//     //                         name: 'Pin notes',
//     //                         count: this.state.notesCount.pinNotes,
//     //                         population: 21500000,
//     //                         color: '#F00',
//     //                         legendFontColor: '#7F7F7F',
//     //                         legendFontSize: 15,
//     //                     },
//     //                     {
//     //                         name: 'Unpin notes',
//     //                         count: this.state.notesCount.unpinNotes,
//     //                         population: 21500000,
//     //                         color: 'lime',
//     //                         legendFontColor: '#7F7F7F',
//     //                         legendFontSize: 15,
//     //                     },
//     //                     {
//     //                         name: 'Archive notes',
//     //                         count: this.state.notesCount.archive,
//     //                         population: 21500000,
//     //                         color: 'salmon',
//     //                         legendFontColor: '#7F7F7F',
//     //                         legendFontSize: 15,
//     //                     },
//     //                     {
//     //                         name: 'Trash notes',
//     //                         count: this.state.notesCount.trash,
//     //                         population: 21500000,
//     //                         color: 'cyan',
//     //                         legendFontColor: '#7F7F7F',
//     //                         legendFontSize: 15,
//     //                     }
//     //                 ];
//     //                 this.setState({
//     //                     dataset: data
//     //                 })
//     //             })
//     //     })
//     // }

//     // refreshComponent = () => {
//     //     this.setState({
//     //         refresh: !this.state.refresh
//     //     }, () => console.log(this.state.refresh))
//     // }

//     // componentDidMount = () => {
//     //     this.fetchAndCountNotes()
//     // };

//     render() {

//         return (
//             <View style={styles3.container}>
//                 <Provider>
//                     <Topbar {...this.props} page={this.page} refreshComponent={this.refreshComponent} />
//                 </Provider>
//                 <View style={{ height: '90%' }}>
//                     {this.state.dataset !== null &&
//                         <PieChart
//                             data={this.state.dataset}
//                             width={Dimensions.get('window').width - 16}
//                             height={220}
//                             chartConfig={{
//                                 backgroundColor: '#1cc910',
//                                 backgroundGradientFrom: '#eff3ff',
//                                 backgroundGradientTo: '#efefef',
//                                 decimalPlaces: 2,
//                                 color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                                 style: {
//                                     borderRadius: 16,
//                                 },
//                             }}
//                             style={{
//                                 marginVertical: 8,
//                                 borderRadius: 16,
//                             }}
//                             accessor="count"
//                             backgroundColor="transparent"
//                             paddingLeft="15"
//                             absolute //for the absolute number remove if you want percentage
//                         />
//                     }
//                 </View>
//                 <Button title={'click'}
//                 // onPress={
//                 //     () => {
//                 //         PushNotification.localNotificationSchedule({
//                 //             //... You can use all the options from localNotifications
//                 //             message: "My Notification Message", // (required)
//                 //             date: new Date(Date.now() + 60 * 1000) // in 60 secs
//                 //         });
//                 //     }
//                 // }
//                 />

//             </View>
//         );
//     }
// }

