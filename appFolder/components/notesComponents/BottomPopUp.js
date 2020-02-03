import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, } from 'react-native';
import { TouchableHighlight } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from "react-native-raw-bottom-sheet";
import ColorPalette from 'react-native-color-palette'


export default class BottomPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trash: false
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <MaterialCommunityIcon name="dots-vertical" size={30} style={{ marginRight: 10, marginTop: 8 }} onPress={
                    () => {
                        this.RBSheet.open();
                    }
                } />
                {
                    this.props.Trash === false ?
                        <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}

                            height={330}
                            duration={250}
                        >
                            <View style={{ backgroundColor: this.props.setColor }}>
                                <TouchableHighlight underlayColor='#363534'
                                    onPress={() => this.props.trashAndRestore(!this.state.trash)
                                        // this.props.navigation.navigate('Notes')
                                    }>
                                    <View
                                        style={styles.iconButton}>
                                        <AntIcon name="delete" size={25} />
                                        <Text style={styles.textField}>delete</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='#363534'
                                    onPress={() => alert('Data copy')
                                        // this.props.navigation.navigate('Notes')
                                    }>
                                    <View
                                        style={styles.iconButton}>
                                        <MaterialIcon name="content-copy" size={25} />
                                        <Text style={styles.textField}>Make a copy</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='#363534'
                                    onPress={() => alert('Sharedata')
                                        // this.props.navigation.navigate('Notes')
                                    }>
                                    <View
                                        style={styles.iconButton}>
                                        <AntIcon name="sharealt" size={25} />
                                        <Text style={styles.textField}>send</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='#363534'
                                    onPress={() => alert('add Uase Data')
                                        // this.props.navigation.navigate('Notes')
                                    }>
                                    <View
                                        style={styles.iconButton}>
                                        <AntIcon name="adduser" size={25} />
                                        <Text style={styles.textField}>collabrator</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='#363534'
                                    onPress={() => alert('labels maintain')
                                        // this.props.navigation.navigate('Notes')
                                    }>
                                    <View
                                        style={styles.iconButton}>
                                        <MaterialCommunityIcon name="label-outline" size={25} />
                                        <Text style={styles.textField}>labels</Text>
                                    </View>
                                </TouchableHighlight>
                                <ControlledColorPicker {...this.props} style={{ marginTop: -12 }} />
                            </View>
                        </RBSheet>
                        :
                        <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}

                            height={99}
                            duration={250}
                        >
                            <View style={{ backgroundColor: this.props.setColor }}>
                                <TouchableHighlight underlayColor='#363534'
                                    onPress={() => alert('restore data')
                                        // this.props.navigation.navigate('Notes')
                                    }>
                                    <View
                                        style={styles.iconButton}>
                                        <MaterialCommunityIcon name="delete-restore" size={25} />
                                        <Text style={styles.textField}>Restore</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='#363534'
                                    onPress={() => alert('permanent delete')
                                        // this.props.navigation.navigate('Notes')
                                    }>
                                    <View
                                        style={styles.iconButton}>
                                        <MaterialIcon name="delete-forever" size={25} />
                                        <Text style={styles.textField}>Delete Forever</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </RBSheet>
                }
            </View>
        );
    }
}

const ControlledColorPicker = (props) => {
    let selectedColor = '';
    return (
        <ScrollView horizontal>
            <ColorPalette
                onChange={color => props.onChangeColor(color)}
                title={null}
                colors={['#ffffff', '#f28b82', '#fbbc04', '#ff80b3', '#ccff90', '#a7ffeb', '#d7aefb',
                    '#adad85', '#4dc3ff', '#d98c8c', '#ecffb3', '#ffb3ff', '#b3e6b3', '#ffc6b3']}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    drawerTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 15,
        marginLeft: 15
    },
    textField: {
        display: 'flex',
        fontSize: 20,
        marginLeft: 26

    },
})