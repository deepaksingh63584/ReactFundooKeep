import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';


function SearchNote(props) {

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