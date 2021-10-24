// import firebase from "firebase";

import firebase from 'firebase/compat';
import 'firebase/firestore';

  const firebaseConfig = {
  apiKey: "AIzaSyCj4WYSO12ltdIeMB3Uh6umatGXJ5OdSVE",
  authDomain: "fir-7c477.firebaseapp.com",
  projectId: "fir-7c477",
  storageBucket: "fir-7c477.appspot.com",
  messagingSenderId: "61703115481",
  appId: "1:61703115481:web:faa36c89421e547c0f24c8",
  measurementId: "G-ELXRDZKCSL",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};