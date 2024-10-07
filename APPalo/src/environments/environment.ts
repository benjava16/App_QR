// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa5tgC74zENBIkPSrgdLAIdXdkd6wr3ks",
  authDomain: "qrproyectdb.firebaseapp.com",
  projectId: "qrproyectdb",
  storageBucket: "qrproyectdb.appspot.com",
  messagingSenderId: "131916643590",
  appId: "1:131916643590:web:b82808b30ef130cce8b287",
  measurementId: "G-LPG02C04WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);