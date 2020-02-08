import labelsdataBase from './firebase';
import AsyncStorage from '@react-native-community/async-storage'

export async function createLabel(labelValue) {
    const uid = await AsyncStorage.getItem('uid')
    if (labelValue !== "" && labelValue !== undefined) {
        labelsdataBase.database().ref('/users/' + uid + '/Label/').push({
            Label: labelValue
        })
    }
}

export async function getLabel(callback) {
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Label/').on('value', (snapshot) => {
        callback(snapshot.val())
    })
}

export async function updateLabels(key, label) {
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Label/' + key + '/').update({
        Label: label
    })
}

export async function deleteLabel(key) {
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Label/' + key + '/').remove()
}

export async function getLabelNote(NoteKey, labelKey, labelName) {
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Notes/' + NoteKey + '/NoteLebel/' + labelKey + '/').set({
        LabelName: labelName
    })
}

export async function addLabelsInNote(notekey, labelId, labelName) {
    const uid = await AsyncStorage.getItem('uid')
    console.log('nvfjhdhb ===uid  ', uid);

    labelsdataBase.database().ref('/users/' + uid + '/Notes/' + notekey + '/NoteLabel/' + labelId + '/').set({
        LabelName: labelName
    });
    labelsdataBase.database().ref('/users/' + uid + '/Label/' + labelId + '/LabelNote/').push({
        NoteId: notekey
    });
}

export async function removeLabelsInNote(NoteKey, labelKey, labelNoteKey) {
    const uid = await AsyncStorage.getItem('uid')
    console.log('labelkeyremove------', labelKey);
    labelsdataBase.database().ref('/users/' + uid + '/Notes/' + NoteKey + '/NoteLabel/' + labelKey + '/').remove();
    labelsdataBase.database().ref('/users/' + uid + '/Label/' + labelKey + '/LabelNote/' + labelNoteKey + '/').remove();
}

export async function getLabelFromNote(labelKey, callback) {
    // console.log('labelkey------', labelKey);
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Label/' + labelKey + '/LabelNote/').on('value', (snapshot) => {
        // console.log('labelkey------', labelKey);
        // console.log(snapshot, '==--firebase');
        callback(snapshot.val())
    })
}

export async function getDesireNote(NoteId, callback) {
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Notes/' + NoteId + '/').on('value', (snapshot) => {
        callback(snapshot.val())
    })
}

export async function getAllNotes(callback) {
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Notes/').on('value', (snapshot) => {
        callback(snapshot.val())
    })
}