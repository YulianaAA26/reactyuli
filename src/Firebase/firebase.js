// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFFG_9bvFWvVXtxderioD1dZ4jTk577Bo",
  authDomain: "proy-react-appyuli.firebaseapp.com",
  projectId: "proy-react-appyuli",
  storageBucket: "proy-react-appyuli.appspot.com",
  messagingSenderId: "192179899032",
  appId: "1:192179899032:web:853a8d0b70f27c392b1eed",
  measurementId: "G-V1NN9187C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export const db = getFirestore(App);
const storage = getStorage(App);