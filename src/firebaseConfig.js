// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgMYRLo0lafr91qT0lsft8OmJ_sIMr3pA",
  authDomain: "mylinkedinnetwork-50693.firebaseapp.com",
  projectId: "mylinkedinnetwork-50693",
  storageBucket: "mylinkedinnetwork-50693.appspot.com",
  messagingSenderId: "617682960660",
  appId: "1:617682960660:web:eee62905f0ddb456e98201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };