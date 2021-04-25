import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwlv7olerrJfvr_4Vq-wsJ8S1J2MqSH9A",
    authDomain: "disney-clone-1cfa3.firebaseapp.com",
    projectId: "disney-clone-1cfa3",
    storageBucket: "disney-clone-1cfa3.appspot.com",
    messagingSenderId: "161087152763",
    appId: "1:161087152763:web:6a19f9c3790d2adfbb78de"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;