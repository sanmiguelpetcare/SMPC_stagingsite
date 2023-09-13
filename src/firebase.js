import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDbjDwuFYnOKfWsgCp33IzUCBPPcmu7qNQ",
    authDomain: "nutri-chunks.firebaseapp.com",
    projectId: "nutri-chunks",
    storageBucket: "nutri-chunks.appspot.com",
    messagingSenderId: "126421882251",
    appId: "1:126421882251:web:10858a59c0d9009ed78b8e"
  };
  

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

export const googleAuthprovider = new firebase.auth.GoogleAuthProvider();