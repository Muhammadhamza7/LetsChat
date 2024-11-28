// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZccA6x3R6JMaaBai2z7qRvfaNKFfFxhs",
  authDomain: "chatapp-73218.firebaseapp.com",
  projectId: "chatapp-73218",
  storageBucket: "chatapp-73218.firebasestorage.app",
  messagingSenderId: "131269948960",
  appId: "1:131269948960:web:cd6f4ed018787ed442ae45",
  measurementId: "G-9LGDQ00Q68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);
export const db = getFirestore(app);