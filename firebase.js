import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOzoIbYLkyEjV2kpcLi2AdXiKU-bd0mys",
    authDomain: "tasks-10aed.firebaseapp.com",
    projectId: "tasks-10aed",
    storageBucket: "tasks-10aed.appspot.com",
    messagingSenderId: "816422432594",
    appId: "1:816422432594:web:c99b0621cefe4a5457548b"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;