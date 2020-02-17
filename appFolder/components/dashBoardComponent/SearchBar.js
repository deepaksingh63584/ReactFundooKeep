import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export default class SreachBar extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View style={styles.searchButton}>
                <IconButton
                />
                <SearchBar
                    placeholder="Type Here..."
                    lightTheme
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchButton: {
        position: 'absolute',
        borderRadius: 8,
        marginTop: 8
    },
});