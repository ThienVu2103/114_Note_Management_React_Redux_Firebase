// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC-BjWObkDoX1Gg71NjPSPwAp4Ao7dPhp4",
    authDomain: "notereact-c8e9a.firebaseapp.com",
    databaseURL: "https://notereact-c8e9a.firebaseio.com",
    projectId: "notereact-c8e9a",
    storageBucket: "notereact-c8e9a.appspot.com",
    messagingSenderId: "68677087363"
};

firebase.initializeApp(config);

export const noteData = firebase.database().ref('DataForNote');
