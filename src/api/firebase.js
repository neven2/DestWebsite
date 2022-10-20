import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAUeU8WmNeADjA8ic65FUI2P5pwyc1vk4",
  authDomain: "destproject-c93d8.firebaseapp.com",
  projectId: "destproject-c93d8",
  storageBucket: "destproject-c93d8.appspot.com",
  messagingSenderId: "650049862648",
  appId: "1:650049862648:web:32d000092e6a8f55a4f40d",
  measurementId: "G-SP91L9QQ9G"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




