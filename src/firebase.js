import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDwfnsSS68oMy2tx7xo_x4FOyodjF9HNo4",
    authDomain: "zhi-ying-decision-maker.firebaseapp.com",
    projectId: "zhi-ying-decision-maker",
    storageBucket: "zhi-ying-decision-maker.appspot.com",
    messagingSenderId: "689064967665",
    appId: "1:689064967665:web:af6f4d0d9f2ad6faaa5850"
});

export default firebaseConfig;