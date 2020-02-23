import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { AppbarBottom } from 'material-bread';

export default class BottomAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            fileUri: null,
            userObj: null
        };
    }

    render() {
        return (
            <View style={{ bottom: 0, width: '100%', position: 'absolute', display: 'flex', flexDirection: "column" }}>
                <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', bottom: -32, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CreateNote')}
                        style={{ height: 75, width: 75 }}
                    >
                        <Image
                            style={{ height: 75, width: 75 }}
                            source={require('../../assets/add.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <AppbarBottom
                        // fab={<Fab backgroundColor={'deeppink'} />}
                        color={'white'}
                        fabPosition={'end'}
                        fabCutout
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', padding: 15 }}>
                        <View>
                            <Image
                                style={{ height: 28, width: 28, marginLeft: 15 }}
                                source={require('../../assets/check.png')}
                            />
                        </View>
                        <View>
                            <Image
                                style={{ height: 28, width: 28, marginLeft: 15 }}
                                source={require('../../assets/brush.png')}
                            />
                        </View>
                        <View>
                            <Image
                                style={{ height: 28, width: 28, marginLeft: 15 }}
                                source={require('../../assets/miceicon.png')}
                            />
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 28, width: 28, marginLeft: 15 }}
                                    source={require('../../assets/crop_original.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
            </View>
        );
    }
}