import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwKhOQAbrgIWLZSPHOGbH8lpJOPmQxUw0",
    authDomain: "clothing-db-dcfdc.firebaseapp.com",
    databaseURL: "https://clothing-db-dcfdc.firebaseio.com",
    projectId: "clothing-db-dcfdc",
    storageBucket: "clothing-db-dcfdc.appspot.com",
    messagingSenderId: "820020769697",
    appId: "1:820020769697:web:3cc1d8c41c1777e5b011e0",
    measurementId: "G-GWBH5F48PR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;