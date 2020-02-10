{/* <View
    style={styles.iconButton2}>
    <TouchableOpacity
        onPress={() => { this.props.NotesProps }}>
        <MaterialCommunityIcon name="pin-outline" size={22} style={{ marginRight: 24 }} />
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() => { this.props.NotesProps }}>
        <MaterialCommunityIcon name="bell-outline" size={22} style={{ marginRight: 24 }} />
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() => { this.props.NotesProps }}>
        <MaterialIcon name="archive" size={22} style={{ marginRight: 24 }} />
    </TouchableOpacity>
</View> */}


// handleChange = async () => {
//     if (this.state.NoteLabel !== null && NoteLabel !== undefined) {
//         Object.getOwnPropertyNames(props.NoteObj.NoteLabel).map((key) => (
//             key === props.labelId &&
//             await this.setState({
//                 checkBox: !this.state.checkBox
//             })
//         ))
//     }
//     else {
//         checkBox(false)
//     }
// }



// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Text, FlatList } from 'react-native';
// import { Appbar } from 'react-native-paper';
// import { styles4 } from '../../Css/NoteService.style';
// import { globalStyle } from '../../Css/GlobalStyle.style';
// import model from '../../ModelServices/DashboardModel';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { CheckBox } from 'react-native-elements';

// const AddLabel = (props) => {

//     const uid = props.navigation.getParam('uid')
//     const noteObj = props.navigation.getParam('Note')
//     const [search, setSearch] = useState('');
//     const [labels, setLabels] = useState([])
//     const [selectedLabel, setSelectedLabels] = useState([]);

//     const sendSelectedLabel = (label) => {
//         setSelectedLabels([...selectedLabel, label])
//     }

//     const spliceSelectedLabel = (label) => {
//         let labelsArray = [...selectedLabel]
//         let stringifyArray = []
//         labelsArray.map((item) => (
//             stringifyArray.push(JSON.stringify(item))
//         ))
//         let index = stringifyArray.indexOf(JSON.stringify(label))
//         if (index !== -1) {
//             labelsArray.splice(index, 1);
//             setSelectedLabels(labelsArray);
//         }
//     }

//     useEffect(() => {
//         model.getLabel(uid, (data) => {
//             setLabels(data)
//         })
//     }, [])

//     return (
//         <View style={[styles4.noteServiceContainer, { backgroundColor: '#fff', }]}>
//             <Appbar style={{ backgroundColor: '#fff', elevation: 6 }} >
//                 <Appbar.BackAction
//                     color={globalStyle.inherit}
//                     size={globalStyle.size25}
//                     onPress={() => props.navigation.navigate('NoteCreator',
//                         {
//                             selectedLabel: selectedLabel
//                         })}
//                 />

//                 <TextInput
//                     style={{ width: '80%', fontSize: 18 }}
//                     placeholder={'Enter label name'}
//                     value={search}
//                     onChangeText={search => setSearch(search)}
//                 />
//             </Appbar>
//             <View style={{ marginTop: 20 }}>
//                 <FlatList
//                     data={labels}
//                     renderItem={
//                         ({ item }) =>
//                             <CheckList
//                                 {...item}
//                                 noteObj={noteObj}
//                                 uid={uid}
//                                 sendSelectedLabel={sendSelectedLabel}
//                                 spliceSelectedLabel={spliceSelectedLabel}
//                             />

//                     }
//                     keyExtractor={item => item.labelId}
//                 />

//             </View>

//         </View>
//     );
// };


// export function removeLabelUncheck(labeledNotes, noteKey, labelId, callback) {
//     let labeledNoteKey;
//     if (labeledNotes !== null && labeledNotes !== undefined) {
//         Object.getOwnPropertyNames(labeledNotes).map((key) => (
//             labeledNotes[key].NoteId === noteKey ? labeledNoteKey = key : null
//         ))
//     }
//     removeLabelsInNote(noteKey, labelId, labeledNoteKey);
//     if (callback !== null && callback !== undefined) callback()
// }

// function LabelCheckBoxes(props) {

//     const [check, setCheck] = React.useState(false)

//     // const noteKey = React.useContext(UserContext)
//     const labelName = props.labelData.Label

//     React.useEffect(() => {
//         if (props.NoteObj.NoteLabel !== null && props.NoteObj.NoteLabel !== undefined) {
//             Object.getOwnPropertyNames(props.NoteObj.NoteLabel).map((key) => (
//                 key === props.labelId &&
//                 setCheck(true)
//             ))
//         }
//         else {
//             setCheck(false)
//         }
//     }, [props.NoteObj.NoteLabel, props.labelId])


// const CheckList = (props) => {

//     const [check, setCheck] = useState(false)

//     useEffect(() => {
//         if (props.noteObj !== null && props.noteObj !== undefined) {
//             model.desireNote(props.uid, props.noteObj.noteId, (note) => {
//                 if (note.NoteLabels !== null && note.NoteLabels !== undefined) {
//                     Object.getOwnPropertyNames(note.NoteLabels).map((key) => (
//                         key === props.labelId &&
//                         setCheck(true)
//                     ))
//                 }
//                 else {
//                     setCheck(false)
//                 }
//             })
//         }

//     }, [check])

//     const checkBoxOnPress = () => {
//         if (!check) {
//             if (props.noteObj !== undefined && props.noteObj !== null) {
//                 model.addLabel(props.uid, props.noteObj.noteId, props.labelId, props.Label)

//             }
//             else {
//                 setCheck(true)
//                 props.sendSelectedLabel({ 'labelId': props.labelId, 'label': props.Label })
//             }
//         }
//         else {
//             if (props.noteObj !== undefined && props.noteObj !== null) {
//                 model.findLabeledNoteId(props.noteObj.noteId, props,
//                     (labeledNoteId) => {
//                         model.removeLabel(props.uid, props.noteObj.noteId, props.labelId, labeledNoteId)
//                     })
//             }
//             else {
//                 setCheck(false)
//                 props.spliceSelectedLabel({ 'labelId': props.labelId, 'label': props.Label })
//             }
//         }
//     }



//     return (
//         <View style={styles4.listItem}>
//             <Icon
//                 name={'label-outline'}
//                 size={26}
//                 color={globalStyle.inherit}
//             />
//             <Text style={styles4.labelInput}>{props.Label}</Text>
//             <CheckBox
//                 containerStyle={{ top: -10 }}
//                 checked={check}
//                 checkedIcon={
//                     <Icon name="check-box" size={26} color={'dodgerblue'} />
//                 }
//                 uncheckedIcon={
//                     <Icon name="check-box-outline-blank" size={26} color={globalStyle.inherit} />
//                 }
//                 checkedColor='red'
//                 onPress={checkBoxOnPress}
//             />
//         </View>
//     );
// }

// export default AddLabel;


// import React, { Component } from 'react';
// import { View, PermissionsAndroid, AsyncStorage, Image } from 'react-native';
// import { Dialog, Avatar, Button } from 'material-bread';
// import { signOut, fetchUserData } from '../../Firebase/AuthServices';
// import ImagePicker from 'react-native-image-picker'
// import * as Permissions from '../../Permissions/AndroidPermission'
// import { storeProfileImage } from '../../Firebase/AuthServices'
// import { Title, Paragraph } from 'react-native-paper';

// const options = {
//     title: 'Select Avatar',
//     storageOptions: {
//         skipBackup: true,
//         noData: true
//     },
// };

// export default class Profile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible: false,
//             image: null,
//             userObj: props.navigation.getParam('userObj', null),
//         };
//     }

//     uploadProfileImage = async () => {
//         const grantCam = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
//         const grantRead = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
//         const grantWrite = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
//         if (grantCam && grantRead && grantWrite) {
//             this.selectImage()
//         }
//         else {
//             await Permissions.requestCameraPermission()
//             await Permissions.requestExternalStoragePermission()
//             this.uploadProfileImage()
//         }
//     }

//     selectImage = () => {
//         ImagePicker.showImagePicker(options, async (response) => {
//             console.log('Response = ', response);

//             if (response.uri) {
//                 await this.setState({
//                     image: response
//                 })
//                 storeProfileImage(response.uri)
//             }

//         });
//     }

//     randomColor = () => {
//         let colorArray = [
//             '#4f2da6', '#cc405c', '#cf6017', '#d1d119', '#54d421',
//             '#4d41d4', '#1acfd9', '#25465e', '#625f63', '#2f8f7c',
//             '#027b99', '#eb4949', '#bd8b02', '#32a88f', '#655dcf'
//         ];
//         let random = Math.floor(Math.random() * colorArray.length);
//         return colorArray[random];
//     }

//     componentDidMount = () => {
//         fetchUserData(this.props.uid, async (snap) => {
//             this.setState({
//                 userObj: snap
//             })
//         })
//     }

//     render() {

//         return (
//             <>


//                 <Avatar
//                     type={this.state.userObj === null || this.state.userObj.ProfileImage === undefined ? "text" : 'image'}
//                     content={this.state.userObj !== null && (this.state.userObj.FirstName).charAt(0)}
//                     contentColor={'white'}
//                     size={35}
//                     //color={'#eb4949'}
//                     color={this.randomColor()}
//                     size={35}
//                     image={this.state.userObj.ProfileImage !== undefined && <Image source={{ uri: this.state.userObj.ProfileImage }} />}
//                     onPress={() => this.setState({ visible: !this.state.visible })}
//                 />


//                 <Dialog
//                     visible={this.state.visible}
//                     onTouchOutside={() => this.setState({ visible: false })}
//                     style={
//                         {
//                             width: 400,
//                             padding: 10,
//                         }
//                     }
//                 >
//                     <Avatar
//                         type={this.state.avtarSrc === null || this.state.userObj.ProfileImage === undefined ? "text" : 'image'}
//                         content={this.state.userObj !== null && (this.state.userObj.FirstName).charAt(0)}
//                         contentColor={'white'}
//                         size={100}
//                         color={this.randomColor()}
//                         image={this.state.userObj.ProfileImage !== undefined && <Image source={{ uri: this.state.userObj.ProfileImage }} />}
//                         style={
//                             {
//                                 alignSelf: 'center',
//                             }
//                         }
//                         onPress={this.uploadProfileImage}
//                     />

//                     {
//                         this.state.userObj !== null &&
//                         <View style={{ alignItems: 'center' }}>
//                             <Title>
//                                 {this.state.userObj.FirstName + ' ' + this.state.userObj.LastName}
//                             </Title>
//                             <Paragraph>
//                                 {this.state.userObj.EmailId}
//                             </Paragraph>
//                         </View>
//                     }

//                     <View
//                         style={{
//                             justifyContent: 'space-between',
//                             flexDirection: 'row',
//                             paddingVertical: 20
//                         }}
//                     >
//                         <Button
//                             text={'cancel'}
//                             onPress={() => this.setState({ visible: false })}
//                         />
//                         <Button
//                             text={'Sign out'}
//                             onPress={() => {
//                                 signOut(async () => {
//                                     console.log(await AsyncStorage.getItem('isAuth'))
//                                     await AsyncStorage.clear()
//                                     this.props.navigation.navigate('SignIn')
//                                 })
//                             }}
//                         />
//                     </View>
//                 </Dialog>
//             </>
//         );
//     }
// }