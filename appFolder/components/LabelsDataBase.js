import labelsdataBase from './firebase';
import AsyncStorage from '@react-native-community/async-storage'

export async function addLabel(labelvalue) {
    const uid = await AsyncStorage.getItem('uid')
    labelsdataBase.database().ref('/users/' + uid + '/Label/').push({
        Label: labelvalue
    })
}