import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';
import { getAllNotes } from '../LabelsDataBase'
import ListViewNotes from '../notesComponents/ListViewNotes'

function SearchNote(props) {
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        let notes = []
        getAllNotes(async (snapObj) => {
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    snapObj[key].noteId = key
                    notes.push(snapObj[key])
                }
                )
            }
            setNotes(notes.reverse());
        })
    }, [search])

    const SearchFilterFunction = (text) => {
        const notesA = (notes).filter((item) => {
            const itemTitle = item.Title ? item.Title.toUpperCase() : ''.toUpperCase();
            const itemContent = item.Content ? item.Content.toUpperCase() : ''.toUpperCase();
            const itemData = text.toUpperCase();
            return itemTitle.indexOf(itemData) > -1 || itemContent.indexOf(itemData) > -1
        });
        setSearch(text)
        setData(notesA)
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
                {
                    <FlatList
                        data={data}
                        ListHeaderComponent={<Text style={{ padding: 10, fontSize: 18 }}>Match Result : {data.length}</Text>}
                        renderItem={
                            ({ item }) => <ListViewNotes
                                {...item}
                                notesProps={props} />
                        }
                    />

                }
            </View>

        </View>
    );

}

export default SearchNote;