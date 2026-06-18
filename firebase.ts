// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfaZ0ceBqLvMijG2onKrlaJEvs901lb3E",
  authDomain: "mind-echo-889d6.firebaseapp.com",
  projectId: "mind-echo-889d6",
  storageBucket: "mind-echo-889d6.firebasestorage.app",
  messagingSenderId: "760803852792",
  appId: "1:760803852792:web:9e0f40eedaa6d39684d60d",
  measurementId: "G-Q7R1EJ3ZLZ"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
