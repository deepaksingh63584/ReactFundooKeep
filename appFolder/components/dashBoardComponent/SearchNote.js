import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';
import { getAllNotes } from '../LabelsDataBase'


function SearchNote(props) {
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState([])

    search = text => {
        console.log(text);
    };
    clear = () => {
        this.search.clear();
    };

    useEffect(() => {
        getAllNotes(() => {
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    snapObj[key].noteId === key
                    notes.push(snapObj[key])
                }
                )
            }
            setNotes(reverse());
        })
    }, [search])

    const SearchFilterFunction = (text) => {
        const notesArray = (data).filter((item) => {
            const itemTitle = item.Title ? item.Title.toUpperCase() : ''.toUpperCase();
            const itemContent = item.Content ? item.Content.toUpperCase() : ''.toUpperCase();
            const itemData = text.toUpperCase();
            return itemTitle.indexOf(itemData) > -1 || itemContent.indexOf(itemData) > -1
        });
        setSearch(text)
        setNotes(notesArray)
    }

    return (
        <View style={{ backgroundColor: '#ffffff' }} >
            <Appbar style={{ backgroundColor: '#ffffff' }} >
                <Appbar.BackAction
                    onPress={() => props.navigation.navigate('Notes')}
                />
                <TextInput
                    autoFocus={true}
                    style={{ fontSize: 18, width: 375 }}
                    placeholder={'Search your notes'}
                    onChangeText={text => SearchFilterFunction(text)}
                    onClear={text => SearchFilterFunction('')}

                />
            </Appbar>

            <View>
                <FlatList
                    renderItem={
                        ({ item }) => <NoteCard
                            Item={item}
                            Navigate={props}
                        />
                    }
                />
            </View>

        </View>
    );

}

export default SearchNote;

// import React from 'react';
// import { View, Text, TextInput, FlatList } from 'react-native';
// import { Appbar } from 'react-native-paper';

// export default class SearchNote extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             search: '',
//         };
//     }

//     search = text => {
//         console.log(text);
//     };
//     clear = () => {
//         this.search.clear();
//     };


//     SearchFilterFunction = (text) => {                                                  //passing the inserted text in textinput
//         const newData = this.arrayholder.filter(function (item) {                       //applying filter for the inserted text in search bar
//             const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//             const textData = text.toUpperCase();
//             return itemData.indexOf(textData) > -1;
//         });
//         this.setState({
//             dataSource: newData,                                                         //setting the filtered newData on datasource //After setting the data it will automatically re-render the view
//             search: text,
//         })
//     }

//     render() {
//         return (
//             <View style={{ backgroundColor: '#ffffff' }} >
//                 <Appbar style={{ backgroundColor: '#ffffff' }} >
//                     <Appbar.BackAction
//                         onPress={() => props.navigation.navigate('Notes')}
//                     />
//                     <TextInput
//                         autoFocus={true}
//                         style={{ fontSize: 18, width: 375 }}
//                         placeholder={'Search your notes'}
//                         onChangeText={text => this.SearchFilterFunction(text)}
//                         onClear={text => this.SearchFilterFunction('')}
//                         value={this.state.search}
//                     />
//                 </Appbar>

//                 <View>
//                     <FlatList
//                         renderItem={
//                             ({ item }) => <NoteCard
//                                 Item={item}
//                                 Navigate={props}
//                             />
//                         }
//                     />
//                 </View>

//             </View>
//         );
//     }
// }
