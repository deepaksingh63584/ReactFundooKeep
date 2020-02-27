// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { fetchNotesFromFireBase } from '../dashbordFirebaseDB';

// export default class DisplayNotes extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pinNotes: [],
//             unPinNotes: [],
//             loading: true,
//             listView: true,
//             pinCount: 0,
//             unPinCount: 0,
//             list: 1,
//             Notes: []
//         };
//     }

//     displayNotes = () => {
//         fetchNotesFromFireBase((snapObj) => {
//             // console.log("fetchNotesFromFireBase notes:", snapObj);
//             let pinNotes = []
//             let unPinNotes = []
//             if (snapObj !== null && snapObj !== undefined) {
//                 Object.getOwnPropertyNames(snapObj).map((key, index) => {
//                     snapObj[key].noteId = key
//                     if (snapObj[key].PinStatus === true && snapObj[key].Archive === false && snapObj[key].Trash === false) {
//                         pinNotes.push(snapObj[key])
//                     }
//                     else if (snapObj[key].PinStatus === false && snapObj[key].Archive === false && snapObj[key].Trash === false) {
//                         unPinNotes.push(snapObj[key])
//                     }
//                 })
//             }
//             this.setState({
//                 pinNotes: pinNotes.reverse(),
//                 unPinNotes: unPinNotes.reverse(),
//             }, () => {
//                 // console.log('pinNotes' + pinNotes);
//                 // console.log('UNpinned Notes' + JSON.stringify(unPinNotes));
//                 this.setState({
//                     loading: false,
//                 })
//             })
//         })
//     }

//     trashNotesDisplay = () => {
//         trashNotes((snapObj) => {
//             let Notes = []
//             if (snapObj !== null && snapObj !== undefined) {
//                 Object.getOwnPropertyNames(snapObj).map((key, index) => {
//                     if (snapObj[key].Trash === true) {
//                         snapObj[key].noteId = key
//                         Notes.push(snapObj[key])
//                         //Notes[Count++].noteId = key
//                     }
//                 })
//                 this.setState({ Notes: Notes })
//             }
//         })
//     }

//     displayReminderNotes = () => {
//         fetchNotesFromFireBase((snapObj) => {
//             let Notes = []
//             if (snapObj !== null && snapObj !== undefined) {
//                 Object.getOwnPropertyNames(snapObj).map((key, index) => {
//                     if (snapObj[key].reminderTime !== '') {
//                         snapObj[key].noteId = key
//                         Notes.push(snapObj[key])

//                     }
//                 })
//                 this.setState({ Notes: Notes })
//             }
//         })
//     }

//     archiveNotesDisplay = () => {
//         archiveNotes((snapObj) => {
//             let Notes = []
//             if (snapObj !== null && snapObj !== undefined) {
//                 Object.getOwnPropertyNames(snapObj).map((key, index) => {
//                     if (snapObj[key].Archive === true && snapObj[key].Trash === false) {
//                         snapObj[key].noteId = key
//                         Notes.push(snapObj[key])
//                         this.props.navigation.navigate('Notes')
//                     }

//                 })
//                 this.setState({ Notes: Notes })
//             }
//         })
//     }

//     componentDidMount = () => {

//     };


//     render() {
//         return (
//             <View>
//                 <View>
//                     <TopBar {...this.props}
//                         listView={this.state.listView}
//                         viewChange={this.viewChange}
//                     />
//                 </View>
//                 <Text> DisplayNotes </Text>
//             </View>
//         );
//     }
// }


import React from 'react';
import { View, Text } from 'react-native';
let SQLite = require('react-native-sqlite-storage')
import TopBar from '../dashBoardComponent/topAppBar'


// const Database = SQLite.openDatabase({ name: 'www/sqlite.db', createFromLocation: 'www/-sqlitedp' }, (success) => ({
// }))
export default class Sqlite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View>
                    <TopBar {...this.props}
                        listView={this.state.listView}
                        viewChange={this.viewChange}
                    />
                </View>
                <Text> Sqlite DB </Text>
            </View>
        );
    }
}




// export default class HomeScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             sqliteData: [],
//         };
//         let db = SQLite.openDatabase({ name: 'www/sqlite.db', createFromLocation: "~test.db", location: 'Library' }, this.openCB, this.errorCB);
//         db.transaction((tx) => {
//             tx.executeSql('SELECT * FROM testTable', [], (tx, results) => {
//                 var len = results.rows.length;
//                 var rows = []
//                 for (var i = 0; i < len.length; i++) {
//                     var row = results.rows.item(i);
//                     rows.push(row)
//                     console.log(row + row.userName)
//                 }
//                 this.setState({ sqliteData: rows });
//             })
//         })
//     }

//     errorCB(err) {
//         console.log("SQL Error: " + err);
//     }

//     successCB() {
//         console.log("SQL executed fine");
//     }

//     openCB() {
//         console.log("Database OPENED");
//     }

//     render() {
//         return (
//             <Flatlist>--showing all items--</Flatlist>
//         )
//     }

// }