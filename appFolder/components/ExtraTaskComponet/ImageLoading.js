import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import TopBar from '../dashBoardComponent/topAppBar'

export default class ImageLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showGrid: false };
    }
    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(60)).map((v, i) => {
            return { id: i, src: 'https://unsplash.it/400/400?image=' + (i + 1) };
        });
        that.setState({
            dataSource: items,
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <TopBar {...this.props}
                        listView={this.state.listView}
                        viewChange={this.viewChange}
                    />
                </View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <FastImage
                                style={styles.ImageLoading}
                                source={{
                                    uri: item.src,
                                    priority: FastImage.priority.high,
                                }}
                            />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({

    ImageLoading: {
        height: 225,
        width: 225,
        marginTop: 4,
        marginLeft: 2,
        borderRadius: 8,
    },
});

//********************************************* iMAGE LOADING LIBRARY EXTRA TASK***************************************** */