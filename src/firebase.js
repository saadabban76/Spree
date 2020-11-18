import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAEqR3lmvJjaf-FS0Wx7g9l4pI2vsRl_OM",
    authDomain: "spree-cb6a6.firebaseapp.com",
    databaseURL: "https://spree-cb6a6.firebaseio.com",
    projectId: "spree-cb6a6",
    storageBucket: "spree-cb6a6.appspot.com",
    messagingSenderId: "362192162632",
    appId: "1:362192162632:web:7e18b420860d6461c82d7d",
    measurementId: "G-1HCJXV60D0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();