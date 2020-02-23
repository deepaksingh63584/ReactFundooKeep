import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Dialog, Avatar, Button } from 'material-bread'
import ImagePicker from 'react-native-image-picker';
import { Title, Paragraph } from 'react-native-paper';
import { fetchUserData, storeProfileImage, signOut } from '../logInComponents/logInFireBase'
import AsyncStorage from '@react-native-community/async-storage'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            fileUri: null,
            userObj: null
        };
    }

    chooseImage = () => {
        let options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, async (response) => {
            // const source = { uri: response.uri };
            if (response.uri) {
                await this.setState({
                    // filePath: response,
                    // fileData: response.data,
                    fileUri: response.uri
                })
                storeProfileImage(response.uri)
            }
        })
    }

    componentDidMount = () => {
        fetchUserData(async (snapObj) => {
            this.setState({
                userObj: snapObj
            })
        })
    }

    render() {
        return (
            <>
                <Avatar
                    type={this.state.userObj !== null && 'image'}
                    image={this.state.userObj !== null && <Image source={{ uri: this.state.userObj.ProfileImage }} />}
                    size={38}
                    style={{ marginTop: -7, }}
                    onPress={() => this.setState({ visible: !this.state.visible })}
                />

                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => this.setState({ visible: false })}
                    style={
                        {
                            width: 400,
                            padding: 12,
                        }
                    }
                >
                    <Avatar
                        type={this.state.userObj !== null && 'image'}
                        image={this.state.userObj !== null && <Image source={{ uri: this.state.userObj.ProfileImage }} />}
                        size={150}
                        style={
                            {
                                alignSelf: 'center',
                            }
                        }
                        onPress={this.chooseImage}
                    />
                    {

                        this.state.userObj !== null &&
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Title style={{ fontSize: 26, padding: 4 }}>
                                {this.state.userObj.firstName + ' ' + this.state.userObj.lastName}
                            </Title>
                            <Paragraph style={{ fontSize: 16 }}>
                                {this.state.userObj.emailId}
                            </Paragraph>
                        </View>
                    }
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            paddingVertical: 18
                        }}
                    >
                        <Button
                            text={'Cancel'}
                            onPress={() => this.setState({ visible: false })}
                        />
                        <Button
                            text={'Sign Out'}
                            onPress={() => {
                                signOut(async () => {
                                    await AsyncStorage.clear()
                                    this.props.navigation.navigate('LogIn')
                                })
                            }}
                        />
                    </View>
                </Dialog>
            </>

        );
    }
}