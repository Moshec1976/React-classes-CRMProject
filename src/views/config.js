
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDM7TaSxapcgBwnGnk2Xu5f_GXf-IzP9jA",
    authDomain: "scope-crm.firebaseapp.com",
    databaseURL: "https://scope-crm.firebaseio.com",
    projectId: "scope-crm",
    storageBucket: "scope-crm.appspot.com",
    messagingSenderId: "1028177414505",
    appId: "1:1028177414505:web:7bb00a193489d60a4c95f8",
    measurementId: "G-JX0F9FK4KK"
});

const db = firebaseApp.firestore();

export default db; 