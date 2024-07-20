
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDqNJeR-Iq00rl9SqDKvmM1UM3W1LOmBY8",
  authDomain: "portfolio-website-2c7be.firebaseapp.com",
  projectId: "portfolio-website-2c7be",
  storageBucket: "portfolio-website-2c7be.appspot.com",
  messagingSenderId:  "1058597518299",
  appId: "1:1058597518299:web:70dc4e06f1cc1d684585fe",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);