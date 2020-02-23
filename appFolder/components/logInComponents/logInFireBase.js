import logInFireBase from '../firebase';
import AsyncStorage from '@react-native-community/async-storage'


export function resisterUser(firstname, lastname, emailid, passworditem, thencallback) {
    logInFireBase.auth().createUserWithEmailAndPassword(emailid, passworditem).then((success) => {
        logInFireBase.database().ref('/users/' + success.user.uid + '/personalData/').set({
            firstName: firstname,
            lastName: lastname,
            emailId: emailid,

        })
        thencallback()
    })

}

export function toDashboard(emailid, password, thencallback, catchcallback) {
    console.log(emailid + '   ///   ' + password);
    logInFireBase.auth().signInWithEmailAndPassword(emailid, password).then(async (success) => {
        // await logInFireBase.database().ref('/users/' + success.user.uid + '/personalData/').once('value', async (snapshot) => {
        //     let snapObj = snapshot.val();
        // })
        await AsyncStorage.setItem('isAuth', 'true')
        await AsyncStorage.setItem('uid', success.user.uid)
        console.log(success.user.uid);
        thencallback()

    })
        .catch((error) => {
            let errors = {}
            if (error.code === 'auth/user-not-found') {
                errors["emailId"] = 'This account is not sign Up with Fundoo'
            }
            else {
                errors["password"] = 'Invalid Password, try again'
            }
            catchcallback(errors)
        });
}

export function forgatePassword(emailid, thencallback, catchcallback) {
    let errors = {};
    logInFireBase.auth().sendPasswordResetEmail(emailid).then(() => {
        alert("Congratulation ! \n Your password has reset and new password send to the your Email-id");
        thencallback()
    })
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                errors["emailId"] = 'This account is not sign Up with Fundoo'
            }
            catchcallback(errors)
        });
}

export function signOut(callback) {
    logInFireBase.auth().signOut().then(() => {

        callback()
    })
        .catch()
}

export async function fetchUserData(callback) {
    const uid = await AsyncStorage.getItem('uid')
    logInFireBase.database().ref('/users/' + uid + '/personalData/').on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}

export async function storeProfileImage(imageSource) {
    const uid = await AsyncStorage.getItem('uid')
    logInFireBase.database().ref('/users/' + uid + '/personalData/').update({
        ProfileImage: imageSource
    })
}

export async function fetchNotesData(callback) {
    const uid = await AsyncStorage.getItem('uid')
    logInFireBase.database().ref('/users/' + uid + '/Notes/' + notekey + '/').on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}

export async function storeNotesImage(imageSource) {
    const uid = await AsyncStorage.getItem('uid')
    logInFireBase.database().ref('/users/' + uid + '/Notes/' + notekey + '/').update({
        NoteImage: imageSource
    })
}

