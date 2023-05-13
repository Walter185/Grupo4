import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkPrZK7AH3Uy26y_GpcuCgCGsiBAiXRhY",
  authDomain: "g4-pediloya.firebaseapp.com",
  projectId: "g4-pediloya",
  storageBucket: "g4-pediloya.appspot.com",
  messagingSenderId: "975109574721",
  appId: "1:975109574721:web:11585cbe37655b7bf736c0",
  measurementId: "G-LT0ZR41SFP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

 