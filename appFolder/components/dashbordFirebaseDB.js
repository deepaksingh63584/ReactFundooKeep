import dashboardFireBase from './firebase';
import AsyncStorage from '@react-native-community/async-storage'
import Trash from './dashBoardComponent/DrawerComponent/trash';



export async function setNoteInFireBase(Title, Content, PinStatus, Archive, Color, Trash, callback) {
    // console.log('uf : ' + uid);
    const uid = await AsyncStorage.getItem('uid')
    dashboardFireBase.database().ref('/users/' + uid + '/Notes/').push({
        Title: Title,
        Content: Content,
        PinStatus: PinStatus,
        Archive: Archive,
        Trash: Trash,
        Color: Color,
        reminderDate: null,
        reminderTime: null,
    }).then((success) => {
        callback()
    });
}

export async function fetchNotesFromFireBase(callback) {
    const uid = await AsyncStorage.getItem('uid')
    dashboardFireBase.database().ref('/users/' + uid + '/Notes/').on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}


export async function updateNotesFromFireBase(key, Title, Content, PinStatus, Archive, Color, Trash, callback) {
    const uid = await AsyncStorage.getItem('uid')
    dashboardFireBase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        Title: Title,
        Content: Content,
        PinStatus: PinStatus,
        Archive: Archive,
        Trash: Trash,
        Color: Color,
        reminderDate: null,
        reminderTime: null,
    }).then((success) => {
        callback()
    });
}

export async function trashAndRestore(key, trash) {
    // console.log(key);
    // console.log(status);
    const uid = await AsyncStorage.getItem('uid')
    dashboardFireBase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        Trash: trash
    })
}

export async function archiveNotes(callback) {
    const uid = await AsyncStorage.getItem('uid')
    dashboardFireBase.database().ref('/users/' + uid + '/Notes/').orderByChild('Archive').equalTo(true).on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}


export async function trashNotes(callback) {
    const uid = await AsyncStorage.getItem('uid')
    dashboardFireBase.database().ref('/users/' + uid + '/Notes/').orderByChild('Trash').equalTo(true).on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}

export async function permanentDelete(key) {
    // console.log(key);
    // console.log(status);
    const uid = await AsyncStorage.getItem('uid')
    dashboardFireBase.database().ref('/users/' + uid + '/Notes/' + key + '/').remove()
}