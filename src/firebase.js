// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkB9F8_EHG1ekBlIcvx7kFHxkGNhyFQtA",
  authDomain: "fir-auth-d1388.firebaseapp.com",
  projectId: "fir-auth-d1388",
  storageBucket: "fir-auth-d1388.appspot.com",
  messagingSenderId: "28631495130",
  appId: "1:28631495130:web:a8e358bbea8434d9a510e3",
  measurementId: "G-DZB9RHEK1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};
