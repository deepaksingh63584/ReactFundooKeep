import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, CheckBox, Button } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { addLabelsInNote, removeLabelsInNote, getDesireNote } from '../LabelsDataBase'

export default function CheckBoxList(props) {

    const [state, setState] = useState({
        check: false
    })

    useEffect(() => {
        // console.log('agsdfssah', props);
        // console.log('note obj ====== ', props.labelId);
        if (props.noteObj !== null && props.noteObj !== undefined) {
            getDesireNote(props.noteObj.noteId, (note) => {
                if (note.NoteLabel !== null && note.NoteLabel !== undefined) {
                    // console.log('notelabel')
                    Object.getOwnPropertyNames(note.NoteLabel).map((key) => (
                        key === props.lableId &&
                        setState({
                            check: true
                        })
                    ))
                }
                else {
                    setState({
                        check: false
                    })
                }
            })
        }
    }, [state.check])

    const findLevelNoteId = (callback) => {
        if (props.LabelNote !== null && props.LabelNote !== undefined) {
            Object.getOwnPropertyNames(props.LabelNote).map((key) => {
                if (props.LabelNote[key].NoteId === props.noteId) {
                    callback(key)
                }
            })
        }
    }

    const checkBoxOnPress = () => {
        if (!state.check) {
            if (props.noteObj !== null && props.noteObj !== undefined) {
                addLabelsInNote(props.noteId, props.lableId, props.Label)
            }
        }
        else {
            findLevelNoteId((labelNoteKey) => {
                removeLabelsInNote(props.noteId, props.lableId, labelNoteKey)
            })
        }
    }


    return (
        <View style={styles.topFooter} >
            <View
                style={styles.iconButton}>
                <MaterialCommunityIcon name="label-outline" size={25} style={{ marginRight: 20, marginLeft: 10, opacity: .6 }} />
                <View >
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                    //onPress={() => findLevelNoteId((key) => console.log('key=======' + key))}
                    >
                        <Text
                            style={{ fontSize: 18, width: 365, opacity: .6 }}>
                            {props.Label}
                        </Text>

                        <CheckBox
                            value={state.check}
                            checked={state.check}
                            onChange={checkBoxOnPress}
                        />
                    </TouchableOpacity>
                </View>

            </View>

        </View >
    );

}

const styles = StyleSheet.create({

    topFooter: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',

    },

    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

});































































// import React, {useState,useEffect} from 'react';
// import { View, StyleSheet, TouchableOpacity, Text, CheckBox } from 'react-native';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { addLabelsInNote, removeLabelsInNote, getDesireNote } from '../LabelsDataBase'

// export default class CheckBoxList extends React.Component {
//     constructor(props) {
//         super(props);
//         state = {
//             check: false,
//         };
//     }

//     componentDidMount() {
//         console.log('agsdfssah', props);
//         // console.log('note obj ====== ', props.labelId);
//         if (props.noteObj !== null && props.noteObj !== undefined) {
//             getDesireNote(props.noteId, (note) => {
//                 if (note.NoteLabel !== null && note.NoteLabel !== undefined) {
//                     Object.getOwnPropertyNames(note.NoteLabel).map((key) => (
//                         key === props.lableId &&
//                         setState({
//                             check: true
//                         }, () =>
//                             console.log('checkstaus true ===', State.check)
//                         )
//                     ))
//                 }
//                 else {
//                     setState({
//                         check: false
//                     }, () =>
//                         console.log('checkstaus false &&===', State.check)
//                     )
//                 }
//             })
//         }
//     }

//     findLevelNoteId = (callback) => {
//         if (props.LabelNote !== null && props.LabelNote !== undefined) {
//             Object.getOwnPropertyNames(props.LabelNote).map((key) => {
//                 if (props.LabelNote[key].NoteId === props.noteId) {
//                     callback(key)
//                 }
//             })
//         }
//     }

//     checkBoxOnPress = () => {
//         if (!state.check) {
//             if (props.noteObj !== null && props.noteObj !== undefined) {
//                 addLabelsInNote(props.noteId, props.lableId, props.Label)
//             }
//         }
//         else {
//             findLevelNoteId((labelNoteKey) => {
//                 console.log(props.noteId + 'hjjkh' + props.lableId + 'jhkjhk' + labelNoteKey);

//                 removeLabelsInNote(props.noteId, props.lableId, labelNoteKey)
//             })
//         }
//     }

//     render() {
//         // console.log('note data=--note', props.noteId);


//         return (
//             <View style={styles.topFooter} >
//                 <View
//                     style={styles.iconButton}>
//                     <MaterialCommunityIcon name="label-outline" size={25} style={{ marginRight: 20, marginLeft: 10, opacity: .6 }} />
//                     <View >
//                         <TouchableOpacity
//                             style={{ flexDirection: 'row' }}
//                             onPress={handleChange}>
//                             <Text
//                                 style={{ fontSize: 18, width: 365, opacity: .6 }}>
//                                 {props.Label}
//                             </Text>
//                             <CheckBox
//                                 value={state.check}
//                                 checked={state.check}
//                                 onChange={checkBoxOnPress}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({

//     topFooter: {
//         height: 50,
//         display: 'flex',
//         flexDirection: 'row',
//         backgroundColor: '#ffffff',

//     },

//     iconButton: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'transparent'
//     },

// });