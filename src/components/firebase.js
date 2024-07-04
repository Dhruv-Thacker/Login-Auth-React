// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOUdeYKgeC6KF3RhAgV3lKylzsPknErgE",
  authDomain: "login-authh.firebaseapp.com",
  projectId: "login-authh",
  storageBucket: "login-authh.appspot.com",
  messagingSenderId: "281294754026",
  appId: "1:281294754026:web:fe217bf29d1671ca4f8793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;