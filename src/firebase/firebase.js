// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgP80ADBY3sZ6Bij5frJuh1lcgSX9INJQ",
    authDomain: "time-manage-login.firebaseapp.com",
    projectId: "time-manage-login",
    storageBucket: "time-manage-login.appspot.com",
    messagingSenderId: "399479767148",
    appId: "1:399479767148:web:2ca314b6fd76fbc6aa5849",
    measurementId: "G-RDEGY1RZVT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
