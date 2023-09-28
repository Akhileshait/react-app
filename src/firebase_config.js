// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWVwXfPfd-DZY_jMWAbDup56wp6aiZS1s",
  authDomain: "react-app-76edf.firebaseapp.com",
  projectId: "react-app-76edf",
  storageBucket: "react-app-76edf.appspot.com",
  messagingSenderId: "512314684759",
  appId: "1:512314684759:web:f6c4140f728a0a553d3a12",
  measurementId: "G-HB3223VF5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const googleAuth= new GoogleAuthProvider();
export const db=getFirestore(app);

