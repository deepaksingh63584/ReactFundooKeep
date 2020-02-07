import React, { Component } from 'react';
import { View, Text } from 'react-native';
import OtherTopBar from '../dashBoardComponent/OtherTopBar';
import BottomAppBar from '../dashBoardComponent/bottomAppbar';

export default class LabelContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelValue: [],
        };
    }

    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <OtherTopBar {...this.props} />
                    {
                        this.state.labelValue.length === 0 ? null :
                            <FlatList
                                data={this.state.labelValue}
                                renderItem={({ item }) => <ListViewNotes {...item} notesProps={this.props} />}
                            />
                    }
                </View>
                <View style={{ bottom: 0, width: '100%', position: 'absolute' }}>
                    <BottomAppBar {...this.props} />
                </View>
            </View>
        );
    }
}
