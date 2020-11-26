import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPgM3jQMMn5g7D8KraVT6jjPYsao25keQ",
    authDomain: "todo-app-f1e10.firebaseapp.com",
    databaseURL: "https://todo-app-f1e10.firebaseio.com",
    projectId: "todo-app-f1e10",
    storageBucket: "todo-app-f1e10.appspot.com",
    messagingSenderId: "877345026031",
    appId: "1:877345026031:web:e234d1e7b7d0e70a70d01a",
    measurementId: "G-KZ1JCQ6M1F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;