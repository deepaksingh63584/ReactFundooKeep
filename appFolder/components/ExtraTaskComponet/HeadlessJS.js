import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HeadlessJS extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> HeadlessJS </Text>
            </View>
        );
    }
}



const SQLite = require('react-native-sqlite-storage')
import { fetchUserData } from '../logInComponents/logInFireBase';

const db = SQLite.openDatabase({ name: 'www/sqlite', createFromLocation: "www/~sqlite.db" }, (successT) => {
    console.log("success while opening db tttttttttt....", successT);

}, (errorT) => {
    console.log("error while opening db.....", errorT);

})

class SQLiteDataModel {

    constructor() {
        SQLite.DEBUG(true);
        SQLite.enablePromise(true);
    }//end of constructor

    syncUserData() {

        var USER_TABLE = "CREATE TABLE if not exists USER";
        USER_TABLE = USER_TABLE + " ( uid TEXT ,";
        USER_TABLE = USER_TABLE + "fName TEXT, ";
        USER_TABLE = USER_TABLE + "lName TEXT, ";
        USER_TABLE = USER_TABLE + "email TEXT, ";
        USER_TABLE = USER_TABLE + "profilePic TEXT )";

        fetchUserData(async (users) => {
            console.log("users in model....", users);
            if (users !== null) {
                console.log("if user is not nullllllllllllllllll");

                await db.transaction(async tx => {
                    console.log("insodre tansdafasdflkdsfkl");

                    await tx.executeSql('drop table if exists USER', [], (transcat, resultSet) => {
                        console.log("USER Table deleted successfully....");
                    })

                })//end of transcation

                await db.transaction(async tx => {
                    await tx.executeSql(USER_TABLE, [], (t2, resultSet2) => {
                        console.log("USER table created successfully");

                    })
                })

                await db.transaction(async tx => {
                    await Object.keys(users).forEach(async (userId, index) => {
                        console.log("in object keys.....");

                        await tx.executeSql('INSERT INTO USER (uid, fName, lName, email,profilePic) VALUES (?,?,?,?,?)',
                            [userId, users[userId].fName, users[userId].lName, users[userId].email, users[userId].profilePic === undefined ? null : users[userId].profilePic],
                            (transcat, resultSet) => {

                                console.log("Data inserted for user id", userId);

                            }
                        )
                    })
                })

                await db.transaction(async tx => {
                    await tx.executeSql('select * from USER', [], (transcat, resultSet) => {

                        console.log("resultSet...", resultSet.rows.item);
                        var len = resultSet.rows.length;

                        for (let i = 0; i < len; i++) {
                            let row = resultSet.rows.item(i);
                            console.log(`Uid : ${row.uid}, First Name: ${row.fName}, Last Name : ${row.lName},Email : ${row.email} ,ProfilePic : ${row.profilePic}`);
                        }
                    })
                })

            }
        })
    }
}
const obj = new SQLiteDataModel();
export default obj;


const SQLite = require('react-native-sqlite-storage')
import { getAllUserData, getUserData, getAllNotes } from './firebaseServices';

const db = SQLite.openDatabase({ name: 'testDB', createFromLocation: "~testDB.db" }, (successT) => {
    // console.log("success while opening db tttttttttt....",successT);

}, (errorT) => {
    // console.log("error while opening db.....",errorT);

})

class SQLiteDataModel {

    constructor() {
        // SQLite.DEBUG(true);
        // SQLite.enablePromise(true);
    }//end of constructor

    syncUserData() {

        var USER_TABLE = "CREATE TABLE if not exists USER";
        USER_TABLE = USER_TABLE + " ( uid TEXT ,";
        USER_TABLE = USER_TABLE + "fName TEXT, ";
        USER_TABLE = USER_TABLE + "lName TEXT, ";
        USER_TABLE = USER_TABLE + "email TEXT, ";
        USER_TABLE = USER_TABLE + "profilePic TEXT )";

        getAllUserData(async (users) => {
            // console.log("users in model....",users);
            if (users !== null) {
                // console.log("if user is not nullllllllllllllllll");

                await db.transaction(async tx => {
                    // console.log("insodre tansdafasdflkdsfkl");

                    await tx.executeSql('drop table if exists USER', [], (transcat, resultSet) => {
                        //  console.log("USER Table deleted successfully....");
                    })

                })//end of transcation

                await db.transaction(async tx => {
                    await tx.executeSql(USER_TABLE, [], (t2, resultSet2) => {
                        // console.log("USER table created successfully");

                    })
                })

                await db.transaction(async tx => {
                    await Object.keys(users).forEach(async (userId, index) => {
                        // console.log("in object keys.....");

                        await tx.executeSql('INSERT INTO USER (uid, fName, lName, email,profilePic) VALUES (?,?,?,?,?)',
                            [userId, users[userId].fName, users[userId].lName, users[userId].email, users[userId].profilePic === undefined ? null : users[userId].profilePic],
                            (transcat, resultSet) => {

                                // console.log("Data inserted for user id",userId);

                            }
                        )
                    })
                })

                await db.transaction(async tx => {
                    await tx.executeSql('select * from USER', [], (transcat, resultSet) => {

                        // console.log("resultSet...",resultSet.rows.item);
                        var len = resultSet.rows.length;

                        for (let i = 0; i < len; i++) {
                            let row = resultSet.rows.item(i);
                            // console.log(`Uid : ${row.uid}, First Name: ${row.fName}, Last Name : ${row.lName},Email : ${row.email} ,ProfilePic : ${row.profilePic}`);
                        }
                    })
                })

            }
        })

    }//end of syncUserData

    //when login is done load notes data....
    async syncNotesData(notesSchemaKey, uid) {
        var NOTE_TABLE = "CREATE TABLE if not exists NOTES";
        NOTE_TABLE = NOTE_TABLE + " ( noteId TEXT,";
        NOTE_TABLE = NOTE_TABLE + "uid TEXT, ";
        NOTE_TABLE = NOTE_TABLE + "noteTitle TEXT, ";
        NOTE_TABLE = NOTE_TABLE + "noteData TEXT, ";
        NOTE_TABLE = NOTE_TABLE + "notePin TEXT, ";
        NOTE_TABLE = NOTE_TABLE + "noteArchive TEXT, ";
        NOTE_TABLE = NOTE_TABLE + "noteTrash TEXT, ";
        // USER_TABLE = USER_TABLE + "noteLabel TEXT, ";
        // USER_TABLE = USER_TABLE + "noteReminder TEXT, ";
        NOTE_TABLE = NOTE_TABLE + "noteColor TEXT)";

        await db.transaction(async tx => {
            tx.executeSql('drop table if exists NOTES', [])
        })

        await db.transaction(async tx => {
            tx.executeSql(NOTE_TABLE, [], (transcat, resultSet) => {
                // console.log("NOtes Talbe created successfully......");

            })
        })

        await getAllNotes(notesSchemaKey, async (notes) => {
            // console.log("getAllNotes..................",notes);

            if (notes !== null) {
                // console.log("if notes is not null null null null null null null null");

                await db.transaction(async tx => {
                    await Object.keys(notes).forEach(async (noteId, index) => {
                        // console.log("in object keys.....");

                        await tx.executeSql('INSERT INTO NOTES (noteId, uid, noteTitle, noteData,notePin,noteArchive,noteTrash,noteColor) VALUES (?,?,?,?,?,?,?,?)',
                            [noteId, uid, notes[noteId].noteTitle, notes[noteId].noteData, notes[noteId].notePin, notes[noteId].noteArchive, notes[noteId].noteTrash === undefined ? null : notes[noteId].noteTrash, notes[noteId].noteColor === undefined ? null : notes[noteId].noteColor],
                            (transcat, resultSet) => {

                                // console.log("Data inserted for notesssssssssssss id",noteId);

                            }
                        )
                    })
                })

            }
        })
        await db.transaction(async tx => {
            await tx.executeSql('select * from NOTES', [], (transcat, resultSet) => {

                // console.log("resultSet...",resultSet.rows.item);
                var len = resultSet.rows.length;
                // console.log("NOTES TABLE...........");

                for (let i = 0; i < len; i++) {
                    let row = resultSet.rows.item(i);
                    // console.log(`NoteId : ${row.noteId}, Uid : ${row.uid}, NoteTitle : ${row.noteTitle},NoteData : ${row.noteData} ,NotePin : ${row.notePin},NoteArchive :${row.noteArchive},NoteColor : ${row.noteColor}`);
                }
            })
        })

    }

    //when logout delete notes table
    deleteNotesTable = () => {
        var NOTES_TABLE = "drop table if exist NOTES";

        db.transaction(tx => {
            tx.executeSql(NOTES_TABLE, [])
        })
    }

    getUserData(callback) {
        // console.log("inside getUserData..........");

        db.transaction(async tx => {
            // console.log("inside db1 transaction........");

            await tx.executeSql('select * from USER', [], (transcat, resultSet) => {
                var userArray = []
                // console.log("resultSet...",resultSet.rows.item);
                var len = resultSet.rows.length;

                for (let i = 0; i < len; i++) {
                    let obj = {};
                    let row = resultSet.rows.item(i);
                    obj.uid = row.uid;
                    obj.fName = row.fName;
                    obj.lName = row.lName;
                    obj.email = row.email;
                    obj.profilePic = row.profilePic === undefined ? null : row.profilePic;
                    userArray.push(obj);
                    // console.log(`Uid : ${row.uid}, First Name: ${row.fName}, Last Name : ${row.lName},Email : ${row.email} ,ProfilePic : ${row.profilePic}`);
                }
                callback(userArray);
            })
        })
    }
    getNotesData(callback) {
        // console.log("inside getUserData..........");

        db.transaction(async tx => {
            // console.log("inside db1 transaction........");

            await tx.executeSql('select * from NOTES', [], (transcat, resultSet) => {
                var notesArray = []
                // console.log("resultSet...",resultSet.rows.item);
                var len = resultSet.rows.length;

                for (let i = 0; i < len; i++) {
                    let obj = {};
                    let row = resultSet.rows.item(i);
                    obj.noteId = row.noteId;
                    obj.noteTitle = row.noteTitle;
                    obj.noteData = row.noteData;
                    obj.notePin = row.notePin;
                    obj.noteArchive = row.noteArchive;
                    obj.noteTrash = row.noteTrash === undefined && row.noteTrash === null ? null : row.noteTrash;
                    obj.noteColor = row.noteColor === undefined && row.noteColor === null ? null : row.noteColor;
                    notesArray.push(obj);
                    // console.log(`Uid : ${row.uid}, First Name: ${row.fName}, Last Name : ${row.lName},Email : ${row.email} ,ProfilePic : ${row.profilePic}`);
                }
                callback(notesArray);
            })
        })
    }
}//end of class

const obj = new SQLiteDataModel();
export default obj;
