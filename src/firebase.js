// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT9EDN_6vbjLruMOWSdN8IITLQIheEa_0",
  authDomain: "my-word-3d7d4.firebaseapp.com",
  projectId: "my-word-3d7d4",
  storageBucket: "my-word-3d7d4.appspot.com",
  messagingSenderId: "344371144471",
  appId: "1:344371144471:web:aeb39a98225854d222f952",
  measurementId: "G-ZYMQ6MY6TR",
};
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
