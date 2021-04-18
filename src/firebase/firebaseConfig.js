import firebase from 'firebase/app' ;
import   'firebase/firestore' ;
import   'firebase/auth' ;

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBQY9W3g9LHuoyXlEVwxQ0SOy20llKBG9w",
    authDomain: "react-journal-app-cfc45.firebaseapp.com",
    projectId: "react-journal-app-cfc45",
    storageBucket: "react-journal-app-cfc45.appspot.com",
    messagingSenderId: "906518751950",
    appId: "1:906518751950:web:b77ed870c9c2453280fe9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }