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