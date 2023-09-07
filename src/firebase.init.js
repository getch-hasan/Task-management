// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC08hsmplF2dFv6IM9qXE86pk-djGmMP8g",
    authDomain: "task-management-559dd.firebaseapp.com",
    projectId: "task-management-559dd",
    storageBucket: "task-management-559dd.appspot.com",
    messagingSenderId: "380359108392",
    appId: "1:380359108392:web:d62659bf34654668e2521d",
    measurementId: "G-1RTPB8DQQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;