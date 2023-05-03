import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAuNudZHlV5kvd_jTCmAU9-3lUkoWYrFyE",
    authDomain: "g4-pediloya.firebaseapp.com",
    projectId: "g4-pediloya",
    storageBucket: "g4-pediloya.appspot.com",
    messagingSenderId: "975109574721",
    appId: "1:975109574721:web:11585cbe37655b7bf736c0",
    measurementId: "G-LT0ZR41SFP"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore();
  export const auth = getAuth();

  