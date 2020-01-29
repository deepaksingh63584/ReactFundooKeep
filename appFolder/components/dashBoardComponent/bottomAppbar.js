import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { AppbarBottom } from 'material-bread';


export default class Page extends Component {
    render() {
        return (
            <View style={{ bottom: 0, width: '100%', position: 'absolute', display: 'flex', flexDirection: "column" }}>
                <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', bottom: -32, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() =>this.props.navigation.navigate('CreateNote') }
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
                            <Image
                                style={{ height: 28, width: 28, marginLeft: 15 }}
                                source={require('../../assets/crop_original.png')}
                            />
                        </View>
                    </View>
                </View >
            </View>
        );
    }
}